import { Html, Head, Main, NextScript } from "next/document";
import { getTheme } from "@/utils/processEnv";

export default function Document() {
  return (
    <Html lang="en" data-theme={getTheme()}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
