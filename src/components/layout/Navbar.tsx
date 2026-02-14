"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { clsx } from "clsx";
import { NAV_LINKS, APP_STORE_URL } from "@/lib/constants";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-decidel-border/50 bg-decidel-black/80 backdrop-blur-lg">
      <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/images/decidel-icon.png"
            alt="Decidel"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="text-lg font-bold text-white">Decidel</span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "text-sm font-medium transition-colors",
                pathname === link.href
                  ? "text-decidel-orange"
                  : "text-decidel-gray-300 hover:text-white"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button href={APP_STORE_URL} size="sm" external>
            Download
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex items-center md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="border-t border-decidel-border bg-decidel-black md:hidden">
          <div className="flex flex-col gap-4 px-6 py-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={clsx(
                  "text-base font-medium transition-colors",
                  pathname === link.href
                    ? "text-decidel-orange"
                    : "text-decidel-gray-300 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button href={APP_STORE_URL} external className="mt-2 w-full">
              Download
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
