import { About } from "@/components/About";
import { Footer } from "@/components/footer";
import { Imoveis } from "@/components/imoveis";
import { Carousel } from "@/components/layout/Carousel";
import { Process } from "@/components/process";
import { Result } from "@/components/Result";
import { SectionHome } from "@/components/SectionHome";

export default function Home() {
  return (
    <>
      <SectionHome />
      <Carousel />
      <About />
      <Result />
      <Imoveis />
      <Process />
      <Footer />
    </>
  );
}
