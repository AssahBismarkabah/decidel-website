import type { Metadata } from "next";
import Container from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Decidel, the AI-powered Hacker News client for iOS.",
};

export default function TermsPage() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-decidel-gray-400">
            Last updated: February 2026
          </p>

          <div className="mt-12 space-y-10 text-decidel-gray-300 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">
                1. Acceptance of Terms
              </h2>
              <p>
                By downloading, installing, or using the Decidel application
                (&quot;App&quot;), you agree to be bound by these Terms of
                Service (&quot;Terms&quot;). If you do not agree, do not use the
                App.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">
                2. Service Description
              </h2>
              <p>
                Decidel is a native iOS client for browsing Hacker News
                (news.ycombinator.com) with AI-powered features including
                semantic content filtering, thread summarization, offline reading,
                and content export. Decidel is not affiliated with Y Combinator
                or Hacker News.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">
                3. AI Features and BYOK Model
              </h2>
              <p>
                Decidel&apos;s AI features require you to provide your own API
                keys (&quot;Bring Your Own Key&quot; or BYOK) from supported
                providers such as Groq, OpenAI, Anthropic, or Ollama. You are
                responsible for:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Obtaining and managing your own API keys</li>
                <li>
                  Any costs incurred from your use of third-party AI providers
                </li>
                <li>
                  Complying with the terms of service of your chosen AI provider
                </li>
                <li>Keeping your API keys secure</li>
              </ul>
              <p className="mt-3">
                Decidel is not responsible for the availability, accuracy, or
                costs of third-party AI services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">
                4. Subscriptions
              </h2>
              <p>
                Decidel offers a free tier and a paid Pro tier. Pro subscriptions
                are billed through Apple&apos;s App Store at $3.99 per month or
                $19.99 per year. Subscription management, billing, and refunds
                are handled entirely by Apple under their terms and conditions.
              </p>
              <p className="mt-3">
                You may cancel your subscription at any time through your App
                Store settings. Upon cancellation, you retain Pro access until
                the end of the current billing period.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">
                5. Acceptable Use
              </h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Use the App to violate any applicable laws or regulations</li>
                <li>Reverse-engineer, decompile, or disassemble the App</li>
                <li>
                  Attempt to circumvent subscription restrictions or usage limits
                </li>
                <li>
                  Use the App in any way that could damage, disable, or impair
                  the Hacker News API or third-party services
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">
                6. Content
              </h2>
              <p>
                All Hacker News content displayed within Decidel is sourced from
                the public Hacker News API and is the property of its respective
                authors. Decidel does not claim ownership of any user-generated
                content from Hacker News. AI-generated summaries are derived
                from this public content and are provided for informational
                purposes only.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">
                7. Disclaimer of Warranties
              </h2>
              <p>
                The App is provided &quot;as is&quot; without warranties of any
                kind, whether express or implied. We do not warrant that the App
                will be uninterrupted, error-free, or that AI-generated summaries
                will be accurate or complete.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">
                8. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by law, Decidel shall not be
                liable for any indirect, incidental, special, consequential, or
                punitive damages, including but not limited to loss of data,
                profits, or business opportunities, arising from your use of the
                App.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">
                9. Changes to Terms
              </h2>
              <p>
                We may update these Terms from time to time. Continued use of
                the App after changes constitutes acceptance of the revised
                Terms. Material changes will be communicated through the App.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">
                10. Contact
              </h2>
              <p>
                For questions about these Terms, contact us at{" "}
                <a
                  href="mailto:hello@decidel.app"
                  className="text-decidel-orange hover:underline"
                >
                  hello@decidel.app
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </Container>
    </section>
  );
}
