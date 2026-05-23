import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle2, Upload } from "lucide-react";
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
  "Förskolestängsel",
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

export function QuoteForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      projectType: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 800);
  }

  if (isSubmitted) {
    return (
      <div className="bg-[#0f1f2e] text-white p-8 md:p-12 text-center" data-testid="quote-success">
        <div className="flex justify-center mb-6">
          <CheckCircle2 className="h-16 w-16 text-white/80" />
        </div>
        <h3 className="text-2xl font-serif mb-4">Tack för din förfrågan</h3>
        <p className="text-white/70 mb-8 max-w-md mx-auto">
          Vi har mottagit dina uppgifter och återkommer till dig med en offert eller kompletterande frågor inom 24 timmar.
        </p>
        <Button 
          variant="outline" 
          className="bg-transparent text-white border-white hover:bg-white hover:text-[#0f1f2e] rounded-none"
          onClick={() => {
            setIsSubmitted(false);
            form.reset();
            setFileName(null);
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
                    <Input placeholder="För- och efternamn" {...field} className="rounded-none border-gray-200 focus-visible:ring-[#0f1f2e]" data-testid="input-name" />
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
                    <Input type="tel" placeholder="070 123 45 67" {...field} className="rounded-none border-gray-200 focus-visible:ring-[#0f1f2e]" data-testid="input-phone" />
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
                  <FormLabel className="text-xs uppercase tracking-wider text-gray-500">E-post</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="namn@foretag.se" {...field} className="rounded-none border-gray-200 focus-visible:ring-[#0f1f2e]" data-testid="input-email" />
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
                  <FormLabel className="text-xs uppercase tracking-wider text-gray-500">Projekttyp</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="rounded-none border-gray-200 focus:ring-[#0f1f2e]" data-testid="select-project-type">
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
                <FormLabel className="text-xs uppercase tracking-wider text-gray-500">Meddelande & Beskrivning</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Beskriv ditt projekt, ungefärliga mått och specifika önskemål..." 
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
            <label className="text-xs uppercase tracking-wider text-gray-500 block mb-3">Ladda upp bilder (Frivilligt)</label>
            <div className="flex items-center gap-4">
              <label className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-200 bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors text-sm font-medium">
                <Upload className="h-4 w-4" />
                Välj filer
                <input 
                  type="file" 
                  multiple 
                  accept="image/*" 
                  className="hidden" 
                  onChange={(e) => {
                    if (e.target.files && e.target.files.length > 0) {
                      setFileName(`${e.target.files.length} fil(er) vald(a)`);
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
            className="w-full bg-[#0f1f2e] hover:bg-[#1a2f45] text-white rounded-none h-14 text-base tracking-wide"
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