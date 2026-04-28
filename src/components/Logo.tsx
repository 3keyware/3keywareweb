import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export function Logo({ className, iconOnly }: LogoProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="relative flex items-center justify-center">
        <div className="w-7 h-7 rounded-full border-2 border-foreground/60" />
        <div className="absolute w-3 h-3 rounded-full border border-foreground/60" />
      </div>
      {!iconOnly && <span className="text-xl font-bold tracking-tightest">3Keyware</span>}
    </div>
  );
}
