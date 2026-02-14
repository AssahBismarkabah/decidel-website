import { clsx } from "clsx";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <div className={clsx(centered && "text-center", "mb-16", className)}>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-decidel-gray-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
