import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { SITE_NAME, FOOTER_LINKS } from "@/lib/constants";
import { NavLink } from "@/types";

function FooterLink({ link }: { link: NavLink }) {
  if (link.external) {
    return (
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-decidel-gray-400 transition-colors hover:text-white"
      >
        {link.label}
      </a>
    );
  }

  return (
    <Link
      href={link.href}
      className="text-sm text-decidel-gray-400 transition-colors hover:text-white"
    >
      {link.label}
    </Link>
  );
}

export default function Footer() {
  const sections = [
    { title: "Product", links: FOOTER_LINKS.product },
    { title: "Legal", links: FOOTER_LINKS.legal },
    { title: "Support", links: [...FOOTER_LINKS.support, ...FOOTER_LINKS.social] },
  ];

  return (
    <footer className="px-4 pb-4 lg:px-6 lg:pb-6">
      <div className="overflow-hidden rounded-[2rem] bg-decidel-dark lg:rounded-[2.5rem]">
        <Container className="py-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:gap-12">
            {/* Brand column */}
            <div className="col-span-2 md:col-span-1">
              <Link href="/" className="flex items-center gap-2.5">
                <Image
                  src="/images/decidel-icon.png"
                  alt="Decidel"
                  width={28}
                  height={28}
                  className="rounded-lg"
                />
                <span className="text-lg font-bold text-white">{SITE_NAME}</span>
              </Link>
              <p className="mt-3 text-sm leading-relaxed text-decidel-gray-400">
                The smartest way to read Hacker News. AI-powered filtering and
                summaries for iOS.
              </p>
            </div>

            {sections.map((section) => (
              <div key={section.title}>
                <h3 className="mb-4 text-sm font-semibold text-white">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <FooterLink link={link} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-decidel-border pt-8 md:flex-row">
            <p className="text-sm text-decidel-gray-500">
              &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
            </p>
            <p className="text-sm text-decidel-gray-500">
              Made for the HN community
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
