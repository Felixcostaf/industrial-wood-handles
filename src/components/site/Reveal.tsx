import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";
import type { ReactNode } from "react";

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section" | "article";
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <Tag
      ref={ref as never}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", visible && "reveal-in", className)}
    >
      {children}
    </Tag>
  );
}
