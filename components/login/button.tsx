import { titleSm } from "../../util/styles_var";

export type LoginButtonProps = {
  Button: string;
};

export const Button = () => {
  return (
    <div className="h-[10vh] justify-center items-center">
      <button className="bg-spotify-green w-[5vw] h-[5vh] rounded-md">
        salvar
      </button>
    </div>
  );
};
