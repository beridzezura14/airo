"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const heroSlides = [
  "/hero.jpg",
  "/project6.jpg",
  "/project7.jpg",
  "/project8.jpg",
  "/project9.jpg",
  "/project5.jpg",
];

const services = [
  {
    number: "01",
    title: "ინდივიდუალური დიზაინი",
  },
  {
    number: "02",
    title: "ხარისხიანი მასალები",
  },
  {
    number: "03",
    title: "ზუსტი აზომვა",
  },
  {
    number: "04",
    title: "პროფესიონალური მონტაჟი",
  },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

  const showPreviousSlide = () => {
    setActiveSlide(
      (current) => (current - 1 + heroSlides.length) % heroSlides.length,
    );
  };

  const showNextSlide = () => {
    setActiveSlide((current) => (current + 1) % heroSlides.length);
  };

  return (
    <section
      id="home"
      className="overflow-hidden bg-[#f5f1ea] text-[#24211d]"
    >
      <div className="mx-auto max-w-[1800px] px-5 pb-8 pt-8 sm:px-8 lg:px-10 lg:pb-10 lg:pt-11">
        <div className="grid min-h-[760px]  xl:grid-cols-[0.75fr_1.45fr_0.95fr]">
          {/* მარცხენა ნაწილი */}

          <div className="relative flex flex-col border-[#24211d]/15 pb-12 xl:border-r xl:pr-10">

            <div className="my-auto py-16 xl:py-10">
              <h1 className="max-w-[500px] text-[50px] font-dachi leading-[1.02] tracking-[-0.045em] sm:text-7xl">
                ყველაფერი იწყება აქ
              </h1>

              <p className="mt-8 max-w-[430px] text-[15px] leading-7 text-[#686158]">
                ვამზადებთ ინდივიდუალურ სამზარეულოს ავეჯს თქვენი სივრცის,
                სურვილებისა და ბიუჯეტის მიხედვით — აზომვიდან საბოლოო
                მონტაჟამდე.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#projects"
                  className="flex min-h-14 items-center justify-between gap-10 bg-[#a86f4d] px-7 text-[13px] font-semibold text-white transition hover:bg-[#8e593b]"
                >
                  ნამუშევრების ნახვა
                </Link>

                <Link
                  href="#contact"
                  className="flex min-h-14 items-center justify-between gap-8 border border-[#24211d]/20 px-7 text-[13px] font-semibold transition hover:border-[#24211d] hover:bg-white/40"
                >
                  კონტაქტი
                </Link>
              </div>
            </div>
          </div>

          {/* ცენტრალური ფოტო */}

          <div className="relative min-h-[520px] overflow-hidden border-[#24211d]/15 xl:mx-9 xl:min-h-full xl:border-r">
            <img
              src={heroSlides[0]}
              alt="ხელოსნის მიერ დამზადებული თანამედროვე სამზარეულო"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 motion-reduce:transition-none ${
                activeSlide === 0 ? "opacity-100" : "opacity-0"
              }`}
            />

            {heroSlides.slice(1).map((slide, index) => {
              const slideIndex = index + 1;

              return (
                <img
                  key={slide}
                  src={slide}
                  alt={`AIRO kitchen project ${slideIndex + 1}`}
                  loading="lazy"
                  aria-hidden={slideIndex !== activeSlide}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 motion-reduce:transition-none ${
                    slideIndex === activeSlide ? "opacity-100" : "opacity-0"
                  }`}
                />
              );
            })}

            <div className="absolute inset-0 bg-black/[0.04]" />

            <div className="absolute left-6 top-6 flex w-[calc(100%-48px)] items-center justify-between text-[9px] font-semibold uppercase tracking-[0.2em] text-white">
              <span>ინდივიდუალური დიზაინი</span>
              <span aria-live="polite">
                {String(activeSlide + 1).padStart(2, "0")} / 06
              </span>
            </div>

            <div className="absolute bottom-5 left-6 text-[74px] font-light leading-none text-white/35 sm:text-[96px]">
              {String(activeSlide + 1).padStart(2, "0")}
            </div>

            <div className="absolute bottom-5 right-5 flex gap-2">
              <button
                type="button"
                onClick={showPreviousSlide}
                aria-label="წინა პროექტი"
                className="flex h-12 w-12 items-center justify-center border border-white/45 bg-black/10 text-xl text-white backdrop-blur-sm transition hover:bg-white hover:text-black"
              >
                ←
              </button>

              <button
                type="button"
                onClick={showNextSlide}
                aria-label="შემდეგი პროექტი"
                className="flex h-12 w-12 items-center justify-center border border-white/45 bg-black/10 text-xl text-white backdrop-blur-sm transition hover:bg-white hover:text-black"
              >
                →
              </button>
            </div>
          </div>

          {/* მარჯვენა ნაწილი */}

          <div className="flex flex-col pt-10 xl:pl-1 xl:pt-0">
            <span className="text-[10px] font-semibold tracking-[0.18em]">

            </span>
            <div className="my-auto py-14 xl:py-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#a86f4d]">
                ჩვენი მიდგომა
              </p>

              <h2 className="mt-5 text-3xl font-dachi tracking-[-0.025em] sm:text-4xl">
                იდეიდან შედეგამდე
              </h2>

              <p className="mt-5 max-w-md text-[14px] leading-7 text-[#686158]">
                თითოეული პროექტი იქმნება კონკრეტული სივრცისთვის. ყურადღებას
                ვაქცევთ სწორ განლაგებას, პრაქტიკულობას, მასალებს და თითოეულ
                დეტალს.
              </p>

              <div className="mt-8 border-t border-[#24211d]/15">
                {services.map((service) => (
                  <div
                    key={service.number}
                    className="group flex items-center gap-5 border-b border-[#24211d]/15 py-5"
                  >
                    <span className="text-[10px] font-semibold text-[#a86f4d]">
                      {service.number}
                    </span>

                    <p className="text-[14px] font-medium text-[#39342f]">
                      {service.title}
                    </p>

                    <span className="ml-auto text-[#8b8278] transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
