import { Container } from "../container";
import { Input } from "../input";
import { Button } from "./button";
import { TitleLg } from "./title-lg";
import { TitleSm } from "./title.sm";

export const Login = {
  page:Container,
  root: Container,
  container: Container,
  titleLg: TitleLg,
  titleSm: TitleSm,
  inputName: Input.name,
  inputEmail: Input.email,
  inputPassword: Input.password,
  button: Button,
};

//create types login, login danger, sucess ... and button ...
