"use client";

import { CheckCircle2, LoaderCircle, Send } from "lucide-react";
import { FormEvent, useRef, useState } from "react";

type FormErrors = Partial<Record<"name" | "phone" | "email" | "message", string>>;

const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 9);
  return [digits.slice(0, 3), digits.slice(3, 5), digits.slice(5, 7), digits.slice(7, 9)]
    .filter(Boolean)
    .join(" ");
};

export default function Contact() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const [formError, setFormError] = useState<string | null>(null);
  const [phoneValue, setPhoneValue] = useState("");
  const formStartedAt = useRef(Date.now());

  const clearError = (field: keyof FormErrors) => {
    setErrors((current) => ({ ...current, [field]: undefined }));
    setFormError(null);
    if (status === "success") setStatus("idle");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const honeypot = String(data.get("company_website") ?? "").trim();
    const nextErrors: FormErrors = {};

    if (honeypot) {
      form.reset();
      setPhoneValue("");
      setStatus("success");
      return;
    }

    if (Date.now() - formStartedAt.current < 2000) {
      setFormError("ფორმა ზედმეტად სწრაფად გაიგზავნა. გთხოვთ, გადაამოწმოთ მონაცემები და სცადოთ ხელახლა.");
      return;
    }

    try {
      const lastSubmission = Number(window.localStorage.getItem("airo-contact-submitted-at") ?? 0);
      const cooldown = 30_000 - (Date.now() - lastSubmission);

      if (cooldown > 0) {
        setFormError(`განმეორებითი გაგზავნა შესაძლებელი იქნება ${Math.ceil(cooldown / 1000)} წამში.`);
        return;
      }
    } catch {
      // The form remains usable when browser storage is unavailable.
    }

    if (name.length < 2) nextErrors.name = "გთხოვთ, მიუთითოთ თქვენი სახელი.";
    if (phone.replace(/\D/g, "").length !== 9) {
      nextErrors.phone = "ტელეფონის ნომერი უნდა შეიცავდეს ზუსტად 9 ციფრს.";
    }
    if (email && !/^\S+@\S+\.\S+$/.test(email)) {
      nextErrors.email = "გთხოვთ, მიუთითოთ სწორი ელფოსტა.";
    }
    if (message.length < 10) {
      nextErrors.message = "შეტყობინება უნდა შეიცავდეს მინიმუმ 10 სიმბოლოს.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setFormError(null);
      setStatus("idle");
      return;
    }

    setErrors({});
    setFormError(null);
    setStatus("sending");

    window.setTimeout(() => {
      form.reset();
      setPhoneValue("");
      formStartedAt.current = Date.now();
      try {
        window.localStorage.setItem("airo-contact-submitted-at", String(Date.now()));
      } catch {
        // Storage may be disabled; the honeypot and time trap remain active.
      }
      setStatus("success");
    }, 900);
  };

  return (
    <section id="contact" className="bg-[#f5f1ea] text-[#24211d]">
      <div className="mx-auto max-w-[1800px] px-4 py-20 sm:px-6 sm:py-28">
        {/* Header */}
        <div className="mb-14 flex flex-col gap-8 border-b border-black/10 pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#a06f50]">

            </span>

            <h2 className="mt-5 max-w-3xl text-5xl font-dachi leading-[1.05] tracking-[-0.04em] sm:text-6xl">
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
            <form className="space-y-7" onSubmit={handleSubmit} noValidate>
              <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
                <label htmlFor="company_website">ვებგვერდი</label>
                <input
                  id="company_website"
                  name="company_website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
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
                    autoComplete="name"
                    maxLength={80}
                    required
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    onChange={() => clearError("name")}
                    placeholder="თქვენი სახელი"
                    className="h-16 w-full border border-black/10 bg-transparent px-5 outline-none transition placeholder:text-[#8f8981] focus:border-[#a06f50]"
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-2 text-sm text-[#a34f3c]">
                      {errors.name}
                    </p>
                  )}
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
                    inputMode="numeric"
                    autoComplete="tel"
                    maxLength={12}
                    required
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    value={phoneValue}
                    onChange={(event) => {
                      setPhoneValue(formatPhone(event.target.value));
                      clearError("phone");
                    }}
                    placeholder="555 11 22 33"
                    className="h-16 w-full border border-black/10 bg-transparent px-5 outline-none transition placeholder:text-[#8f8981] focus:border-[#a06f50]"
                  />
                  {errors.phone && (
                    <p id="phone-error" className="mt-2 text-sm text-[#a34f3c]">
                      {errors.phone}
                    </p>
                  )}
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
                  inputMode="email"
                  autoComplete="email"
                  maxLength={120}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  onChange={() => clearError("email")}
                  placeholder="example@gmail.com"
                  className="h-16 w-full border border-black/10 bg-transparent px-5 outline-none transition placeholder:text-[#8f8981] focus:border-[#a06f50]"
                />
                {errors.email && (
                  <p id="email-error" className="mt-2 text-sm text-[#a34f3c]">
                    {errors.email}
                  </p>
                )}
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
                  maxLength={1500}
                  required
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  onChange={() => clearError("message")}
                  placeholder="მოკლედ აღწერეთ თქვენი პროექტი..."
                  className="w-full resize-none border border-black/10 bg-transparent p-5 outline-none transition placeholder:text-[#8f8981] focus:border-[#a06f50]"
                />
                {errors.message && (
                  <p id="message-error" className="mt-2 text-sm text-[#a34f3c]">
                    {errors.message}
                  </p>
                )}
              </div>

              {formError && (
                <div
                  role="alert"
                  className="rounded-xl border border-[#a34f3c]/20 bg-[#a34f3c]/8 p-4 text-sm leading-6 text-[#873f30]"
                >
                  {formError}
                </div>
              )}

              {status === "success" && (
                <div
                  role="status"
                  className="flex items-start gap-3 rounded-xl border border-[#4f7b5b]/20 bg-[#4f7b5b]/10 p-4 text-sm leading-6 text-[#35553d]"
                >
                  <CheckCircle2 className="mt-0.5 shrink-0" size={20} strokeWidth={1.8} />
                  <span>შეტყობინება მიღებულია — AIRO-ს გუნდი მალე დაგიკავშირდებაათ.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="flex h-16 w-full items-center justify-between gap-4 bg-[#a06f50] px-5 text-sm font-medium text-white transition hover:bg-[#89593e] disabled:cursor-wait disabled:opacity-75 sm:px-7"
              >
                <span>{status === "sending" ? "იგზავნება..." : "შეტყობინების გაგზავნა"}</span>
                {status === "sending" ? (
                  <LoaderCircle className="animate-spin" aria-hidden="true" size={20} />
                ) : (
                  <Send aria-hidden="true" size={20} strokeWidth={1.8} />
                )}
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
            href="mailto:info@airo.ge"
            className="group flex min-h-36 flex-col justify-between border-b border-black/10 p-7 transition hover:bg-white/40 sm:border-b-0 sm:border-r lg:p-9"
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#8e877e]">
                ელფოსტა
              </span>

              <span className="transition group-hover:translate-x-1">→</span>
            </div>

            <p className="mt-7 break-all text-lg font-medium min-[360px]:text-xl sm:text-2xl">
              info@airo.ge
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
