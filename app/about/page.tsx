import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "ჩვენ შესახებ",
  description: "გაიცანით AIRO-ს მიდგომა ინდივიდუალური სამზარეულოს დიზაინისა და დამზადებისადმი.",
};

const principles = [
  {
    number: "01",
    title: "ინდივიდუალური დაგეგმვა",
    text: "ყოველი პროექტი იწყება სივრცის, ყოველდღიური ჩვევებისა და დამკვეთის სურვილების გააზრებით. მზა შაბლონების ნაცვლად ვქმნით კონკრეტულ გარემოზე მორგებულ გადაწყვეტას.",
  },
  {
    number: "02",
    title: "ფუნქცია და ესთეტიკა",
    text: "ლამაზი ინტერიერი პრაქტიკულიც უნდა იყოს. განლაგებას, სათავსოებსა და სამუშაო ზონებს ისე ვგეგმავთ, რომ სამზარეულო ყოველდღიურად კომფორტული დარჩეს.",
  },
  {
    number: "03",
    title: "მასალების გააზრებული არჩევანი",
    text: "მასალასა და ფურნიტურას ვიზუალის, გამძლეობისა და ბიუჯეტის გათვალისწინებით ვარჩევთ. ყველა გადაწყვეტილება პროექტის საერთო მიზანს ემსახურება.",
  },
  {
    number: "04",
    title: "ზუსტი შესრულება",
    text: "აზომვიდან მონტაჟამდე ყურადღებას ვაქცევთ დეტალებს, შეერთებებსა და საბოლოო დამუშავებას, რათა შეთანხმებული დიზაინი რეალურ სივრცეში ზუსტად განხორციელდეს.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f5f1ea] text-[#24211d]">
      <section className="mx-auto max-w-[1800px] px-4 pb-16 pt-12 sm:px-8 sm:pb-24 sm:pt-16 lg:px-10 lg:pb-28">
        <div className="grid gap-10 border-b border-black/10 pb-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-16 lg:pb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#a06f50]">AIRO</p>
            <h1 className="mt-5 max-w-4xl font-dachi text-5xl leading-[1.04] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              ჩვენს შესახებ
            </h1>
          </div>

          <p className="max-w-2xl text-lg leading-9 text-[#686158] lg:justify-self-end">
            AIRO ქმნის ინდივიდუალურ სამზარეულოს ავეჯს — იდეის ჩამოყალიბებიდან, აზომვისა და დიზაინის გავლით, საბოლოო დამზადებასა და მონტაჟამდე.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="relative min-h-[420px] overflow-hidden sm:min-h-[560px] lg:min-h-[680px]">
            <Image
              src="/project1.jpg"
              alt="AIRO-ს დასრულებული სამზარეულოს პროექტი"
              fill
              priority
              sizes="(max-width: 1023px) 100vw, 68vw"
              className="object-cover"
            />
          </div>

          <div className="relative min-h-[360px] overflow-hidden sm:min-h-[480px] lg:min-h-full">
            <Image
              src="/process-3.png"
              alt="AIRO-ს სამუშაო პროცესი"
              fill
              sizes="(max-width: 1023px) 100vw, 32vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1800px] px-4 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          <div className="h-fit lg:sticky lg:top-24">
            <p className="text-xs uppercase tracking-[0.24em] text-[#a06f50]">ჩვენი მიდგომა</p>
            <h2 className="mt-5 max-w-md font-dachi text-5xl leading-tight sm:text-6xl">
               ხარისხი დეტალებშია
            </h2>
            <p className="mt-7 max-w-md leading-8 text-[#686158]">
              ჩვენი მიზანია სამზარეულო იყოს ერთდროულად მშვიდი, გამძლე და რეალურ ყოველდღიურობაზე მორგებული.
            </p>
          </div>

          <div className="border-t border-black/10">
            {principles.map((principle) => (
              <article
                key={principle.number}
                className="grid gap-5 border-b border-black/10 py-8 sm:grid-cols-[72px_1fr] sm:gap-8 sm:py-10"
              >
                <span className="text-sm tracking-[0.18em] text-[#a06f50]">{principle.number}</span>
                <div>
                  <h3 className="font-dachi text-3xl leading-tight">{principle.title}</h3>
                  <p className="mt-4 max-w-2xl leading-8 text-[#686158]">{principle.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#24211d] text-[#f5f1ea]">
        <div className="mx-auto grid max-w-[1800px] gap-10 px-4 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:px-10 lg:py-24">
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-[#c69a7b]">თქვენი პროექტი</p>
            <h2 className="mt-5 max-w-4xl font-dachi text-4xl leading-tight sm:text-5xl">
              დავგეგმოთ თქვენი ახალი სამზარეულო ერთად
            </h2>
          </div>

          <div className="lg:flex lg:justify-end">
            <Link
              href="/#contact"
              className="flex min-h-16 w-full items-center justify-between gap-4 bg-[#a06f50] px-5 text-sm font-medium text-white transition hover:bg-[#b47d5a] sm:w-fit sm:min-w-[280px] sm:px-7"
            >
              კონსულტაციის მოთხოვნა
              <ArrowRight aria-hidden="true" size={20} strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
