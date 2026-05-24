import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/lib/language";

export default function NotFound() {
  const { language, localizePath } = useLanguage();
  const isSv = language === "sv";

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-white pt-20">
      <div className="px-4 text-center">
        <p className="mb-6 text-xs uppercase tracking-[0.2em] text-gray-400">{isSv ? "Sidan hittades inte" : "Page not found"}</p>
        <h1 className="mb-4 font-serif text-8xl leading-none text-[#0f1f2e] md:text-9xl">404</h1>
        <p className="mx-auto mb-10 max-w-md text-lg font-light text-gray-500">
          {isSv ? "Sidan du letar efter existerar inte eller har flyttats. Gå tillbaka till startsidan och försök igen." : "The page you are looking for does not exist or has moved. Go back to the homepage and try again."}
        </p>
        <Link href={localizePath("/")} className="inline-flex items-center gap-2 bg-[#1a3349] px-8 py-3 text-sm tracking-wide text-white transition-colors hover:bg-[#264056]">
          <ArrowLeft className="h-4 w-4" />
          {isSv ? "Tillbaka till startsidan" : "Back to homepage"}
        </Link>
      </div>
    </main>
  );
}
