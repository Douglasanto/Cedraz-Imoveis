"use client";

import { CardSale } from "./layout/CardSale";
import { Container } from "./layout/Container";
import { SubmitButton } from "./layout/SubmitButton";

export function About() {
  const handleButton = () => {
    window.location.href =
      "https://api.whatsapp.com/send/?phone=71996989605&text&type=phone_number&app_absent=0";
  };
  return (
    <section id="About" className="bg-three w-full py-14 px-6 font-myriad">
      <Container>
        <div className="flex flex-col px-4 justify-around items-center sm:items-end sm:flex-row ">
          <h1 className="text-white max-w-[400px] mb-8 mt-14 font-bold text-[25px] sm:text-4xl sm:text-[40px] sm:leading-10">
            Porque nos escolher para{" "}
            <span className="text-primary">
              venda ou aluguel do seu imóvel?
            </span>
          </h1>
          <p className="text-xl max-w-[408px] text-white mb-8 sm:mt-14">
            Ao nos escolhe para vender ou alugar o seu imóvel, você está optando
            por uma experiêcia diferenciada e altamente eficaz.
          </p>
        </div>
        <div className="flex items-center flex-col">
          <hr className="w-full border-t-2 mt-2" />
          <div className="flex mt-[-15px]">
            <span className="w-[15px] h-[15px] bg-slate-600 m-2"></span>
            <span className="w-[15px] h-[15px] bg-slate-600 m-2"></span>
            <span className="w-[15px] h-[15px] bg-slate-600 m-2"></span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <CardSale />
          <SubmitButton
            className="border-white bg-primary"
            text="Alugar meu imovel"
            onClick={handleButton}
          />
        </div>
      </Container>
    </section>
  );
}
