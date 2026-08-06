export default function Contact() {
  return (
    <section id="contact" className="bg-[#f5f1ea] text-[#24211d]">
      <div className="mx-auto max-w-[1800px] px-6 py-28">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-8 border-b border-black/10 pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#a06f50]">

            </span>

            <h2 className="mt-5 max-w-3xl text-5xl font-medium leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              მოგვწერეთ ან დაგვირეკეთ
              <span className="block font-serif italic text-[#a06f50]">
                
              </span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-8 text-[#6b655d]">
            მოგვწერეთ თქვენი იდეის შესახებ და ერთად განვიხილოთ დიზაინი,
            მასალები, ღირებულება და შესრულების ვადა.
          </p>
        </div>

        {/* Form + Map */}
        <div className="grid border border-black/10 lg:grid-cols-2">
          {/* Form */}
          <div className="border-b border-black/10 p-6 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
            <form className="space-y-7">
              <div className="grid gap-7 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-3 block text-sm font-medium"
                  >
                    სახელი
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="თქვენი სახელი"
                    className="h-16 w-full border border-black/10 bg-transparent px-5 outline-none transition placeholder:text-[#8f8981] focus:border-[#a06f50]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-3 block text-sm font-medium"
                  >
                    ტელეფონი
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+995..."
                    className="h-16 w-full border border-black/10 bg-transparent px-5 outline-none transition placeholder:text-[#8f8981] focus:border-[#a06f50]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-3 block text-sm font-medium"
                >
                  ელფოსტა
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@gmail.com"
                  className="h-16 w-full border border-black/10 bg-transparent px-5 outline-none transition placeholder:text-[#8f8981] focus:border-[#a06f50]"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-3 block text-sm font-medium"
                >
                  შეტყობინება
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  placeholder="მოკლედ აღწერეთ თქვენი პროექტი..."
                  className="w-full resize-none border border-black/10 bg-transparent p-5 outline-none transition placeholder:text-[#8f8981] focus:border-[#a06f50]"
                />
              </div>

              <button
                type="submit"
                className="flex h-16 w-full items-center justify-between bg-[#a06f50] px-7 text-sm font-medium text-white transition hover:bg-[#89593e]"
              >
                <span>შეტყობინების გაგზავნა</span>
                <span className="text-xl">→</span>
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="relative min-h-[520px] overflow-hidden bg-[#ddd7ce] lg:min-h-full">
            <iframe
              title="ჩვენი მდებარეობა"
              src="https://www.google.com/maps?q=Tbilisi,Georgia&output=embed"
              className="absolute inset-0 h-full w-full border-0 grayscale-[25%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Contact information */}
        <div className="grid border-x border-b border-black/10 sm:grid-cols-3">
          <a
            href="tel:+995555123456"
            className="group flex min-h-36 flex-col justify-between border-b border-black/10 p-7 transition hover:bg-white/40 sm:border-b-0 sm:border-r lg:p-9"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#8e877e]">
                ტელეფონი
              </span>

              <span className="transition group-hover:translate-x-1">→</span>
            </div>

            <p className="mt-7 text-xl font-medium sm:text-2xl">
              +995 555 12 34 56
            </p>
          </a>

          <a
            href="mailto:info@kitchen.ge"
            className="group flex min-h-36 flex-col justify-between border-b border-black/10 p-7 transition hover:bg-white/40 sm:border-b-0 sm:border-r lg:p-9"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#8e877e]">
                ელფოსტა
              </span>

              <span className="transition group-hover:translate-x-1">→</span>
            </div>

            <p className="mt-7 text-xl font-medium sm:text-2xl">
              info@kitchen.ge
            </p>
          </a>

          <div className="flex min-h-36 flex-col justify-between p-7 lg:p-9">
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#8e877e]">
              მისამართი
            </span>

            <p className="mt-7 text-xl font-medium sm:text-2xl">
              თბილისი, საქართველო
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}