import { ReactNode } from "react";
import { passwordInputState } from "../states";
import { useRecoilState } from "recoil";
import { inputStyle } from "../../util/styles_var";

export type LoginInputPasswordProps = {
  label: string;
  className: string;
};

export const InputPassword = ({
  label,
  className,
}: LoginInputPasswordProps) => {
  const [password, setPassword] = useRecoilState(passwordInputState);
  return (
    <div className="flex flex-col">
      <label className="text-xs" htmlFor="">
        {label}
      </label>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        className={className}
      />
    </div>
  );
};
