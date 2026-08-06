"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "მთავარი", href: "/#home" },
  { label: "ნამუშევრები", href: "/#projects" },
  { label: "მომსახურება", href: "/#process" },
  { label: "ჩვენ შესახებ", href: "/#home" },
  { label: "კონტაქტი", href: "/#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 40);

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });

    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-[#f5f1ea]/95 backdrop-blur-md transition-[box-shadow] duration-300 ${
        isScrolled ? "shadow-[0_8px_30px_rgba(36,33,29,0.09)]" : "shadow-none"
      }`}
    >
      <div className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-10">
        <div
          className={`flex items-center justify-between border-b transition-[min-height,border-color] duration-300 ease-out ${
            isScrolled
              ? "min-h-16 border-transparent"
              : "min-h-20 border-[#26231f]/15"
          }`}
        >
          <Link href="/" aria-label="AIRO მთავარი გვერდი" className="flex items-center">
            <Image
              src="/logo.png"
              alt="AIRO"
              width={197}
              height={50}
              priority
              className={`h-auto transition-[width] duration-300 ease-out ${
                isScrolled
                  ? "w-[125px] sm:w-[145px]"
                  : "w-[145px] sm:w-[165px]"
              }`}
            />
          </Link>

          <nav className="hidden items-center gap-9 xl:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[13px] font-medium text-[#514c45] transition-colors hover:text-[#a76f4d]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/#contact"
            className={`hidden items-center gap-8 bg-[#a86f4d] px-7 text-[12px] font-semibold text-white transition-[min-height,background-color] duration-300 hover:bg-[#8e593b] md:flex ${
              isScrolled ? "min-h-12" : "min-h-14"
            }`}
          >
            შეკვეთეთ კონსულტაცია
          </Link>

          <button
            type="button"
            aria-label="მენიუს გახსნა"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-12 w-12 flex-col items-center justify-center gap-[6px] border border-[#24211d]/20 xl:hidden"
          >
            <span
              className={`h-px w-5 bg-[#24211d] transition ${
                menuOpen ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-5 bg-[#24211d] transition ${
                menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="absolute left-0 top-full w-full border-b border-[#24211d]/10 bg-[#f5f1ea] px-5 py-5 shadow-lg xl:hidden">
          <nav className="mx-auto flex max-w-[1800px] flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-[#24211d]/10 py-4 text-base text-[#24211d]"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-5 flex h-14 items-center justify-between bg-[#a86f4d] px-6 text-sm font-medium text-white"
            >
              შეკვეთის კონსულტაცია
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
