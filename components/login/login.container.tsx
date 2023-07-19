import { ReactNode } from "react";
import styleLoginContainer from "../../pages/styles/login/styleLoginContainer.module.scss";

export type LoginContainerProps = {
  container: ReactNode;
};

export const Container = ({ container }: LoginContainerProps) => {
  return (
    <div
      className={styleLoginContainer.container}
    >
      {container}
    </div>
  );
};
