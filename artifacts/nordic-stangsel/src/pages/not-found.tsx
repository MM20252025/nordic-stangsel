import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-white pt-20">
      <div className="text-center px-4">
        <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-6">Sidan hittades inte</p>
        <h1 className="text-8xl md:text-9xl font-serif text-[#0f1f2e] mb-4 leading-none">404</h1>
        <p className="text-lg text-gray-500 font-light mb-10 max-w-md mx-auto">
          Sidan du letar efter existerar inte eller har flyttats. Gå tillbaka till startsidan och försök igen.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#1a3349] text-white px-8 py-3 text-sm tracking-wide hover:bg-[#264056] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Tillbaka till startsidan
        </Link>
      </div>
    </main>
  );
}
