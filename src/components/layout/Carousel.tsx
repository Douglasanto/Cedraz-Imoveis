export function Carousel() {
  const phrases = [
    " VENDA, COMPRE OU ALUGUE O SEU IMÓVEL COM SEGURANÇA ",
    " VENDA, COMPRE OU ALUGUE O SEU IMÓVEL COM SEGURANÇA ",
    " VENDA, COMPRE OU ALUGUE O SEU IMÓVEL COM SEGURANÇA ",
    " VENDA, COMPRE OU ALUGUE O SEU IMÓVEL COM SEGURANÇA ",
  ];
  return (
    <div className="w-full h-12 overflow-hidden bg-Carosel flex items-center">
      <div className="w-full flex flex-nowrap">
        <ul className="flex justify-center md:justify-start space-x-4 animate-infinite-scroll text-white">
          {phrases.map((phrase, index) => (
            <li className="text-xl whitespace-nowrap" key={index}>
              <span>{phrase}</span>
            </li>
          ))}
        </ul>
        <ul
          className="flex justify-center md:justify-start space-x-4 animate-infinite-scroll text-white"
          aria-hidden="true"
        >
          {phrases.map((phrase, index) => (
            <li className="text-xl whitespace-nowrap ml-2" key={index}>
              <span>{phrase}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
