import { Input } from "../input";
import { useLogin } from "../states";
import { InputRoot } from "./input";

export type LoginInputPasswordProps = {
  classNameDiv: string;
  classNameLabel: string;
  classNameInput: string;
};

export const InputPassword = ({  classNameDiv,
  classNameLabel,
  classNameInput,}:LoginInputPasswordProps) => {
  const { password, setPassword, styleInput } = useLogin();

  return (
    <InputRoot
    classNameDiv={classNameDiv}
    classNameInput={classNameInput}
    classNameLabel={classNameLabel}
      value={password}
      type="password"
      label="Password:"
      onChange={(e) => {
        setPassword(e.target.value);
      }}
      // className={styleInput}
    />
  );
};
