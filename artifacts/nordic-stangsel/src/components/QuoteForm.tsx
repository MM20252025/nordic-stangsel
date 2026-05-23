import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle2, Upload, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const projectTypes = [
  "Industristängsel",
  "Skolstängsel",
  "Stängsel för idrottsanläggningar",
  "Säkerhetsstängsel",
  "Automatiska grindar",
  "Skjutgrindar",
  "Svänggrindar",
  "Panelstängsel",
  "Villastängsel",
  "Kundanpassad lösning",
  "Reparationer och underhåll",
];

const formSchema = z.object({
  name: z.string().min(2, { message: "Ange minst två tecken." }),
  phone: z.string().min(6, { message: "Ange ett giltigt telefonnummer." }),
  email: z.string().email({ message: "Ange en giltig e-postadress." }),
  projectType: z.string().min(1, { message: "Välj en projekttyp." }),
  message: z.string().min(10, { message: "Beskriv projektet med minst tio tecken." }),
});

type FormValues = z.infer<typeof formSchema>;

const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;

export function QuoteForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const filesRef = useRef<FileList | null>(null);
  const isFormEndpointConfigured = Boolean(FORM_ENDPOINT);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      projectType: "",
      message: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setSubmitError(false);

    if (!FORM_ENDPOINT) {
      setSubmitError(true);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("phone", values.phone);
      formData.append("email", values.email);
      formData.append("projectType", values.projectType);
      formData.append("message", values.message);

      const files = filesRef.current;
      if (files && files.length > 0) {
        Array.from(files).forEach((file) => {
          formData.append("images", file, file.name);
        });
      }

      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (res.ok) {
        setIsSubmitted(true);
      } else {
        setSubmitError(true);
      }
    } catch {
      setSubmitError(true);
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-[#1a3349] text-white p-8 md:p-12 text-center" data-testid="quote-success">
        <div className="flex justify-center mb-6">
          <CheckCircle2 className="h-16 w-16 text-white/80" />
        </div>
        <h3 className="text-2xl font-serif mb-4">Tack för din förfrågan</h3>
        <p className="text-white/70 mb-8 max-w-md mx-auto">
          Vi har mottagit dina uppgifter och återkommer så snart vi kan med nästa steg i processen.
        </p>
        <Button
          variant="outline"
          className="bg-transparent text-white border-white hover:bg-white hover:text-[#0f1f2e] rounded-none"
          onClick={() => {
            setIsSubmitted(false);
            setSubmitError(false);
            form.reset();
            setFileName(null);
            filesRef.current = null;
            if (fileInputRef.current) fileInputRef.current.value = "";
          }}
        >
          Skicka en till förfrågan
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-10 border border-gray-100 shadow-sm" data-testid="quote-form">
      <h3 className="text-2xl font-serif mb-8 text-[#0f1f2e]">Begär offert</h3>

      {submitError && (
        <div className="flex items-start gap-3 bg-red-50 border border-red-100 p-4 mb-6 text-sm text-red-700">
          <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
          <span>
            {isFormEndpointConfigured ? (
              <>
                Det gick inte att skicka förfrågan. Kontakta oss direkt på{" "}
                <a href="tel:+46183461111" className="underline underline-offset-2">
                  +46 18 34 61 11
                </a>
                .
              </>
            ) : (
              <>
                Offertformuläret är tillfälligt inte kopplat till någon mottagare. Kontakta oss direkt på{" "}
                <a href="tel:+46183461111" className="underline underline-offset-2">
                  +46 18 34 61 11
                </a>
                eller{" "}
                <a href="mailto:marcin@stangselab.se" className="underline underline-offset-2">
                  marcin@stangselab.se
                </a>
                .
              </>
            )}
          </span>
        </div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs uppercase tracking-wider text-gray-500">Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="För- och efternamn"
                      {...field}
                      className="rounded-none border-gray-200 focus-visible:ring-[#0f1f2e]"
                      data-testid="input-name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs uppercase tracking-wider text-gray-500">Phone</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="070 123 45 67"
                      {...field}
                      className="rounded-none border-gray-200 focus-visible:ring-[#0f1f2e]"
                      data-testid="input-phone"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs uppercase tracking-wider text-gray-500">Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="namn@foretag.se"
                      {...field}
                      className="rounded-none border-gray-200 focus-visible:ring-[#0f1f2e]"
                      data-testid="input-email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="projectType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs uppercase tracking-wider text-gray-500">Project type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger
                        className="rounded-none border-gray-200 focus:ring-[#0f1f2e]"
                        data-testid="select-project-type"
                      >
                        <SelectValue placeholder="Välj typ av projekt" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="rounded-none">
                      {projectTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs uppercase tracking-wider text-gray-500">Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Beskriv projektet, platsen och vad ni vill ha hjälp med."
                    className="min-h-[120px] rounded-none border-gray-200 focus-visible:ring-[#0f1f2e] resize-none"
                    {...field}
                    data-testid="input-message"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div>
            <label className="text-xs uppercase tracking-wider text-gray-500 block mb-3">Upload images</label>
            <div className="flex items-center gap-4 flex-wrap">
              <label className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-200 bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors text-sm font-medium">
                <Upload className="h-4 w-4" />
                Välj filer
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    const files = e.target.files;
                    filesRef.current = files;
                    if (files && files.length > 0) {
                      setFileName(`${files.length} fil(er) vald(a)`);
                    } else {
                      setFileName(null);
                    }
                  }}
                  data-testid="input-images"
                />
              </label>
              {fileName && <span className="text-sm text-gray-500">{fileName}</span>}
            </div>
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-[#1a3349] hover:bg-[#264056] text-white rounded-none h-14 text-base tracking-wide"
            disabled={form.formState.isSubmitting}
            data-testid="button-submit-quote"
          >
            {form.formState.isSubmitting ? "Skickar..." : "Skicka offertförfrågan"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
