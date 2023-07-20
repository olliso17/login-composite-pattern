import { ReactNode } from "react";
import styleLoginContainer from "../../pages/styles/login/styleLoginContainer.module.scss";

export type LoginContainerProps = {
  children: ReactNode;
};

export const Container = ({ children }: LoginContainerProps) => {
  return (
    <div
      className={styleLoginContainer.container}
    >
      {children}
    </div>
  );
};
