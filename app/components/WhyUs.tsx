export default function WhyUs() {
  const items = [
    {
      number: "01",
      title: "ინდივიდუალური დიზაინი",
      text: "ყველა პროექტი იქმნება თქვენი სივრცისა და საჭიროებების მიხედვით.",
    },
    {
      number: "02",
      title: "ზუსტი აზომვა",
      text: "ყველა დეტალი წინასწარ იზომება მაქსიმალური სიზუსტით.",
    },
    {
      number: "03",
      title: "ხარისხიანი მასალები",
      text: "ვიყენებთ მხოლოდ სანდო მწარმოებლების მასალებსა და ფურნიტურას.",
    },
    {
      number: "04",
      title: "პროფესიონალური მონტაჟი",
      text: "სუფთა, სწრაფი და ხარისხიანი მონტაჟი ადგილზე.",
    },
  ];
  return (
    <section id="services" className="bg-[#f5f1ea] text-[#24211d]">
      <div className="mx-auto max-w-[1800px] px-5 py-28 sm:px-8 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          {/* LEFT */}

          <div className="sticky top-28 h-fit">
            <p className="text-xs uppercase tracking-[0.22em] text-[#9a7155]">
              03
            </p>

            <h2 className="mt-5 text-5xl font-medium leading-none lg:text-7xl">
              რატომ ჩვენ?
            </h2>

            <p className="mt-8 max-w-md leading-8 text-[#6d665d]">
              ჩვენი მიზანია მხოლოდ ლამაზი სამზარეულოს შექმნა არაა — მთავარი
              პრაქტიკულობა, გამძლეობა და სწორი დაგეგმარებაა.
            </p>
          </div>

          {/* RIGHT */}

          <div className="grid gap-px bg-[#d8d1c7]">
            {items.map((item) => (
              <article
                key={item.number}
                className="group grid bg-[#f5f1ea] p-10 transition hover:bg-white lg:grid-cols-[120px_1fr]"
              >
                <span className="text-5xl font-light text-[#c39a7c]">
                  {item.number}
                </span>

                <div>
                  <h3 className="text-3xl font-medium transition group-hover:translate-x-2">
                    {item.title}
                  </h3>

                  <p className="mt-5 max-w-lg leading-8 text-[#69635a]">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
