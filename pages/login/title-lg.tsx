import { titleLG } from "../../util/styles_var";

export type LoginTitleProps = {
  title: string;
};

export const TitleLg = ({ title }: LoginTitleProps) => {
  return <div className="h-[10vh] justify-center items-center"><h1 className={titleLG}>{title}</h1></div>;
};
