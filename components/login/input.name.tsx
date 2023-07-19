import { useRecoilState, useRecoilValue } from "recoil";
import { charState, nameInputState } from "../states";
import { Input } from "../input";
import { inputStyle } from "../../util/styles_var";

export const InputName = () => {
  const [name, setName] = useRecoilState(nameInputState);
  const charName = useRecoilValue(charState);

  return (
    <>
      <Input
        value={name}
        type="text"
        label="Name:"
        onChange={(e) => setName(e.target.value)}
        className={inputStyle}
      />
      <div>{charName}</div>
    </>
  );
};
