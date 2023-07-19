import { atom, selector } from "recoil";
import {
  inputStyle,
  inputStyleDanger,
  inputStyleSucess,
} from "../util/styles_var";

const nameInputState = atom({
  key: "nameInputState",
  default: "",
});

const passwordInputState = atom({
  key: "passwordInputState",
  default: "",
});

const charState = selector({
  key: "charState",
  get: ({ get }) => {
    const nameInput = get(nameInputState);
    return nameInput.length;
  },
});
const passwordState = selector({
  key: "passwordState",
  get: ({ get }) => {
    const passwordInput = get(passwordInputState);
    if (passwordInput.length > 8) {
      return inputStyleSucess;
    }
    if (passwordInput.length < 8 && passwordInput.length > 0) {
      return inputStyleDanger;
    }
    return inputStyle;
  },
});

export { passwordInputState, passwordState, nameInputState, charState };
