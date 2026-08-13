import type { Metadata } from "next";
import Projects from "../components/Projects";

export const metadata: Metadata = {
  title: "ნამუშევრები",
  description: "AIRO-ს შესრულებული სამზარეულოს პროექტები.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#f5f1ea]">
      <Projects showAllButton={false} />
    </main>
  );
}
