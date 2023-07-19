import { Login } from "../components/login";

export default function Home() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Login.root
        children={
          <>
            <Login.titleLg title="Aprendendo Composite Login" />
            <Login.container
              container={
                <>
                  <Login.titleSm title="Faça seu Cadastro abaixo" />
                  <Login.inputName />
                  <Login.inputEmail />
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
