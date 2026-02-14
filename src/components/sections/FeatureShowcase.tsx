import { clsx } from "clsx";
import Container from "@/components/layout/Container";
import PhoneMockup from "@/components/ui/PhoneMockup";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";

interface FeatureShowcaseProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reversed?: boolean;
  accentColor?: "orange" | "purple";
  elevated?: boolean;
  badges?: string[];
  children?: React.ReactNode;
}

export default function FeatureShowcase({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt,
  reversed = false,
  accentColor = "orange",
  elevated = false,
  badges,
  children,
}: FeatureShowcaseProps) {
  const accentClasses =
    accentColor === "purple" ? "text-decidel-purple" : "text-decidel-orange";

  return (
    <section
      className={clsx(
        "py-24 lg:py-32",
        elevated ? "bg-decidel-dark" : "bg-decidel-black"
      )}
    >
      <Container>
        <div
          className={clsx(
            "grid items-center gap-12 lg:grid-cols-2 lg:gap-20",
            reversed && "lg:[direction:rtl] lg:[&>*]:[direction:ltr]"
          )}
        >
          {/* Text */}
          <AnimateOnScroll direction={reversed ? "right" : "left"}>
            <div>
              <p
                className={clsx(
                  "mb-3 text-sm font-medium uppercase tracking-wider",
                  accentClasses
                )}
              >
                {subtitle}
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-decidel-gray-400">
                {description}
              </p>

              {badges && badges.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {badges.map((badge) => (
                    <span
                      key={badge}
                      className="rounded-full border border-decidel-border bg-decidel-card px-3 py-1 text-sm text-decidel-gray-300"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              )}

              {children}
            </div>
          </AnimateOnScroll>

          {/* Phone mockup */}
          <AnimateOnScroll direction={reversed ? "left" : "right"} delay={0.15}>
            <div className="flex justify-center">
              <PhoneMockup src={imageSrc} alt={imageAlt} />
            </div>
          </AnimateOnScroll>
        </div>
      </Container>
    </section>
  );
}
