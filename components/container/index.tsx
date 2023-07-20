import { ReactNode } from "react";

export type LoginContainerProps = {
  children: ReactNode;
  className: string;
};

export const Container = ({ children, className}: LoginContainerProps) => {
  return (
    <div
      className={className}
    >
      {children}
    </div>
  );
};
