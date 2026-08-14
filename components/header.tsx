"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import { buildWhatsAppUrl } from "@/lib/whatsapp";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#instagram", label: "Instagram" },
  { href: "#local", label: "Onde estamos" },
];

const headerWhatsappUrl = buildWhatsAppUrl(
  "Olá! Vim pelo site da Flora Garden e gostaria de um orçamento."
);

export function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 60);
  });

  return (
    <motion.header
      animate={{
        backgroundColor: scrolled ? "var(--card)" : "rgba(0,0,0,0)",
        boxShadow: scrolled ? "0 1px 0 var(--border)" : "0 0 0 rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-40 backdrop-blur-md"
      style={{ backdropFilter: scrolled ? "blur(10px)" : "none" }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#top" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="Flora Garden"
            width={96}
            height={96}
            priority
            className="h-12 w-12 rounded-full object-cover sm:h-14 sm:w-14"
          />
        </a>
        <nav className="hidden items-center gap-8 text-xs font-medium tracking-[0.2em] text-foreground/80 uppercase md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={headerWhatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-foreground/20 px-4 py-2 text-xs font-medium tracking-[0.15em] text-foreground uppercase transition-colors hover:bg-foreground/5"
        >
          WhatsApp
        </a>
      </div>
    </motion.header>
  );
}
