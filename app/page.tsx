import Contact from "./components/Contact";
// import Faq from "./components/Faq";
import Hero from "./components/Hero";
import Process from "./components/Process";
import Projects from "./components/Projects";
// import WhyUs from "./components/WhyUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      {/* <WhyUs /> */}
      <Process />
      {/* <Faq /> */}
      <Contact />
    </div>
  );
}
