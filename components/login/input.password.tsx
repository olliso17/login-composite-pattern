import { passwordInputState, passwordState } from "../states";
import { useRecoilState, useRecoilValue } from "recoil";
import { Input } from "../input";

export type LoginInputPasswordProps = {
  className: string;
};

export const InputPassword = () => {
  const [password, setPassword] = useRecoilState(passwordInputState);
  const passwoState = useRecoilValue(passwordState);

  return (
    <Input
      value={password}
      type="password"
      label="Password:"
      onChange={(e) => {
        setPassword(e.target.value);
      }}
      className={passwoState}
    />
  );
};
