import { useRecoilValue } from "recoil";
import { charState, passwordState } from "../components/states";
import { fullScreenFlex, titleLG, titleSm } from "../util/styles_var";
import { Login } from "./login";

export default function Home() {
  const charName = useRecoilValue(charState);
  const passwoState = useRecoilValue(passwordState);
  return (
    <div className={fullScreenFlex}>
      <Login.root
        children={
          <>
            <Login.titleLg title="Aprendendo Composite Login" />
            <Login.container
              container={
                <>
                  <Login.titleSm title="Faça seu Cadastro abaixo" />
                  <Login.inputName label="Name:" />
                  {/* <Login.input type="email" label="Email:" /> */}
                  <Login.inputPassword label="Password:" className={passwoState} />
                  <div>{charName}</div>

                </>
              }
            />
            <Login.button />
          </>
        }
      />
    </div>
  );
}
