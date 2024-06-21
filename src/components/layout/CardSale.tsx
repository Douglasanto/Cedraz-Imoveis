import { TimelineEvent } from "@/components/layout/Timeline";
import Icon from "@/assets/eficiencia-icon.svg";
import Corretor from "@/assets/corretor.png";
import Atendente from "@/assets/atendimento-ao-cliente.png";
import Cliente from "@/assets/inquilino.png";

export function CardSale() {
  return (
    <div className="flex flex-col lg:grid gap-5 grid-cols-2 p-5 mt-8">
      <TimelineEvent
        text="Experiencia comprovada:"
        description="Com anos de experiencia no mercado imobiliario, nossa equipe possui um profundo conhecimento das tendecias e nuance do setor. Isso nos permite orientar suas decisoes com base em insights solidos"
        src={Icon}
        alt="icon"
        className="md:left-[400px]"
      />
      <div className="hidden lg:block mt-[100px]">
        <div className="border-t-4 ml-[-192px] w-[483px] border-dashed border-primary"></div>
        <div className="border-r-4 h-[250px] ml-[287px] absolute border-dashed border-primary"></div>
      </div>
      <div className="hidden lg:block mt-[100px] ">
        <div className="w-[23rem] ml-[287px] border-t-4 border-dashed border-primary"></div>
        <div className="border-r-4 h-[250px] ml-[287px] absolute border-dashed border-primary"></div>
      </div>
      <TimelineEvent
        text="Corretor Treinado:"
        description="Você conta com um corretor altamente qualificado e constantemente atualizado. Estando preparado para enfrentar os os desafios mais recentes e oferecer soluções inovadoras para garantir o sucesso da venda."
        src={Corretor}
        alt="Corretor"
      />
      <TimelineEvent
        text="Dedicação ao Atendimento:"
        description="Entendemos que cada cliente é único e é por isso que dedicamos tempo para entender suas expectativas e necessidade.
Nossa abordagem personalizada garante que sua experiência seja satisfatória e sem complicações."
        src={Atendente}
        alt="Atendente"
        className="md:left-[400px]"
      />
      <div className="hidden lg:block mt-[100px] ">
        <div className="border-t-4 ml-[-192px] w-[483px] border-dashed border-primary"></div>
        <div className="border-r-4 h-[250px] ml-[287px] absolute border-dashed border-primary"></div>
      </div>
      <div>
        <div className="hidden lg:block mt-[100px] "></div>
      </div>
      <TimelineEvent
        text="Rede de clientes:"
        description="Nossas conexões prévias e uma carteira de clientes consolidada nos permitem encontrar compradores qualificados de maneira mais rápida e eficiente."
        src={Cliente}
        alt="Cliente"
      />
    </div>
  );
}
