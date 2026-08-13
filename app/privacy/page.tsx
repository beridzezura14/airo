import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "კონფიდენციალურობა",
  description: "AIRO-ს კონფიდენციალურობის პოლიტიკა.",
};

const sections = [
  {
    title: "რა ინფორმაციას ვაგროვებთ",
    text: "როდესაც გვიკავშირდებით, შესაძლოა მივიღოთ თქვენი სახელი, ტელეფონის ნომერი, ელფოსტა და პროექტთან დაკავშირებული ინფორმაცია, რომელსაც თავად გვაწვდით.",
  },
  {
    title: "როგორ ვიყენებთ ინფორმაციას",
    text: "მონაცემებს ვიყენებთ მოთხოვნაზე პასუხის გასაცემად, კონსულტაციის დასაგეგმად, შეთავაზების მოსამზადებლად და შეკვეთასთან დაკავშირებული კომუნიკაციისთვის.",
  },
  {
    title: "მონაცემების დაცვა",
    text: "პერსონალურ ინფორმაციას ვინახავთ მხოლოდ საჭირო ვადით და ვიღებთ გონივრულ ზომებს მისი უნებართვო წვდომისგან, შეცვლისა და გამჟღავნებისგან დასაცავად.",
  },
  {
    title: "მესამე მხარეები",
    text: "თქვენს მონაცემებს არ ვყიდით. ინფორმაცია მესამე მხარეს გადაეცემა მხოლოდ მომსახურების შესრულებისთვის აუცილებელ შემთხვევაში ან კანონით გათვალისწინებული მოთხოვნის საფუძველზე.",
  },
  {
    title: "თქვენი უფლებები",
    text: "შეგიძლიათ მოითხოვოთ თქვენს შესახებ დაცული ინფორმაციის გაცნობა, შესწორება ან წაშლა. ამისთვის დაგვიკავშირდით Footer-ში მითითებული საკონტაქტო არხებით.",
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#f5f1ea] text-[#24211d]">
      <section className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <p className="text-xs uppercase tracking-[0.24em] text-[#a06f50]">AIRO</p>
        <h1 className="mt-5 font-dachi text-5xl leading-tight sm:text-6xl">
          კონფიდენციალურობის პოლიტიკა
        </h1>
        <p className="mt-7 max-w-3xl text-base leading-8 text-[#6b655d]">
          ეს პოლიტიკა განმარტავს, როგორ ვამუშავებთ ინფორმაციას, რომელსაც AIRO-სთან დაკავშირებისას გვაწვდით.
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
