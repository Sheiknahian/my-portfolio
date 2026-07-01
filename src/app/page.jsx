import Image from "next/image";
import Banner from "./Components/Banner/Banner";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";

export default function Home() {
  return (
    <div className="bg-zinc-50 font-sans dark:bg-black">
      <main className="space-y-20 bg-[#0B1120]">
        <Banner></Banner>
        <section id="about" className="scroll-mt-15">
          <About></About>
        </section>
        <section id="skills" className="scroll-mt-25">
          <Skills></Skills>
        </section>
      </main>
    </div>
  );
}
