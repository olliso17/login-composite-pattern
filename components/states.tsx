// import { atom, selector } from "recoil";
// import {
//   inputStyle,
//   inputStyleDanger,
//   inputStyleSucess,
// } from "../util/styles_var";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

// const nameInputState = atom({
//   key: "nameInputState",
//   default: "",
// });

// const passwordInputState = atom({
//   key: "passwordInputState",
//   default: "",
// });

// const charState = selector({
//   key: "charState",
//   get: ({ get }) => {
//     const nameInput = get(nameInputState);
//     return nameInput.length;
//   },
// });
// const passwordState = selector({
//   key: "passwordState",
//   get: ({ get }) => {
//     const passwordInput = get(passwordInputState);
//     if (passwordInput.length > 8) {
//       return inputStyleSucess;
//     }
//     if (passwordInput.length < 8 && passwordInput.length > 0) {
//       return inputStyleDanger;
//     }
//     return inputStyle;
//   },
// });

// export { passwordInputState, passwordState, nameInputState, charState };

type loginContextType = {
  name: string;
  email: string;
  password: string;
  setName: (value: string) => void;
  setPassword: (value: string) => void;
  setEmail: (value: string) => void;
  styleInput: string;
};

const loginContextDefaultValues: loginContextType = {
  name: "",
  email: "",
  password: "",
  setName: (value: string) => value,
  setPassword: (value: string) => value,
  setEmail: (value: string) => value,
  styleInput: "",
};

const LoginContext = createContext<loginContextType>(loginContextDefaultValues);

export function useLogin() {
  return useContext(LoginContext);
}

type Props = {
  children: ReactNode;
};

export function LoginProvider({ children }: Props) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  var styleInput = "";

  // function verify(password: string) {
  //   if (password.length == 0) {
  //     styleInput = inputStyle;
  //     return styleInput;
  //   }
  //   if (password.length > 8) {
  //     styleInput = inputStyleSucess;
  //     return styleInput;
  //   }
  //   if (password.length > 0 && password.length < 8) {
  //     styleInput = inputStyleDanger;
  //     return styleInput;
  //   }
  // }
  // // useEffect(()=>{
  // //   setStyleInput(inputStyle)
  // // }, [])
  // verify(password);

  const value = {
    name,
    setName,
    password,
    setPassword,
    email,
    setEmail,
    styleInput,
  };

  return (
    <>
      <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
    </>
  );
}
