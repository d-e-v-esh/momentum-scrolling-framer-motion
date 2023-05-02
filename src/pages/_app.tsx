import MomentumScroll from "@/components/MomentumScroll";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MomentumScroll>
      <Component {...pageProps} />
    </MomentumScroll>
  );
}
