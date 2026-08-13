import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "გამოყენების პირობები",
  description: "AIRO-ს ვებგვერდისა და მომსახურების გამოყენების პირობები.",
};

const sections = [
  {
    title: "ზოგადი პირობები",
    text: "ვებგვერდის გამოყენებით ეთანხმებით წინამდებარე პირობებს. გვერდზე განთავსებული ინფორმაცია ზოგადი ხასიათისაა და კონკრეტული პროექტის საბოლოო შეთავაზებას არ წარმოადგენს.",
  },
  {
    title: "შეთავაზება და ფასი",
    text: "პროექტის ღირებულება განისაზღვრება აზომვის, დიზაინის, მასალების, ფურნიტურისა და სამუშაოს მოცულობის მიხედვით. საბოლოო ფასი და ვადები ფორმდება ინდივიდუალური შეთანხმებით.",
  },
  {
    title: "ვადები და შესრულება",
    text: "შესრულების ვადა დამოკიდებულია პროექტის სირთულეზე, მასალების ხელმისაწვდომობასა და შეთანხმებულ სამუშაო გრაფიკზე. შესაძლო ცვლილებების შესახებ დამკვეთი წინასწარ მიიღებს ინფორმაციას.",
  },
  {
    title: "მასალები და ვიზუალური განსხვავება",
    text: "ეკრანზე ნაჩვენები ფერები და ფაქტურები შესაძლოა რეალური მასალისგან მცირედ განსხვავდებოდეს. საბოლოო არჩევანი კეთდება ფიზიკური ნიმუშებისა და შეთანხმებული სპეციფიკაციის საფუძველზე.",
  },
  {
    title: "ინტელექტუალური საკუთრება",
    text: "ვებგვერდზე განთავსებული ტექსტები, ფოტოები, დიზაინი და სხვა მასალა ეკუთვნის AIRO-ს ან გამოიყენება შესაბამისი ნებართვით. მათი უნებართვო გამოყენება დაუშვებელია.",
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#f5f1ea] text-[#24211d]">
      <section className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <p className="text-xs uppercase tracking-[0.24em] text-[#a06f50]">AIRO</p>
        <h1 className="mt-5 font-dachi text-5xl leading-tight sm:text-6xl">
          გამოყენების პირობები
        </h1>
        <p className="mt-7 max-w-3xl text-base leading-8 text-[#6b655d]">
          ეს პირობები განსაზღვრავს AIRO-ს ვებგვერდისა და მომსახურების შესახებ ინფორმაციის გამოყენების წესებს.
        </p>

        <div className="mt-14 border-t border-black/10">
          {sections.map((section) => (
            <article key={section.title} className="grid gap-4 border-b border-black/10 py-8 md:grid-cols-[0.65fr_1.35fr] md:gap-12">
              <h2 className="font-dachi text-2xl">{section.title}</h2>
              <p className="max-w-2xl leading-8 text-[#686158]">{section.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
