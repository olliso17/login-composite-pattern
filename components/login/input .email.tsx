import { Input } from "../input";
import { useLogin } from "../states";

export const InputEmail = () => {
  // const [name, setName] = useRecoilState(nameInputState);
  const { email, setEmail } = useLogin();
  // const charName = useRecoilValue(charState);

  return (
    <>
      <Input
        value={email}
        type="email"
        label="Email:"
        onChange={(e) => setEmail(e.target.value)}
        // className={inputStyle}
      />
    </>
  );
};
