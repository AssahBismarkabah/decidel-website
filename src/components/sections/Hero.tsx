import Container from "@/components/layout/Container";
import PhoneMockup from "@/components/ui/PhoneMockup";
import AppStoreBadge from "@/components/ui/AppStoreBadge";
import Button from "@/components/ui/Button";
import AnimateOnScroll from "@/components/shared/AnimateOnScroll";

export default function Hero() {
  return (
    <section className="p-4 lg:p-6">
      <div className="relative overflow-hidden rounded-[2rem] bg-decidel-dark pb-20 pt-16 lg:rounded-[2.5rem] lg:pb-32 lg:pt-24">
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-[600px] w-[600px] rounded-full bg-decidel-orange/5 blur-[120px]" />
        </div>

        <Container className="relative">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Text content */}
            <AnimateOnScroll direction="left">
              <div className="max-w-xl">
                <p className="mb-4 text-sm font-medium uppercase tracking-wider text-decidel-orange">
                  AI-Powered Hacker News Client for iOS
                </p>
                <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                  The smartest way to read{" "}
                  <span className="text-decidel-orange">Hacker News</span>
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-decidel-gray-400">
                  Smart Mute filters noise by meaning, not keywords. AI summarizes
                  200+ comment threads in seconds. Offline bundles let you read
                  anywhere. All private, all native.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <AppStoreBadge />
                  <Button href="/features" variant="secondary">
                    See Features
                  </Button>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Phone mockup */}
            <AnimateOnScroll direction="right" delay={0.2}>
              <div className="flex justify-center lg:justify-end">
                <PhoneMockup
                  src="/images/screenshots/feed-dark.png"
                  alt="Decidel feed showing top Hacker News stories with time filters"
                  priority
                  className="rotate-1"
                />
              </div>
            </AnimateOnScroll>
          </div>
        </Container>
      </div>
    </section>
  );
}
