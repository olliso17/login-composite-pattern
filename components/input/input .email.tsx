import { useLogin } from "../states";
import { InputRoot } from "./input";

export type LoginInputEmailProps = {
  classNameDiv: string;
  classNameLabel: string;
  classNameInput: string;
};

export const InputEmail = ({  classNameDiv,
  classNameLabel,
  classNameInput,}:LoginInputEmailProps) => {
  const { email, setEmail } = useLogin();

  return (
    <>
      <InputRoot
          classNameDiv={classNameDiv}
          classNameInput={classNameInput}
          classNameLabel={classNameLabel}
        value={email}
        type="email"
        label="Email:"
        onChange={(e) => setEmail(e.target.value)}
      />
    </>
  );
};
