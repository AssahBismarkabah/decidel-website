import { clsx } from "clsx";
import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  external?: boolean;
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  external = false,
  className,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-full transition-colors";

  const variants = {
    primary:
      "bg-decidel-orange text-white hover:bg-decidel-orange-hover",
    secondary:
      "border border-decidel-border text-decidel-gray-100 hover:bg-decidel-card hover:border-decidel-gray-600",
    ghost:
      "text-decidel-gray-300 hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = clsx(baseStyles, variants[variant], sizes[size], className);

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
