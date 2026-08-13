import Image from "next/image";

export default function Process() {
  const steps = [
    {
      id: "01",
      title: "კონსულტაცია და აზომვა",
      description:
        "მოვდივართ ადგილზე, ვაკეთებთ ზუსტ აზომვას და ვისმენთ თქვენს სურვილებს.",
      image: "/process-2.png",
    },
    {
      id: "02",
      title: "დიზაინის შეთანხმება",
      description:
        "ვგეგმავთ განლაგებას, მასალებს, ფერებსა და ფურნიტურას.",
      image: "/process-3.png",
    },
    {
      id: "03",
      title: "დამზადება",
      description:
        "სამზარეულო მზადდება ხარისხიანი მასალებით და თანამედროვე დანადგარებით.",
      image: "/process-4.png",
    },
    {
      id: "04",
      title: "მონტაჟი",
      description:
        "ვახორციელებთ პროფესიონალურ მონტაჟს და საბოლოო დეტალების შემოწმებას.",
      image: "/process-1.png",
    },
  ];

  return (
    <section id="process" className="bg-[#f5f1ea] text-[#24211d]">
      <div className="mx-auto max-w-[1800px] px-5 py-24 sm:px-8 lg:px-10 lg:py-28">
        {/* Section heading */}
        <div className="mb-16 flex flex-col gap-8 border-b border-black/10 pb-9 lg:mb-20 lg:flex-row lg:items-end lg:justify-between ">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#9b7458]">

            </span>

            <h2 className="mt-5 text-5xl font-dachi leading-none sm:text-6xl">
              როგორ ვმუშაობთ
            </h2>
          </div>

          <p className="max-w-md text-base leading-8 text-[#666]">
            იდეიდან დასრულებულ სამზარეულომდე — თითოეული ეტაპი დაგეგმილია
            მაქსიმალური სიზუსტით.
          </p>
        </div>

        {/* Process rows */}
        <div className="overflow-hidden border border-black/10  rounded-xl">
          {steps.map((step, index) => {
            const imageOnRight = index % 2 !== 0;

            return (
              <article
                key={step.id}
                className="grid min-h-[560px] border-b border-black/10 last:border-b-0 lg:grid-cols-2 "
              >
                {/* Image */}
                <div
                  className={`relative min-h-[400px] overflow-hidden lg:min-h-full ${
                    imageOnRight
                      ? "lg:order-2"
                      : "lg:order-1 lg:border-r lg:border-black/10"
                  }`}
                >
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="(max-width: 1023px) 100vw, 50vw"
                    className="object-cover transition duration-700 hover:scale-[1.03]"
                  />

                  <div className="absolute inset-0 bg-black/[0.03]" />

                  <span className="absolute left-6 top-6 text-xs font-medium tracking-[0.2em] text-white font-dachi">
                    ეტაპი {step.id}
                  </span>
                </div>

                {/* Text */}
                <div
                  className={`flex min-h-[420px] flex-col justify-between p-8 sm:p-12 lg:min-h-full lg:p-16 xl:p-20 ${
                    imageOnRight
                      ? "lg:order-1 lg:border-r lg:border-black/10"
                      : "lg:order-2"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span className="text-[76px] font-light leading-none text-[#d4bca8] sm:text-[96px]">
                      {step.id}
                    </span>

                    <span className="mt-3 h-px w-16 bg-[#9b7458]/60" />
                  </div>

                  <div className="mt-16">
                    <h3 className="max-w-xl text-3xl font-dachi leading-tight tracking-[-0.03em] sm:text-4xl xl:text-5xl">
                      {step.title}
                    </h3>

                    <p className="mt-6 max-w-lg text-base leading-8 text-[#666] sm:text-lg sm:leading-9">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-12 flex items-center gap-5">
                    <span className="h-2 w-2 bg-[#9b7458]" />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#81796f]">
                      იდეიდან შესრულებამდე
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
