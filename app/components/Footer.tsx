import Link from "next/link";
import Image from "next/image";

const navigation = [
  { label: "მთავარი", href: "/#home" },
  { label: "ნამუშევრები", href: "/projects" },
  { label: "პროცესი", href: "/#process" },
  { label: "FAQ", href: "/faq" },
  { label: "კონტაქტი", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#24211d] text-[#f5f1ea]">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6">
        <div className="border-b border-white/15 py-16 lg:py-20">
          <div className="grid gap-14 lg:grid-cols-[1.3fr_0.7fr_0.8fr]">
            <div>
              <Link href="/" aria-label="AIRO მთავარი გვერდი" className="inline-flex">
                <Image
                  src="/logo-dark.png"
                  alt="AIRO"
                  width={295}
                  height={75}
                  className="h-auto w-[190px] min-[360px]:w-[220px] sm:w-[280px]"
                />
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
                href="/#contact"
                className="mt-9 flex min-h-14 w-full items-center justify-between gap-4 bg-[#a86f4d] px-5 text-sm font-medium text-white transition hover:bg-[#bd805a] sm:inline-flex sm:w-auto sm:gap-12 sm:px-7"
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
                    href="mailto:info@airo.ge"
                    className="mt-2 block text-base text-white/75 transition hover:text-white"
                  >
                    info@airo.ge
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
          <p>© {new Date().getFullYear()} AIRO. ყველა უფლება დაცულია.</p>

          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <Link href="/privacy" className="transition hover:text-white">
              კონფიდენციალურობა
            </Link>

            <Link href="/terms" className="transition hover:text-white">
              პირობები
            </Link>
          </div>

          <a
            href="/#home"
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
