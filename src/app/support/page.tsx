import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Faq from "@/components/sections/Faq";
import { faqItems } from "@/lib/faq";
import { CONTACT_EMAIL, TWITTER_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with Decidel. FAQ, contact information, and troubleshooting.",
};

export default function SupportPage() {
  return (
    <>
      {/* Header */}
      <section className="pb-8 pt-16 lg:pt-24">
        <Container>
          <SectionHeading
            title="Support"
            subtitle="Find answers or get in touch"
          />
        </Container>
      </section>

      <Faq
        items={faqItems}
        showHeading={false}
        elevated
      />

      {/* Contact section */}
      <section className="pb-20 lg:pb-28">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-2xl font-bold text-white">
              Still need help?
            </h2>
            <p className="mt-4 text-decidel-gray-400">
              Reach out and we will get back to you as soon as possible.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2 rounded-full border border-decidel-border px-6 py-3 text-sm font-medium text-decidel-gray-200 transition-colors hover:bg-decidel-card hover:border-decidel-gray-600"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                {CONTACT_EMAIL}
              </a>
              <a
                href={TWITTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-decidel-border px-6 py-3 text-sm font-medium text-decidel-gray-200 transition-colors hover:bg-decidel-card hover:border-decidel-gray-600"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                @DecidelD91907
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
