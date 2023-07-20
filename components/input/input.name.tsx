import { useLogin } from "../states";
import { InputRoot } from "./input";

export type LoginInputNameProps = {
  classNameDiv: string;
  classNameLabel: string;
  classNameInput: string;
};

export const InputName = ({  classNameDiv,
  classNameLabel,
  classNameInput,}:LoginInputNameProps) => {
  const { name, setName } = useLogin();

  return (
    <>
      <InputRoot
          classNameDiv={classNameDiv}
          classNameInput={classNameInput}
          classNameLabel={classNameLabel}
        value={name}
        type="text"
        label="Name:"
        onChange={(e) => setName(e.target.value)}
        // className={inputStyle}
      />
    </>
  );
};
