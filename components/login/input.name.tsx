import { useRecoilValue } from "recoil";
import { Input } from "../input";
import { inputStyle } from "../../util/styles_var";
import { useLogin } from "../states";

export const InputName = () => {

  // const [name, setName] = useRecoilState(nameInputState);
  const {name, setName}= useLogin();
  // const charName = useRecoilValue(charState);

  return (
    <>
      <Input
        value={name}
        type="text"
        label="Name:"
        onChange={(e) => setName(e.target.value)}
        className={inputStyle}
      />
      <div>{name}</div>
    </>
  );
};
