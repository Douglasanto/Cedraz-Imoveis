import Image, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

type Props = {
  text: string;
  description: string;
  className?: string;
  src: StaticImageData;
  alt: string;
};

export function TimelineEvent({
  text,
  description,
  src,
  alt,
  className,
}: Props) {
  const defaultClass =
    "hidden md:relative md:top-[-3.8rem] md:block md:right-14";
  const combinedClass = twMerge(defaultClass, className);
  return (
    <div className="w-[280px] h-[310px] sm:w-[450px] sm:h-[250px] bg-card rounded-2xl p-2 relative hover:scale-105 transition ease-linear duration-500">
      <div className={combinedClass}>
        <div className="hidden bg-white rounded-full w-[85px] h-[85px] xl:flex xl:absolute items-center justify-center border-[3px] border-primary ">
          <Image className="w-[60px] h-[60px]" src={src} alt={alt} />
        </div>
      </div>
      <div className="w-full h-full p-3 flex flex-col gap-4 content-center items-start flex-wrap">
        <div className="mt-2 text-primary font-myriadBold font-black sm:text-2xl uppercase">
          {text}
        </div>
        <div className="mt-2 text-white text-[1.1rem]">{description}</div>
      </div>
    </div>
  );
}
