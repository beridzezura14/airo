"use client";

import { useState } from "react";

const faqs = [
  {
    question: "რა ღირს სამზარეულოს დამზადება?",
    answer:
      "ფასი დამოკიდებულია ზომაზე, მასალებზე, ფურნიტურასა და დიზაინზე. ზუსტი ღირებულება განისაზღვრება აზომვისა და კონსულტაციის შემდეგ.",
  },
  {
    question: "რამდენ ხანში მზადდება შეკვეთა?",
    answer:
      "საშუალოდ 15–30 სამუშაო დღე. ვადა დამოკიდებულია პროექტის სირთულესა და მასალების ხელმისაწვდომობაზე.",
  },
  {
    question: "აზომვა ფასიანია?",
    answer:
      "თბილისის მასშტაბით აზომვა და პირველადი კონსულტაცია უფასოა.",
  },
  {
    question: "რა მასალებს იყენებთ?",
    answer:
      "ვმუშაობთ MDF, ლამინირებულ ფილებთან, EGGER, Kronospan-ის მასალებსა და BLUM, Hettich-ის ფურნიტურასთან.",
  },
  {
    question: "გარანტიას თუ იძლევით?",
    answer:
      "დიახ. შესრულებულ სამუშაოსა და გამოყენებულ ფურნიტურაზე მოქმედებს გარანტია.",
  },
  {
    question: "საქართველოს სხვა ქალაქებშიც მუშაობთ?",
    answer:
      "დიახ. ვასრულებთ პროექტებს მთელი საქართველოს მასშტაბით შეთანხმების საფუძველზე.",
  },
];

export default function Faq() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="bg-[#f5f1ea] py-28 text-[#24211d]"
    >
      <div className="mx-auto max-w-[1700px] px-6">

        <div className="grid gap-20 lg:grid-cols-[1.3fr_1.3fr]">

          {/* Left */}
          
          <div>

            {faqs.map((faq, index) => {

              const isOpen = active === index;

              return (
                <div
                  key={index}
                  className="border-b border-black/10"
                >

                  <button
                    onClick={() =>
                      setActive(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between py-8 text-left"
                  >

                    <h3 className="text-2xl font-medium">
                      {faq.question}
                    </h3>

                    <span
                      className={`text-3xl transition ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>

                  </button>

                  <div
                    className={`grid overflow-hidden transition-all duration-500 ${
                      isOpen
                        ? "grid-rows-[1fr] pb-8"
                        : "grid-rows-[0fr]"
                    }`}
                  >

                    <div className="overflow-hidden">

                      <p className="max-w-2xl leading-8 text-[#666]">
                        {faq.answer}
                      </p>

                    </div>

                  </div>

                </div>
              );

            })}

          </div>

          <div className="sticky top-28 h-fit">

            <span className="text-xs uppercase tracking-[0.25em] text-[#a06f50]">
              06
            </span>

            <h2 className="mt-5 text-6xl font-medium leading-none">
              ხშირად დასმული
              კითხვები
            </h2>

            <p className="mt-8 max-w-sm leading-8 text-[#666]">
              თუ პასუხი ვერ იპოვეთ,
              დაგვიკავშირდით და სიამოვნებით
              გაგიწევთ კონსულტაციას.
            </p>

          </div>

          {/* Right */}


        </div>

      </div>
    </section>
  );
}