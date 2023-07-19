import { ReactNode } from "react";
import styleLoginRoot from "../../pages/styles/login/styleLoginRoot.module.scss";
export type LoginRootProps = {
  children: ReactNode;
};

export const Root = ({ children }: LoginRootProps) => {
  return <div className={styleLoginRoot.root}>{children}</div>;
};
