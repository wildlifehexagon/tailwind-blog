import type { AppProps } from "next/app";
import "../styles/index.css";

export default function App({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line
  return <Component {...pageProps} />;
}
