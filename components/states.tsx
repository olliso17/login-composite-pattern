// import { atom, selector } from "recoil";
// import {
//   inputStyle,
//   inputStyleDanger,
//   inputStyleSucess,
// } from "../util/styles_var";

import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useEffect, useState } from "react"
import { inputStyle, inputStyleDanger, inputStyleSucess } from "../util/styles_var"

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
  name: string,
  email: string,
  password: string
  setName: (value: string) => void
  setPassword: (value: string) => void
  setEmail: (value: string) => void
  styleInput: string

}

const loginContextDefaultValues: loginContextType = {
  name: "",
  email: "",
  password: "",
  setName: (value: string) => value,
  setPassword: (value: string) => value,
  setEmail: (value: string) => value,
  styleInput: ""


};

const LoginContext = createContext<loginContextType>(loginContextDefaultValues)

export function useLogin() {
  return useContext(LoginContext);
}

type Props = {
  children: ReactNode
}

export function LoginProvider({ children }: Props) {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [styleInput, setStyleInput] = useState(inputStyle)

  // function verify(password: string) {
  //   if (password.length > 8) {
  //     return setStyleInput(inputStyleSucess)
  //   }
  //   if (password.length > 0 && password.length < 8) {
  //     console.log('n foi')
  //     return setStyleInput(inputStyleDanger)
  //   }

  // }
  // useEffect(()=>{
  //   setStyleInput(inputStyle)
  // }, [])
  // verify(password)

  const value = {
    name, setName,
    password, setPassword,
    email, setEmail,
    styleInput
  }

  return (
    <>
      <LoginContext.Provider value={value}>
        {children}
      </LoginContext.Provider>
    </>
  )
}