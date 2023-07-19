import { ReactNode } from "react";

export type LoginRootProps = {
  children: ReactNode;
};

export const Root = ({ children }: LoginRootProps) => {
  return (
    <div className=" w-[40vw] h-[90vh] rounded-2xl bg-[pink] flex flex-col justify-around items-center">
      {children}
    </div>
  );
};
