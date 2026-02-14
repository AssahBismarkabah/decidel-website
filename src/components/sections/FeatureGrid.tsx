import { clsx } from "clsx";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FeatureCard from "@/components/ui/FeatureCard";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";
import { gridFeatures } from "@/lib/features";

export default function FeatureGrid({ elevated = false }: { elevated?: boolean }) {
  return (
    <section className={clsx("py-20 lg:py-28", elevated ? "bg-decidel-dark" : "bg-decidel-black")}>
      <Container>
        <SectionHeading
          title="Everything else you need"
          subtitle="A full-featured HN client packed with thoughtful details"
        />
        <div className="mx-auto max-w-4xl grid gap-x-8 gap-y-2 sm:grid-cols-2">
          {gridFeatures.map((feature, i) => (
            <AnimateOnScroll key={feature.title} direction="up" delay={i * 0.08}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </AnimateOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
}
