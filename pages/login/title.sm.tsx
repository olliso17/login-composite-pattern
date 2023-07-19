import { titleSm } from "../../util/styles_var";


export type LoginTitleProps = {
  title: string;
};

export const TitleSm = ({ title }: LoginTitleProps) => {
  return <div className="h-[10vh] justify-center items-center"><h1 className={titleSm}>{title}</h1></div>
};
