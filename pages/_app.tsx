import "./styles/globals.css";
import type { AppProps } from "next/app";
import { LoginProvider } from "../components/states";

function MyApp({ Component, pageProps }: AppProps) {
  return (
   // <RecoilRoot>
   <LoginProvider>
      <Component {...pageProps} />
   </LoginProvider>
      
    //</RecoilRoot>
  );
}

export default MyApp;
