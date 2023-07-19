import { Input } from "../input";
import { useLogin } from "../states";

export type LoginInputPasswordProps = {
  className: string;
};

export const InputPassword = () => {
  const { password, setPassword, styleInput } = useLogin();

  return (
    <Input
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
