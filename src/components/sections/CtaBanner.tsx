import { clsx } from "clsx";
import Container from "@/components/layout/Container";
import AppStoreBadge from "@/components/ui/AppStoreBadge";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";

export default function CtaBanner({ elevated = false }: { elevated?: boolean }) {
  return (
    <section className={clsx("py-20 lg:py-28", elevated ? "bg-decidel-dark" : "bg-decidel-black")}>
      <Container>
        <AnimateOnScroll direction="up">
          <div className="relative overflow-hidden rounded-3xl border border-decidel-border bg-gradient-to-br from-decidel-card to-decidel-black px-8 py-16 text-center lg:px-16">
            {/* Background glow */}
            <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2">
              <div className="h-[300px] w-[500px] rounded-full bg-decidel-orange/8 blur-[100px]" />
            </div>

            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to read HN smarter?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-lg text-decidel-gray-400">
                Join thousands of developers who save time every day with
                intelligent filtering and AI-powered summaries.
              </p>
              <div className="mt-8 flex justify-center">
                <AppStoreBadge />
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </Container>
    </section>
  );
}
