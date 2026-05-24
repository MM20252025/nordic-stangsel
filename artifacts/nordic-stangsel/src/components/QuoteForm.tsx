import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle2, Upload, AlertCircle, Phone, Mail } from "lucide-react";
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
  "Idrottsanläggning",
  "Säkerhetsstängsel",
  "Automatisk grind",
  "Skjutgrind",
  "Svänggrind",
  "Panelstängsel",
  "Villastängsel",
  "Kundanpassad lösning",
  "Reparation och underhåll",
];

const formSchema = z.object({
  name: z.string().min(2, { message: "Namn måste vara minst 2 tecken." }),
  phone: z.string().min(6, { message: "Ange ett giltigt telefonnummer." }),
  email: z.string().email({ message: "Ange en giltig e-postadress." }),
  projectType: z.string().min(1, { message: "Välj en projekttyp." }),
  message: z.string().min(10, { message: "Meddelandet måste vara minst 10 tecken." }),
});

type FormValues = z.infer<typeof formSchema>;

type SubmissionMode = "api" | "mailto";

const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;
const SUPPORT_EMAIL = "info@nordicstangsel.com";

function buildMailtoLink(values: FormValues, attachmentCount: number) {
  const subject = `Offertförfrågan - ${values.projectType}`;
  const bodyLines = [
    `Namn: ${values.name}`,
    `Telefon: ${values.phone}`,
    `E-post: ${values.email}`,
    `Typ av projekt: ${values.projectType}`,
    "",
    "Projektbeskrivning:",
    values.message,
  ];

  if (attachmentCount > 0) {
    bodyLines.push(
      "",
      `Observera: ${attachmentCount} bildbilaga/bildbilagor valdes i formuläret och behöver bifogas manuellt i e-postmeddelandet.`,
    );
  }

  return `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
}

export function QuoteForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [submissionMode, setSubmissionMode] = useState<SubmissionMode>("api");
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const filesRef = useRef<FileList | null>(null);

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

    const files = filesRef.current;
    const attachmentCount = files?.length ?? 0;

    if (FORM_ENDPOINT) {
      try {
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("phone", values.phone);
        formData.append("email", values.email);
        formData.append("projectType", values.projectType);
        formData.append("message", values.message);

        if (files && files.length > 0) {
          Array.from(files).forEach((file) => {
            formData.append("images", file, file.name);
          });
        }

        const res = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData,
        });
        if (res.ok) {
          setSubmissionMode("api");
          setIsSubmitted(true);
        } else {
          setSubmitError(true);
        }
      } catch {
        setSubmitError(true);
      }
      return;
    }

    if (typeof window !== "undefined") {
      window.location.href = buildMailtoLink(values, attachmentCount);
    }
    setSubmissionMode("mailto");
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <div className="bg-[#1a3349] text-white p-8 md:p-12 text-center" data-testid="quote-success">
        <div className="flex justify-center mb-6">
          <CheckCircle2 className="h-16 w-16 text-white/80" />
        </div>
        <h3 className="text-2xl font-serif mb-4">
          {submissionMode === "api" ? "Tack för din förfrågan" : "E-postutkast öppnat"}
        </h3>
        <p className="text-white/70 mb-8 max-w-md mx-auto">
          {submissionMode === "api"
            ? "Vi har mottagit dina uppgifter och återkommer så snart vi kan med en offert eller eventuella följdfrågor."
            : "Vi har förberett din förfrågan i din e-postapp. Lägg gärna till eventuella bilder som bilagor innan du skickar meddelandet."}
        </p>
        <Button
          variant="outline"
          className="bg-transparent text-white border-white hover:bg-white hover:text-[#0f1f2e] rounded-none"
          onClick={() => {
            setIsSubmitted(false);
            setSubmitError(false);
            setSubmissionMode("api");
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
      <h3 className="text-2xl font-serif mb-8 text-[#0f1f2e]">Få kostnadsfri offert inom 24 timmar</h3>

      {submitError && (
        <div className="bg-red-50 border border-red-100 p-5 mb-6 text-sm" data-testid="quote-error">
          <div className="flex items-start gap-3 mb-4">
            <AlertCircle className="h-4 w-4 text-red-600 shrink-0 mt-0.5" />
            <p className="text-red-700 font-medium">
              Det gick inte att skicka förfrågan via formuläret. Kontakta oss direkt:
            </p>
          </div>
          <div className="pl-7 space-y-2">
            <a
              href="tel:+46183461111"
              className="flex items-center gap-2 text-[#0f1f2e] hover:text-[#1a3349] font-medium transition-colors"
            >
              <Phone className="h-3.5 w-3.5 shrink-0" />
              Uppsala: +46 18 34 61 11
            </a>
            <a
              href="tel:+46835633666"
              className="flex items-center gap-2 text-[#0f1f2e] hover:text-[#1a3349] font-medium transition-colors"
            >
              <Phone className="h-3.5 w-3.5 shrink-0" />
              Stockholm: +46 8 35 63 66
            </a>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="flex items-center gap-2 text-[#0f1f2e] hover:text-[#1a3349] font-medium transition-colors"
            >
              <Mail className="h-3.5 w-3.5 shrink-0" />
              {SUPPORT_EMAIL}
            </a>
          </div>
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
                  <FormLabel className="text-xs uppercase tracking-wider text-gray-500">Namn</FormLabel>
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
                  <FormLabel className="text-xs uppercase tracking-wider text-gray-500">Telefon</FormLabel>
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
                  <FormLabel className="text-xs uppercase tracking-wider text-gray-500">E-postadress</FormLabel>
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
                  <FormLabel className="text-xs uppercase tracking-wider text-gray-500">Typ av projekt</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger
                        className="rounded-none border-gray-200 focus:ring-[#0f1f2e]"
                        data-testid="select-project-type"
                      >
                        <SelectValue placeholder="Välj projekttyp" />
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
                <FormLabel className="text-xs uppercase tracking-wider text-gray-500">
                  Beskrivning av projektet
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Beskriv ditt projekt, ungefärliga mått, placering och specifika önskemål..."
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
            <label className="text-xs uppercase tracking-wider text-gray-500 block mb-1">
              Bifoga bilder <span className="normal-case text-gray-400">(frivilligt)</span>
            </label>
            <p className="text-xs text-gray-400 mb-3">
              Foton av platsen, befintliga stängsel eller ritningar hjälper oss att ge en mer precis offert.
            </p>
            <div className="flex items-center gap-4">
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
            {!FORM_ENDPOINT && (
              <p className="text-xs text-gray-500 mt-3">
                Om direktkoppling inte är aktiv öppnas din e-postapp med uppgifterna förifyllda när du skickar formuläret.
              </p>
            )}
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-[#1a3349] hover:bg-[#264056] text-white rounded-none h-auto min-h-14 py-3 text-base tracking-wide whitespace-normal leading-snug"
            disabled={form.formState.isSubmitting}
            data-testid="button-submit-quote"
          >
            {form.formState.isSubmitting ? "Skickar..." : "Få kostnadsfri offert inom 24 timmar"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
