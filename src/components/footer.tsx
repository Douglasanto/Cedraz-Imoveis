"use client";

import { SubmitButton } from "./layout/SubmitButton";
import {
  IoLogoInstagram,
  IoLogoWhatsapp,
  IoLogoFacebook,
  IoMailUnreadOutline,
} from "react-icons/io5";

export function Footer() {
  const handleButton = () => {
    window.location.href =
      "https://api.whatsapp.com/send/?phone=71996989605&text&type=phone_number&app_absent=0";
  };
  return (
    <footer className="bg-second flex flex-col items-center lg:px-16 px-6 py-6">
      <div className="flex flex-col items-center content-center mt-7">
        <h1 className="flex flex-col items-center text-white font-black text-4xl sm:flex-row">
          Quem é <span className="text-primary sm:ml-2">Cedraz?</span>
        </h1>
        <p className="text-white text-center mt-4 text-2xl lg:w-[930px]">
          Cedraz é corretor de imóveis e avaliador imobiliário credenciado,
          nascido na Bahia, com paixões pelo relacionamento interpessoal e
          venda.
        </p>
        <SubmitButton
          className="bg-primary border-white sm:w-[450px] sm:p-7"
          text="Vender ou alugar meu imovel"
          onClick={handleButton}
        />
      </div>
      <hr className="w-full border-t-2 mt-2 xl:w-[1200px]" />
      <div className="flex mt-[-15px]">
        <span className="w-[15px] h-[15px] bg-slate-600 m-2"></span>
        <span className="w-[15px] h-[15px] bg-slate-600 m-2"></span>
        <span className="w-[15px] h-[15px] bg-slate-600 m-2"></span>
      </div>
      <div className="flex flex-col items-center content-center mt-7 mb-7">
        <h1 className="text-white text-lg font-black sm:text-4xl">
          Tem dúvidas? Entre em contato
        </h1>
        <div className="grid grid-cols-2 gap-8 mt-8 mb-4 sm:flex">
          <div className="bg-primary rounded-full p-2">
            <a
              href="wa.me/71996989605"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoWhatsapp size={60} />
            </a>
          </div>
          <div className="bg-primary rounded-full p-2">
            <a
              href="https://www.instagram.com/imoveis.cedraz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoInstagram size={60} />
            </a>
          </div>
          <div className="bg-primary rounded-full p-2">
            <a href="" target="_blank" rel="noopener noreferrer">
              <IoLogoFacebook size={60} />
            </a>
          </div>
          <div className="bg-primary rounded-full p-2">
            <a href="" target="_blank" rel="noopener noreferrer">
              <IoMailUnreadOutline size={60} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
