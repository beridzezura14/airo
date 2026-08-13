import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[calc(100vh-5rem)] bg-[#f5f1ea] px-4 py-8 text-[#24211d] sm:px-8 sm:py-12 lg:px-10">
      <div className="mx-auto grid min-h-[680px] max-w-[1800px] overflow-hidden border border-black/10 bg-[#faf7f1] lg:grid-cols-[0.85fr_1.15fr]">
        <div className="flex flex-col justify-between p-6 sm:p-10 lg:p-14">
          <div className="flex items-center justify-between gap-4 border-b border-black/10 pb-6">
            <span className="text-xs uppercase tracking-[0.24em] text-[#a06f50]">შეცდომა</span>
            <span className="font-dachi text-2xl text-[#a06f50]">404</span>
          </div>

          <div className="py-14">
            <p className="font-dachi text-[clamp(5rem,24vw,11rem)] leading-[0.75] tracking-[-0.06em] text-[#d8c1af]">
              404
            </p>
            <h1 className="mt-10 max-w-2xl font-dachi text-4xl leading-tight tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              ეს გვერდი ვერ მოიძებნა
            </h1>
            <p className="mt-6 max-w-lg text-base leading-8 text-[#686158]">
              მისამართი შესაძლოა შეიცვალა ან გვერდი აღარ არსებობს. დაბრუნდით მთავარ გვერდზე ან დაათვალიერეთ AIRO-ს პროექტები.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="flex min-h-14 items-center justify-between gap-6 bg-[#a06f50] px-5 text-sm font-medium text-white transition hover:bg-[#89593e] sm:px-7"
            >
              <ArrowLeft aria-hidden="true" size={19} strokeWidth={1.8} />
              მთავარ გვერდზე დაბრუნება
            </Link>

            <Link
              href="/projects"
              className="flex min-h-14 items-center justify-between gap-6 border border-black/15 px-5 text-sm font-medium transition hover:border-[#a06f50] hover:text-[#a06f50] sm:px-7"
            >
              ნამუშევრების ნახვა
              <ArrowRight aria-hidden="true" size={19} strokeWidth={1.8} />
            </Link>
          </div>
        </div>

        <div className="relative min-h-[420px] overflow-hidden lg:min-h-full">
          <Image
            src="/project13.jpg"
            alt="AIRO-ს სამზარეულოს პროექტი"
            fill
            priority
            sizes="(max-width: 1023px) 100vw, 58vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/5" />
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between border-t border-white/35 pt-4 text-[10px] uppercase tracking-[0.2em] text-white sm:bottom-10 sm:left-10 sm:right-10">
            <span>AIRO</span>
            <span>იდეიდან შედეგამდე</span>
          </div>
        </div>
      </div>
    </section>
  );
}
