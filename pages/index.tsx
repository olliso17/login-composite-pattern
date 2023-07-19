import { fullScreenFlex } from "../util/styles_var";
import { Login } from "../components/login";

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
                  <Login.inputName />
                  {/* <Login.input type="email" label="Email:" /> */}
                  <Login.inputPassword />
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
