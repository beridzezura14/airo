"use client";

import Image from "next/image";
import Link from "next/link";

import { A11y, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="bg-[#f5f1ea] text-[#24211d]">
      <div className="mx-auto max-w-[1800px] px-5 py-24 sm:px-8 lg:px-10 lg:py-28">
        {/* Section heading */}
        <div className="mb-14 flex flex-col gap-8 border-b border-black/10 pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#9b7458]">

            </span>

            <h2 className="mt-5 text-5xl font-medium leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              ჩვენი ნამუშევრები
            </h2>
          </div>

          <p className="max-w-md text-base leading-8 text-[#6d665d]">
            დაათვალიერეთ სხვადასხვა სივრცისთვის შექმნილი სამზარეულოები,
            გამოყენებული მასალები და შესრულების დეტალები.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid gap-x-6 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, projectIndex) => {
            const hasMultipleImages = project.images.length > 1;

            return (
              <article
                key={project.id}
                className="group overflow-hidden border border-black/10 bg-[#faf7f1] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(36,33,29,0.09)]"
              >
                {/* Project slider */}
                <div className="project-slider relative aspect-[4/3] overflow-hidden bg-[#ddd6cc]">
                  <Swiper
                    modules={[Navigation, Pagination, A11y]}
                    slidesPerView={1}
                    speed={500}
                    navigation={hasMultipleImages}
                    pagination={
                      hasMultipleImages
                        ? {
                            clickable: true,
                          }
                        : false
                    }
                    loop={hasMultipleImages}
                    className="h-full w-full"
                  >
                    {project.images.map((image, imageIndex) => {
                      const preloadImage =
                        projectIndex === 0 && imageIndex === 0;

                      return (
                        <SwiperSlide
                          key={`${project.id}-${imageIndex}`}
                          className="h-full"
                        >
                          <div className="relative h-full w-full overflow-hidden">
                            <Image
                              src={image}
                              alt={`${project.title} — ფოტო ${
                                imageIndex + 1
                              }`}
                              fill
                              preload={preloadImage}
                              sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                            />
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>

                  {/* Project number */}
                  <div className="pointer-events-none absolute left-4 top-4 z-10 flex items-center gap-2 bg-[#f5f1ea]/95 px-3 py-2 backdrop-blur-sm">
                    <span className="text-[10px] font-semibold tracking-[0.18em] text-[#765b49]">
                      {project.id}
                    </span>

                    <span className="h-px w-5 bg-[#765b49]/40" />

                    <span className="text-[9px] uppercase tracking-[0.15em] text-[#756e65]">
                      პროექტი
                    </span>
                  </div>
                </div>

                {/* Card information */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-[10px] uppercase tracking-[0.18em] text-[#8c8379]">
                      {project.location}
                    </p>

                    <p className="text-[10px] tracking-[0.18em] text-[#8c8379]">
                      {project.year}
                    </p>
                  </div>

                  <h3 className="mt-4 text-2xl font-medium leading-tight tracking-[-0.025em]">
                    {project.title}
                  </h3>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.materials.map((material, materialIndex) => (
                      <span
                        key={`${project.id}-${material}-${materialIndex}`}
                        className="border border-black/10 px-3 py-2 text-[10px] uppercase tracking-[0.12em] text-[#665f57]"
                      >
                        {material}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 border-t border-black/10 pt-5">
                    <Link
                      href={`/projects/${project.id}`}
                      className="flex items-center justify-between text-sm font-medium"
                    >
                      <span>პროექტის დეტალები</span>

                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            href="/projects"
            className="flex min-h-14 items-center justify-between gap-14 border border-black/20 px-7 text-sm font-medium transition hover:border-[#a06f50] hover:bg-[#a06f50] hover:text-white"
          >
            ყველა ნამუშევრის ნახვა
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}