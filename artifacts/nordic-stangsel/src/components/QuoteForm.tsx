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
import { useLanguage, type Language } from "@/lib/language";

const CONFIGURED_FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;
const SUPPORT_EMAIL = "info@nordicstangsel.com";
const DEFAULT_FORM_ENDPOINT = "/api/quote-request";
const BLOCKED_DOMAIN = "nordicstangsel.se";
const TRUSTED_API_HOSTS = new Set(["nordicstangsel.com", "www.nordicstangsel.com"]);

type FormValues = {
  name: string;
  companyName: string;
  phone: string;
  email: string;
  projectType: string;
  message: string;
};

type SubmissionMode = "api" | "mailto";

function getSafeFormEndpoint() {
  const endpoint = CONFIGURED_FORM_ENDPOINT?.trim();

  if (!endpoint) {
    return DEFAULT_FORM_ENDPOINT;
  }

  const normalizedEndpoint = endpoint.toLowerCase();

  if (normalizedEndpoint.includes(BLOCKED_DOMAIN)) {
    return DEFAULT_FORM_ENDPOINT;
  }

  if (endpoint.startsWith("/")) {
    return endpoint;
  }

  try {
    const url = new URL(endpoint);
    const hostname = url.hostname.toLowerCase();

    if (hostname === BLOCKED_DOMAIN || hostname.endsWith(`.${BLOCKED_DOMAIN}`)) {
      return DEFAULT_FORM_ENDPOINT;
    }

    if (TRUSTED_API_HOSTS.has(hostname)) {
      return endpoint;
    }
  } catch {
    return DEFAULT_FORM_ENDPOINT;
  }

  return DEFAULT_FORM_ENDPOINT;
}

const FORM_ENDPOINT = getSafeFormEndpoint();

function getFormContent(language: Language) {
  if (language === "sv") {
    return {
      projectTypes: [
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
      ],
      labels: {
        title: "Få kostnadsfri offert inom 24 timmar",
        name: "Namn",
        companyName: "Företag",
        phone: "Telefon",
        email: "E-postadress",
        projectType: "Typ av projekt",
        message: "Beskrivning av projektet",
        attach: "Bifoga bilder",
        optional: "frivilligt",
      },
      placeholders: {
        name: "För- och efternamn",
        companyName: "Företagsnamn, BRF eller organisation",
        phone: "070 123 45 67",
        email: "namn@foretag.se",
        projectType: "Välj projekttyp",
        message: "Beskriv ditt projekt, ungefärliga mått, placering och specifika önskemål...",
      },
      helper: {
        images: "Foton av platsen, befintliga stängsel eller ritningar hjälper oss att ge en mer precis offert.",
        upload: "Välj filer",
        noEndpoint: "Om direktkoppling inte är aktiv öppnas din e-postapp med uppgifterna förifyllda när du skickar formuläret.",
        fastestRoute: "Skicka några rader om projektet, ungefärlig plats och vilken typ av stängsel eller grind ni behöver. Då kan vi återkomma snabbare med rätt nästa steg.",
      },
      success: {
        apiTitle: "Tack för din förfrågan",
        mailtoTitle: "E-postutkast öppnat",
        apiBody: "Vi har mottagit dina uppgifter och återkommer så snart vi kan med en offert eller eventuella följdfrågor.",
        mailtoBody: "Vi har förberett din förfrågan i din e-postapp. Lägg gärna till eventuella bilder som bilagor innan du skickar meddelandet.",
        reset: "Skicka en till förfrågan",
      },
      error: {
        intro: "Det gick inte att skicka förfrågan via formuläret. Kontakta oss direkt:",
      },
      validation: {
        name: "Namn måste vara minst 2 tecken.",
        phone: "Ange ett giltigt telefonnummer.",
        email: "Ange en giltig e-postadress.",
        projectType: "Välj en projekttyp.",
        message: "Meddelandet måste vara minst 10 tecken.",
      },
      mail: {
        subjectPrefix: "Offertförfrågan",
        name: "Namn",
        companyName: "Företag",
        phone: "Telefon",
        email: "E-post",
        projectType: "Typ av projekt",
        description: "Projektbeskrivning",
        attachmentNote: (count: number) => `Observera: ${count} bildbilagor valdes i formuläret och behöver bifogas manuellt i e-postmeddelandet.`,
      },
    };
  }

  return {
    projectTypes: [
      "Industrial fencing",
      "School fencing",
      "Sports facility fencing",
      "Security fencing",
      "Automatic gate",
      "Sliding gate",
      "Swing gate",
      "Panel fencing",
      "Villa fencing",
      "Custom solution",
      "Repair and maintenance",
    ],
    labels: {
      title: "Get a free quote within 24 hours",
      name: "Name",
      companyName: "Company",
      phone: "Phone",
      email: "Email address",
      projectType: "Project type",
      message: "Project description",
      attach: "Attach images",
      optional: "optional",
    },
    placeholders: {
      name: "First and last name",
      companyName: "Company, housing association or organization",
      phone: "+46 70 123 45 67",
      email: "name@company.com",
      projectType: "Select project type",
      message: "Describe your project, approximate dimensions, location and any specific requirements...",
    },
    helper: {
      images: "Photos of the site, existing fencing or drawings help us provide a more accurate quote.",
      upload: "Choose files",
      noEndpoint: "If direct form delivery is not active, your email app will open with the details prefilled when you submit the form.",
      fastestRoute: "Send a short description of the project, the approximate location and what type of fencing or gate you need. That helps us come back faster with the right next step.",
    },
    success: {
      apiTitle: "Thank you for your request",
      mailtoTitle: "Email draft opened",
      apiBody: "We have received your details and will get back to you as soon as possible with a quote or any follow-up questions.",
      mailtoBody: "We have prepared your request in your email app. Please add any images as attachments before sending the message.",
      reset: "Send another request",
    },
    error: {
      intro: "We could not send your request through the form. Contact us directly:",
    },
    validation: {
      name: "Name must contain at least 2 characters.",
      phone: "Enter a valid phone number.",
      email: "Enter a valid email address.",
      projectType: "Select a project type.",
      message: "The message must contain at least 10 characters.",
    },
    mail: {
      subjectPrefix: "Quote request",
      name: "Name",
      companyName: "Company",
      phone: "Phone",
      email: "Email",
      projectType: "Project type",
      description: "Project description",
      attachmentNote: (count: number) => `Note: ${count} image attachment(s) were selected in the form and need to be attached manually in the email message.`,
    },
  };
}

function buildMailtoLink(values: FormValues, attachmentCount: number, language: Language) {
  const content = getFormContent(language);
  const subject = `${content.mail.subjectPrefix} - ${values.projectType}`;
  const bodyLines = [
    `${content.mail.name}: ${values.name}`,
    `${content.mail.companyName}: ${values.companyName || "-"}`,
    `${content.mail.phone}: ${values.phone}`,
    `${content.mail.email}: ${values.email}`,
    `${content.mail.projectType}: ${values.projectType}`,
    "",
    `${content.mail.description}:`,
    values.message,
  ];

  if (attachmentCount > 0) {
    bodyLines.push("", content.mail.attachmentNote(attachmentCount));
  }

  return `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
}

function openMailtoDraft(values: FormValues, attachmentCount: number, language: Language) {
  if (typeof window !== "undefined") {
    window.location.href = buildMailtoLink(values, attachmentCount, language);
  }
}

function isConfirmedEmailDelivery(response: unknown): response is { status: string; recipient: string } {
  if (!response || typeof response !== "object") {
    return false;
  }

  const data = response as { status?: unknown; recipient?: unknown };

  return data.status === "sent" && data.recipient === SUPPORT_EMAIL;
}

function QuoteFormInner({ language }: { language: Language }) {
  const content = getFormContent(language);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [submissionMode, setSubmissionMode] = useState<SubmissionMode>("api");
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const filesRef = useRef<FileList | null>(null);

  const formSchema = z.object({
    name: z.string().min(2, { message: content.validation.name }),
    companyName: z.string().optional(),
    phone: z.string().min(6, { message: content.validation.phone }),
    email: z.string().email({ message: content.validation.email }),
    projectType: z.string().min(1, { message: content.validation.projectType }),
    message: z.string().min(10, { message: content.validation.message }),
  });

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      companyName: "",
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
    const imageNames = files ? Array.from(files).map((file) => file.name).slice(0, 10) : [];

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...values, attachmentCount, imageNames }),
      });
      const contentType = res.headers.get("content-type") ?? "";
      const responseBody = contentType.includes("application/json") ? await res.json().catch(() => null) : null;

      if (res.ok && isConfirmedEmailDelivery(responseBody)) {
        setSubmissionMode("api");
        setIsSubmitted(true);
        return;
      }
    } catch {
      // Fall through to the safe .com mail draft below.
    }

    openMailtoDraft(values, attachmentCount, language);
    setSubmissionMode("mailto");
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <div className="bg-[#1a3349] p-8 text-center text-white md:p-12" data-testid="quote-success">
        <div className="mb-6 flex justify-center">
          <CheckCircle2 className="h-16 w-16 text-white/80" />
        </div>
        <h3 className="mb-4 text-2xl font-serif">
          {submissionMode === "api" ? content.success.apiTitle : content.success.mailtoTitle}
        </h3>
        <p className="mx-auto mb-8 max-w-md text-white/70">
          {submissionMode === "api" ? content.success.apiBody : content.success.mailtoBody}
        </p>
        <Button
          variant="outline"
          className="rounded-none border-white bg-transparent text-white hover:bg-white hover:text-[#0f1f2e]"
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
          {content.success.reset}
        </Button>
      </div>
    );
  }

  return (
    <div className="border border-gray-100 bg-white p-8 shadow-sm md:p-10" data-testid="quote-form">
      <h3 className="mb-8 text-2xl font-serif text-[#0f1f2e]">{content.labels.title}</h3>

      {submitError && (
        <div className="mb-6 border border-red-100 bg-red-50 p-5 text-sm" data-testid="quote-error">
          <div className="mb-4 flex items-start gap-3">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
            <p className="font-medium text-red-700">{content.error.intro}</p>
          </div>
          <div className="space-y-2 pl-7">
            <a
              href="tel:+46183461111"
              className="flex items-center gap-2 font-medium text-[#0f1f2e] transition-colors hover:text-[#1a3349]"
            >
              <Phone className="h-3.5 w-3.5 shrink-0" />
              Uppsala: +46 18 34 61 11
            </a>
            <a
              href="tel:+46835633666"
              className="flex items-center gap-2 font-medium text-[#0f1f2e] transition-colors hover:text-[#1a3349]"
            >
              <Phone className="h-3.5 w-3.5 shrink-0" />
              Stockholm: +46 8 35 63 66
            </a>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="flex items-center gap-2 font-medium text-[#0f1f2e] transition-colors hover:text-[#1a3349]"
            >
              <Mail className="h-3.5 w-3.5 shrink-0" />
              {SUPPORT_EMAIL}
            </a>
          </div>
        </div>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs uppercase tracking-wider text-gray-500">{content.labels.name}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={content.placeholders.name}
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
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs uppercase tracking-wider text-gray-500">
                    {content.labels.companyName} <span className="normal-case text-gray-400">({content.labels.optional})</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={content.placeholders.companyName}
                      {...field}
                      className="rounded-none border-gray-200 focus-visible:ring-[#0f1f2e]"
                      data-testid="input-company-name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs uppercase tracking-wider text-gray-500">{content.labels.phone}</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder={content.placeholders.phone}
                      {...field}
                      className="rounded-none border-gray-200 focus-visible:ring-[#0f1f2e]"
                      data-testid="input-phone"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-xs uppercase tracking-wider text-gray-500">{content.labels.email}</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder={content.placeholders.email}
                      {...field}
                      className="rounded-none border-gray-200 focus-visible:ring-[#0f1f2e]"
                      data-testid="input-email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="projectType"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs uppercase tracking-wider text-gray-500">{content.labels.projectType}</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger
                      className="rounded-none border-gray-200 focus:ring-[#0f1f2e]"
                      data-testid="select-project-type"
                    >
                      <SelectValue placeholder={content.placeholders.projectType} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="rounded-none">
                    {content.projectTypes.map((type) => (
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

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xs uppercase tracking-wider text-gray-500">
                  {content.labels.message}
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={content.placeholders.message}
                    className="min-h-[120px] resize-none rounded-none border-gray-200 focus-visible:ring-[#0f1f2e]"
                    {...field}
                    data-testid="input-message"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div>
            <label className="mb-1 block text-xs uppercase tracking-wider text-gray-500">
              {content.labels.attach} <span className="normal-case text-gray-400">({content.labels.optional})</span>
            </label>
            <p className="mb-3 text-xs text-gray-400">{content.helper.images}</p>
            <div className="flex items-center gap-4">
              <label className="flex cursor-pointer items-center justify-center gap-2 border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100">
                <Upload className="h-4 w-4" />
                {content.helper.upload}
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
                      setFileName(`${files.length} ${language === "sv" ? "fil(er) valda" : "file(s) selected"}`);
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
            className="h-12 w-full rounded-none bg-[#1a3349] text-sm uppercase tracking-widest text-white hover:bg-[#264056]"
          >
            {content.labels.title}
          </Button>
        </form>
      </Form>
    </div>
  );
}

export function QuoteForm() {
  const { language } = useLanguage();
  return <QuoteFormInner key={language} language={language} />;
}
