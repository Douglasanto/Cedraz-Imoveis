import Image from "next/image";
import Orquedia from "@/assets/teste.png";
import Diamente from "@/assets/teste2.png";
import Enseada from "@/assets/teste3.png";
import Piazza from "@/assets/teste4.png";
import SoftHouse from "@/assets/teste5.png";
import Humberto from "@/assets/teste6.png";

export function CardsImage() {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-4">
      <Image
        className="w-[250px] hover:scale-105 transition ease-linear duration-500 lg:w-[400px]"
        src={Orquedia}
        alt="Primeira Imagem"
      />
      <Image
        className="w-[250px] hover:scale-105 transition ease-linear duration-500 lg:w-[400px]"
        src={Diamente}
        alt="Segunda Imagem"
      />
      <Image
        className="w-[250px] hover:scale-105 transition ease-linear duration-500 lg:w-[400px]"
        src={Enseada}
        alt="Terceira Imagem"
      />
      <Image
        className="w-[250px] hover:scale-105 transition ease-linear duration-500 lg:w-[400px]"
        src={Piazza}
        alt="Quarta Imagem"
      />
      <Image
        className="w-[250px] hover:scale-105 transition ease-linear duration-500 lg:w-[400px]"
        src={SoftHouse}
        alt="Quinta Imagem"
      />
      <Image
        className="w-[250px] hover:scale-105 transition ease-linear duration-500 lg:w-[400px]"
        src={Humberto}
        alt="Sexta Imagem"
      />
    </div>
  );
}
