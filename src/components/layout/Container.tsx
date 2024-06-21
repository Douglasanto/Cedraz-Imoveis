import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className }: Props) {
  const defaultClass = "w-full max-w-[1246px] px-4 mx-auto";
  const combinedClass = twMerge(defaultClass, className);
  return <div className={combinedClass}>{children}</div>;
}
