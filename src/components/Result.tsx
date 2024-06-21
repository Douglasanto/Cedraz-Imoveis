"use client";

import { Card } from "./layout/Card";
import { Container } from "./layout/Container";
import { SubmitButton } from "./layout/SubmitButton";

export function Result() {
  const handleButton = () => {
    window.location.href =
      "https://api.whatsapp.com/send/?phone=71996989605&text&type=phone_number&app_absent=0";
  };
  return (
    <section
      id="Result"
      className="w-full h-auto bg-BGWhite flex flex-col items-center gap-28 py-14 px-6 font-myriad"
    >
      <Container className="flex flex-col items-center">
        <div className="flex items-center flex-col mt-12">
          <h1 className="font-bold text-3xl text-second lg:text-5xl">
            <span className="text-primary font-bold">Resultados</span> que falam
            por si mesmo:
          </h1>
          <h1 className="font-bold text-3xl text-second lg:text-5xl">
            Nossas conquistas em números
          </h1>
        </div>
        <Card />
        <SubmitButton
          className="shadow-[inset_0_0_0_2px_#17243e] bg-primary sm:w-[410px]"
          text="Vender ou alugar meu imovel"
          onClick={handleButton}
        />
      </Container>
    </section>
  );
}
