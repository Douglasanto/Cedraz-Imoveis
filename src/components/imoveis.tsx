"use client";

import { CardsImage } from "./layout/CardsImage";
import { SubmitButton } from "./layout/SubmitButton";

export function Imoveis() {
  const handleButton = () => {
    window.location.href =
      "https://api.whatsapp.com/send/?phone=71996989605&text&type=phone_number&app_absent=0";
  };
  return (
    <section
      id="Imoveis"
      className="w-full h-auto bg-second flex flex-col items-center gap-28  py-14 px-6 font-myriad"
    >
      <div className="flex items-center flex-col">
        <h1 className="text-4xl font-bold text-white mt-12">
          Veja alguns imóveis
        </h1>
        <h1 className="text-4xl font-bold text-white">
          <span className="text-primary font-bold">negociados</span>{" "}
          recentemente
        </h1>
      </div>
      <CardsImage />
      <SubmitButton
        className="border-white bg-primary sm:w-[410px]"
        text="Vender ou alugar meu imovel"
        onClick={handleButton}
      />
    </section>
  );
}
