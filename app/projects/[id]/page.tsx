import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProjectById, projects } from "../../data/projects";
import ProjectGallery from "../../components/ProjectGallery";

type ProjectPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((item) => item.id === project.id);

  const previousProject = currentIndex > 0 ? projects[currentIndex - 1] : null;

  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const coverImage = project.images[0];

  return (
    <main className="min-h-screen bg-[#f3efe8] text-[#24211d]">
      {/* Top bar */}
      <div className="mx-auto flex max-w-[1800px] flex-wrap items-center justify-between gap-3 px-4 py-5 sm:px-8 sm:py-6 lg:px-10">
        <Link
          href="/#projects"
          className="group inline-flex items-center gap-3 text-sm text-[#716a61]"
        >
          <span className="transition-transform group-hover:-translate-x-1">
            ←
          </span>
          ნამუშევრები
        </Link>

        <span className="text-[10px] uppercase tracking-[0.25em] text-[#8f877e]">
          პროექტი {project.id}
        </span>
      </div>

      {/* Main cover */}
      <section className="mx-auto max-w-[1800px] px-4 sm:px-8 lg:px-10">
        <div className="relative min-h-[560px] overflow-hidden sm:min-h-[620px] lg:min-h-[780px]">
          <Image
            src={coverImage}
            alt={project.title}
            fill
            preload
            sizes="(max-width: 1800px) 100vw, 1800px"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/10" />

          <div className="absolute inset-x-0 bottom-0 z-10 p-4 text-white min-[360px]:p-5 sm:p-10 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-white/65">
                  {project.location} · {project.year}
                </p>

                <h1 className="mt-5 max-w-5xl text-3xl font-dachi leading-[0.98] tracking-[-0.05em] sm:text-6xl">
                  {project.title}
                </h1>
              </div>

              <div className="border-t border-white/30 pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <p className="text-sm leading-7 text-white/70">
                  ინდივიდუალური პროექტი, შექმნილი კონკრეტული სივრცის,
                  ყოველდღიური გამოყენებისა და დამკვეთის მოთხოვნების მიხედვით.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-[1800px] px-4 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-28">
        <div className="grid gap-14 border-b border-black/10 pb-20 lg:grid-cols-[0.55fr_1.45fr]">
          <div>
            <span className="text-[10px]  font-dachi uppercase tracking-[0.24em] text-[#a06f50]">
              პროექტის შესახებ
            </span>
          </div>

          <div className="grid gap-12 xl:grid-cols-[1.2fr_0.8fr]">
            <p className="max-w-3xl text-2xl leading-[1.55] tracking-[-0.02em] text-[#4e4943] sm:text-3xl">
              {project.description}
            </p>

            <div className="border-t border-black/10 pt-7 xl:border-l xl:border-t-0 xl:pl-10 xl:pt-0">
              <div className="grid grid-cols-1 gap-6 min-[360px]:grid-cols-2 min-[360px]:gap-8">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#948c83]">
                    მდებარეობა
                  </p>

                  <p className="mt-3 text-lg">{project.location}</p>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#948c83]">
                    წელი
                  </p>

                  <p className="mt-3 text-lg">{project.year}</p>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#948c83]">
                    ფართობი
                  </p>

                  <p className="mt-3 text-lg">{project.area}</p>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#948c83]">
                    შესრულების დრო
                  </p>

                  <p className="mt-3 text-lg leading-7">{project.duration}</p>
                </div>
              </div>

              <div className="mt-8 border-t border-black/10 pt-7">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#948c83]">
                  სავარაუდო ფასის დიაპაზონი
                </p>

                <p className="mt-3 font-dachi text-2xl text-[#a06f50]">
                  {project.priceRange}
                </p>
                <p className="mt-2 text-xs leading-6 text-[#8a8279]">
                  საორიენტაციო ღირებულება — საბოლოო ფასი განისაზღვრება აზომვის, მასალებისა და ფურნიტურის შერჩევის შემდეგ.
                </p>
              </div>

              <div className="mt-10 border-t border-black/10 pt-7">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#948c83]">
                  მასალები
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.materials.map((material) => (
                    <span
                      key={material}
                      className="border border-black/10 bg-[#f8f5ef] px-4 py-3 text-xs rounded-sm"
                    >
                      {material}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {project.images.length > 0 && (
        <section className="mx-auto max-w-[1800px] px-4 pb-20 sm:px-8 sm:pb-24 lg:px-10 lg:pb-32">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-black/10 pb-6">
            <div>
              <span className="text-[10px] uppercase tracking-[0.24em] text-[#a06f50]  font-dachi">
                დეტალები
              </span>

              <h2 className="mt-3 text-4xl font-medium tracking-[-0.035em] sm:text-5xl  font-dachi">
                პროექტის გალერეა
              </h2>
            </div>

            <p className="hidden text-sm text-[#7a736b] sm:block">
              {project.images.length} ფოტო
            </p>
          </div>

          <ProjectGallery
            images={project.images}
            projectId={project.id}
            title={project.title}
          />
        </section>
      )}
      {/* Previous / Next */}
      <section className="bg-[#f5f1ea] text-[#24211d]">
        <div className="mx-auto max-w-[1800px] px-4 py-16 sm:px-8 sm:py-20 lg:px-10">
          <div className="border-t border-black/10 pt-10">
            <p className="mb-8 text-xs uppercase tracking-[0.25em] text-[#9b7458]">
              სხვა პროექტები
            </p>

            <div className="grid gap-6 lg:grid-cols-2">
              {/* Previous */}
              {previousProject && (
                <Link
                  href={`/projects/${previousProject.id}`}
                  className="group border border-black/10 bg-white p-8 transition duration-300 hover:border-[#a06f50] hover:shadow-lg"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-[#9b7458]">
                        ← წინა პროექტი
                      </p>

                      <h3 className="mt-5 text-2xl font-medium transition group-hover:text-[#a06f50] font-dachi">
                        {previousProject.title}
                      </h3>
                    </div>

                    <span className="text-6xl font-light text-[#d7c2af] ">
                      {previousProject.id}
                    </span>
                  </div>
                </Link>
              )}

              {/* Next */}
              {nextProject && (
                <Link
                  href={`/projects/${nextProject.id}`}
                  className="group border border-black/10 bg-white p-8 transition duration-300 hover:border-[#a06f50] hover:shadow-lg"
                >
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <span className="text-6xl font-light text-[#d7c2af]">
                      {nextProject.id}
                    </span>

                    <div className="text-right">
                      <p className="text-xs uppercase tracking-[0.2em] text-[#9b7458]">
                        შემდეგი პროექტი →
                      </p>

                      <h3 className="mt-5 text-2xl font-medium transition group-hover:text-[#a06f50] font-dachi">
                        {nextProject.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="bg-[#24211d] text-[#f5f1ea]">
        <div className="mx-auto grid max-w-[1800px] gap-10 px-4 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:px-10 lg:py-24">
          <div>
            <span className="text-[10px] uppercase tracking-[0.24em] text-[#c69a7b]">
              თქვენი პროექტი
            </span>

            <h2 className="mt-5 max-w-4xl text-4xl font-medium leading-[1.05] tracking-[-0.04em] sm:text-5xl  font-dachi">
              გსურთ მსგავსი სამზარეულოს შექმნა?
              <span className="block font-serif italic text-[#c69a7b]"></span>
            </h2>
          </div>

          <div className="lg:flex lg:justify-end">
            <Link
              href="/#contact"
              className="flex min-h-16 w-full items-center justify-between gap-4 bg-[#a06f50] px-5 text-sm font-medium text-white transition hover:bg-[#b47d5a] sm:w-fit sm:min-w-[280px] sm:px-7"
            >
              პროექტის განხილვა
              <span className="text-xl">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
