import { ReactNode } from "react";

export type LoginContainerProps = {
  container: ReactNode;
};

export const Container = ({ container }: LoginContainerProps) => {
  return (
    <div className="flex flex-col justify-center items-center w-[30vw] h-[60vh] bg-text-base m-1 rounded-md">
      {container}
    </div>
  );
};
