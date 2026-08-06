import Link from "next/link";

const navigation = [
  { label: "მთავარი", href: "#home" },
  { label: "ნამუშევრები", href: "#projects" },
  { label: "პროცესი", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "კონტაქტი", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#24211d] text-[#f5f1ea]">
      <div className="mx-auto max-w-[1800px] px-6">
        <div className="border-b border-white/15 py-16 lg:py-20">
          <div className="grid gap-14 lg:grid-cols-[1.3fr_0.7fr_0.8fr]">
            <div>
              <Link href="/" className="inline-flex flex-col">
                <span className="text-4xl lg:text-7xl font-semibold tracking-[0.32em]">
                  A I R O
                </span>

                <span className="mt-2 text-[11px] tracking-[0.12em] text-white/50">
                  სამზარეულოს ავეჯის სახელოსნო
                </span>
              </Link>

              {/* <h2 className="mt-12 max-w-2xl text-4xl font-medium leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                იდეიდან თქვენს
                <span className="block font-serif italic text-[#c69a7b]">
                  ახალ სამზარეულომდე
                </span>
              </h2> */}

              <p className="mt-7 max-w-lg text-sm leading-7 text-white/55">
                ინდივიდუალური დიზაინი, ხარისხიანი მასალები და ზუსტი
                შესრულება — აზომვიდან საბოლოო მონტაჟამდე.
              </p>

              <Link
                href="#contact"
                className="mt-9 inline-flex min-h-14 items-center justify-between gap-12 bg-[#a86f4d] px-7 text-sm font-medium text-white transition hover:bg-[#bd805a]"
              >
                პროექტის განხილვა
                <span className="text-lg">→</span>
              </Link>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-white/40">
                ნავიგაცია
              </p>

              <nav className="mt-7 flex flex-col">
                {navigation.map((item, index) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="group flex items-center justify-between border-b border-white/10 py-4 text-sm text-white/70 transition hover:text-white"
                  >
                    <span>{item.label}</span>

                    <span className="text-white/30 transition group-hover:translate-x-1 group-hover:text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-white/40">
                კონტაქტი
              </p>

              <div className="mt-7 space-y-8">
                <div>
                  <p className="text-xs text-white/40">ტელეფონი</p>

                  <a
                    href="tel:+995555123456"
                    className="mt-2 block text-xl transition hover:text-[#c69a7b]"
                  >
                    +995 555 12 34 56
                  </a>
                </div>

                <div>
                  <p className="text-xs text-white/40">ელფოსტა</p>

                  <a
                    href="mailto:info@mesto.ge"
                    className="mt-2 block text-base text-white/75 transition hover:text-white"
                  >
                    info@mesto.ge
                  </a>
                </div>

                <div>
                  <p className="text-xs text-white/40">მისამართი</p>

                  <p className="mt-2 text-base text-white/75">
                    თბილისი, საქართველო
                  </p>
                </div>

                <div>
                  <p className="text-xs text-white/40">სოციალური ქსელები</p>

                  <div className="mt-3 flex flex-wrap gap-4">
                    <a
                      href="#"
                      className="border-b border-white/25 pb-1 text-sm text-white/70 transition hover:border-white hover:text-white"
                    >
                      Facebook
                    </a>

                    <a
                      href="#"
                      className="border-b border-white/25 pb-1 text-sm text-white/70 transition hover:border-white hover:text-white"
                    >
                      Instagram
                    </a>

                    <a
                      href="#"
                      className="border-b border-white/25 pb-1 text-sm text-white/70 transition hover:border-white hover:text-white"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-6 text-[11px] uppercase tracking-[0.12em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} MESTO. ყველა უფლება დაცულია.</p>

          <div className="flex gap-6">
            <Link href="#" className="transition hover:text-white">
              კონფიდენციალურობა
            </Link>

            <Link href="#" className="transition hover:text-white">
              პირობები
            </Link>
          </div>

          <a
            href="#home"
            aria-label="გვერდის დასაწყისში დაბრუნება"
            className="flex items-center gap-3 transition hover:text-white"
          >
            დასაწყისში დაბრუნება
            <span className="text-base">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}