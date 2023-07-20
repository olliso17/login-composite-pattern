import { Login } from "../components/login";
import styleLoginRoot from "pages/styles/login/styleLoginRoot.module.scss";
import styleInput from "pages/styles/input/styleInput.module.scss";
import styleLoginContainer from "pages/styles/login/styleLoginContainer.module.scss";
import styleLoginPage from "pages/styles/login/styleLoginPage.module.scss";

export default function Home() {
  return (
    <Login.page className={styleLoginPage.divPage}
    >
      <Login.root className={styleLoginRoot.root}>
        <Login.titleLg title="Aprendendo Composite Login" />
        <Login.container className={styleLoginContainer.container}>
          <Login.titleSm title="Faça seu Cadastro abaixo" />
          <Login.inputName classNameDiv={styleInput.divInput} classNameInput={styleInput.divInput__input} classNameLabel={styleInput.divInput__label}/>
          <Login.inputEmail classNameDiv={styleInput.divInput} classNameInput={styleInput.divInput__input} classNameLabel={styleInput.divInput__label}/>
          <Login.inputPassword classNameDiv={styleInput.divInput} classNameInput={styleInput.divInput__input} classNameLabel={styleInput.divInput__label} />
        </Login.container>
        <Login.button />
      </Login.root>
    </Login.page>
  );
}
