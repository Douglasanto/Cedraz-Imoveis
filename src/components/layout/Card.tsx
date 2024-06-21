import { BsCart4 } from "react-icons/bs";
import { MdFamilyRestroom, MdAssuredWorkload } from "react-icons/md";
import { TbShoppingCartDollar } from "react-icons/tb";

export function Card() {
  return (
    <div className="flex flex-col xl:grid gap-5 grid-flow-col p-5 ">
      <div className="w-[310px] h-[330px] bg-second rounded-2xl p-2 transform hover:scale-105 transition ease-linear duration-500">
        <div className="w-full h-full p-3">
          <BsCart4 size={50} color="#9f8459" />
          <h2 className="mt-2 text-white font-bold text-2xl uppercase">
            Mais de 13 milhões em valor de vendas
          </h2>
          <p className="mt-2 text-white text-[0.8rem]">
            No último ano, facilitamos transações imobiliárias que totalizaram
            um impressionante montante de mais de 13 milhões de reais em valor
            geral de vendas. Essa conquista é um testemunho da confiança que
            nossos clientes depositam em nós para cuidar de suas propriedades.
          </p>
        </div>
      </div>
      <div className="w-[310px] h-[330px] bg-second rounded-2xl p-2 transform hover:scale-105 transition ease-linear duration-500">
        <div className="w-full h-full p-3">
          <MdFamilyRestroom size={50} color="#9f8459" />
          <h2 className="mt-2 text-white font-bold text-2xl uppercase">
            impacto em mais de 90 famílias:
          </h2>
          <p className="mt-2 text-white text-[0.8rem]">
            Não se trata apenas de negócios; é sobre transformar vidas. Ao longo
            do último ano, tivemos a honra de impactar positivamente mais de 90
            famílias, ajudando-as a realizar seus sonhos de vender e adquirir
            imóveis.
          </p>
        </div>
      </div>
      <div className="w-[310px] h-[330px] bg-second rounded-2xl p-2 transform hover:scale-105 transition ease-linear duration-500">
        <div className="w-full h-full p-3">
          <MdAssuredWorkload size={50} color="#9f8459" />
          <h2 className="mt-2 text-white font-bold text-2xl uppercase">
            Agilidade nas transações
          </h2>
          <p className="mt-2 text-white text-[0.8rem]">
            Nossa dedicação à eficiência foi notável. Mais de 60% das transações
            realizadas ate agora envolveram imóveis que encontraram compradores
            dentro de até 90 dias. Isso é resultado de estratégias de marketing
            eficazes e de nossa equipe altamente dedicada.
          </p>
        </div>
      </div>
      <div className="w-[310px] h-[330px] bg-second rounded-2xl p-2 transform hover:scale-105 transition ease-linear duration-500">
        <div className="w-full h-full p-3">
          <TbShoppingCartDollar size={50} color="#9f8459" />
          <h2 className="mt-2 text-white font-bold text-2xl uppercase">
            Venda rápidas e eficazes:
          </h2>
          <p className="mt-2 text-white text-[0.8rem]">
            Estamos orgulhosos de compartilhar que 40% dos imoveis anunciados
            conosco encontraram compradores nos primeiros 30 dias. Essa taxa de
            sucesso reflete nossa habilidade de identificar os compradores
            certos rapidamente e de criar um impacto instantâneo no mercado.
          </p>
        </div>
      </div>
    </div>
  );
}
