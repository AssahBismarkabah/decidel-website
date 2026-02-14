import type { Metadata } from "next";
import Container from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Decidel handles your data. Short version: your data stays on your device.",
};

export default function PrivacyPage() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-decidel-gray-400">
            Last updated: February 2026
          </p>

          <div className="mt-12 space-y-10 text-decidel-gray-300 leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-white mb-4">
                The short version
              </h2>
              <p>
                Decidel is designed with privacy at its core. Your reading
                history, bookmarks, and settings never leave your device. We
                don&apos;t require accounts, we don&apos;t track what you read,
                and we don&apos;t sell your data. Period.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">
                Data that stays on your device
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your reading history and browsing activity</li>
                <li>Bookmarked stories and threads</li>
                <li>Smart Mute configuration and preferences</li>
                <li>AI summary history</li>
                <li>App settings and display preferences</li>
                <li>Your API keys (stored in the iOS Keychain)</li>
              </ul>
              <p className="mt-3">
                This data is stored locally on your iPhone and is never
                transmitted to Decidel servers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">
                AI providers (BYOK model)
              </h2>
              <p>
                Decidel uses a Bring-Your-Own-Key (BYOK) model for AI features.
                When you use cloud-based AI providers (Groq, OpenAI, or
                Anthropic), the Hacker News content you choose to summarize is
                sent directly to that provider&apos;s API using your personal
                API key. This is the same as using those services directly.
              </p>
              <p className="mt-3">
                Decidel acts as a client to these services — your data goes from
                your device to your chosen provider. It does not pass through
                any Decidel infrastructure.
              </p>
              <p className="mt-3">
                For maximum privacy, you can use{" "}
                <strong className="text-white">Ollama</strong> (local models
                running on your Mac) or{" "}
                <strong className="text-white">on-device AI</strong>, which
                process everything locally without any network requests.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">
                Analytics
              </h2>
              <p>
                We use{" "}
                <a
                  href="https://telemetrydeck.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decidel-orange hover:underline"
                >
                  TelemetryDeck
                </a>{" "}
                for anonymous, privacy-focused usage analytics. TelemetryDeck
                does not collect personal data, does not use cookies, and is
                fully GDPR compliant. We use this data only to understand which
                features are used and to prioritize development.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">
                Hacker News API
              </h2>
              <p>
                Decidel fetches public data from the official Hacker News API
                (provided by Y Combinator). This includes stories, comments, and
                user-submitted content that is already publicly available on
                news.ycombinator.com. No authentication is required for this API
                access.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">
                What we never do
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Require you to create an account</li>
                <li>Track your reading habits or browsing history</li>
                <li>Sell or share your data with third parties</li>
                <li>Store your API keys on our servers</li>
                <li>Display advertisements</li>
                <li>Use tracking cookies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">
                Subscriptions
              </h2>
              <p>
                Pro subscriptions are processed entirely through Apple&apos;s
                App Store. We do not collect or store any payment information.
                Apple handles all billing, receipts, and subscription management.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">
                Changes to this policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. Any changes
                will be reflected on this page with an updated date. Material
                changes will be communicated through the app.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4">
                Contact
              </h2>
              <p>
                If you have questions about this Privacy Policy, contact us at{" "}
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
