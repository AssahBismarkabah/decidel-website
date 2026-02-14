import { clsx } from "clsx";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import { pricingTiers } from "@/lib/pricing";
import { APP_STORE_URL } from "@/lib/constants";

export default function PricingCards({
  showHeading = true,
  elevated = false,
}: {
  showHeading?: boolean;
  elevated?: boolean;
}) {
  return (
    <section className={clsx("py-20 lg:py-28", elevated ? "bg-decidel-dark" : "bg-decidel-black")}>
      <Container>
        {showHeading && (
          <SectionHeading
            title="Simple, honest pricing"
            subtitle="Decidel is free forever. Pro unlocks the full power."
          />
        )}
        <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2">
          {pricingTiers.map((tier, i) => (
            <AnimateOnScroll key={tier.name} direction="up" delay={i * 0.15}>
              <div
                className={clsx(
                  "flex flex-col rounded-2xl border p-8",
                  tier.highlighted
                    ? "border-decidel-orange bg-gradient-to-b from-decidel-card to-decidel-black"
                    : "border-decidel-border bg-decidel-card"
                )}
              >
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white">
                    {tier.name}
                  </h3>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">
                      {tier.price}
                    </span>
                    <span className="text-decidel-gray-400">{tier.period}</span>
                  </div>
                  {tier.annualPrice && (
                    <p className="mt-1 text-sm text-decidel-gray-400">
                      or {tier.annualPrice}
                    </p>
                  )}
                  <p className="mt-3 text-sm text-decidel-gray-400">
                    {tier.description}
                  </p>
                </div>

                <ul className="mb-8 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature.text} className="flex items-start gap-3">
                      {feature.included ? (
                        <svg
                          className="mt-0.5 h-5 w-5 flex-shrink-0 text-decidel-orange"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="mt-0.5 h-5 w-5 flex-shrink-0 text-decidel-gray-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      )}
                      <span
                        className={clsx(
                          "text-sm",
                          feature.included
                            ? "text-decidel-gray-200"
                            : "text-decidel-gray-500"
                        )}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  href={APP_STORE_URL}
                  variant={tier.highlighted ? "primary" : "secondary"}
                  external
                  className="w-full"
                >
                  {tier.ctaLabel}
                </Button>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
