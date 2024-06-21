"use client";

import { Container } from "./layout/Container";
import { SubmitButton } from "./layout/SubmitButton";

export function SectionHome() {
  const handleClick = () => {
    window.location.href =
      "https://api.whatsapp.com/send/?phone=71996989605&text&type=phone_number&app_absent=0";
  };

  return (
    <section
      id="Home"
      className="w-full bg-img_bg_hero bg-no-repeat bg-center bg-cover sm:h-[100vh] font-myriad"
    >
      <div className="gradiant-juniorlindo py-14 px-6 sm:h-[100vh] ">
        <Container className="flex items-center sm:h-[100vh]">
          <div className="max-w-[600px] flex flex-col mt-20">
            <h1 className="text-white text-xl font-black font-myriadBold mb-4 sm:text-5xl">
              Venda ou alugue seu imóvel com segurança e serenidade
            </h1>
            <p className="text-white text-xl max-w-[485px] mb-8">
              Corretor e avaliador imobiliário credenciado. Experiência e
              segurança{" "}
              <span className="text-primary">
                para transacionar seu imóvel de forma eficiente, segura e no
                melhor preço no mercado.
              </span>
            </p>
            <SubmitButton
              className="bg-second border-white"
              text="Vender meu imovel"
              onClick={handleClick}
            />
          </div>
        </Container>
      </div>
    </section>
  );
}
