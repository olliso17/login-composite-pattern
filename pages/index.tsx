import { fullScreenFlex, titleLG, titleSm } from "../util/styles_var";
import { Login } from "./login";

export default function Home() {
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
                  <Login.input type="text" label="Name:" />
                  <Login.input type="email" label="Email:" />
                  <Login.input type="password" label="Password:" />
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
