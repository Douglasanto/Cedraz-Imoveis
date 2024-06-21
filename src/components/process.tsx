import Image from "next/image";
import House from "@/assets/casa.jpg";

export function Process() {
  return (
    <section className="font-myriad flex flex-col py-14 px-6 lg:flex-row md:items-center md:justify-around h-full">
      <Image
        className="w-[300px] lg:w-[450px] xl:w-[600px]"
        src={House}
        alt="Casa branca"
      />
      <div className="h-[300px]">
        <h1 className="text-4xl font-black">
          Processo <span className="text-primary font-black">Simplificado</span>
        </h1>
        <ul className="font-bold flex flex-col gap-4 mt-4 lg:text-xl">
          <li>
            <span className="py-0.5 px-1.5 bg-primary rounded-full mr-2">
              1
            </span>
            Registro do contato e informações do cliente
          </li>
          <li>
            <span className="py-0.5 px-1.5 bg-primary rounded-full mr-2">
              2
            </span>
            Primeiro Contato e Agendamento da Visita Inicial
          </li>
          <li>
            <span className="py-0.5 px-1.5 bg-primary rounded-full mr-2">
              3
            </span>
            Produção de Material de Marketing e Estrategia de valorização
          </li>
          <li>
            <span className="py-0.5 px-1.5 bg-primary rounded-full mr-2">
              4
            </span>
            Início do trabalho de fomento ao mercado
          </li>
          <li>
            <span className="py-0.5 px-1.5 bg-primary rounded-full mr-2">
              5
            </span>
            Acompanhamento Transparente
          </li>
          <li>
            <span className="py-0.5 px-1.5 bg-primary rounded-full mr-2">
              6
            </span>
            Negociação e Fechamento
          </li>
        </ul>
      </div>
    </section>
  );
}
