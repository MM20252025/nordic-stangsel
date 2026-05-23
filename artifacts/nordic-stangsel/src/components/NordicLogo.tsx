import { cn } from "@/lib/utils";

interface NordicLogoProps {
  color?: string;
  className?: string;
}

export function NordicLogo({ color = "white", className }: NordicLogoProps) {
  const isDark = color === "#0f1f2e" || color === "black" || color === "dark";
  const textColorClass = isDark ? "text-[#0f1f2e]" : "text-white";
  const subtextColorClass = isDark ? "text-[#0f1f2e]/80 group-hover:text-[#0f1f2e]" : "text-white/80 group-hover:text-white";

  return (
    <div className={cn("flex flex-col group", className)}>
      <span className={cn("font-sans font-bold tracking-[0.25em] text-xl leading-none transition-colors", textColorClass)}>NORDIC</span>
      <span className={cn("font-sans font-light tracking-[0.35em] text-xs transition-colors", subtextColorClass)}>STÄNGSEL</span>
    </div>
  );
}
