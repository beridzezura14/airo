import type { Metadata } from "next";
import Faq from "../components/Faq";

export const metadata: Metadata = {
  title: "ხშირად დასმული კითხვები",
  description: "პასუხები AIRO-ს მომსახურების შესახებ ხშირად დასმულ კითხვებზე.",
};

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-[#f5f1ea]">
      <Faq />
    </main>
  );
}
