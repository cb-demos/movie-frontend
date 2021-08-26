import "../styles/globals.scss";
import "../utils/flags";
import { Rox } from "rox-ssr";
import { initRollout } from "../utils/flags";

if (Rox.flags.length === 0) {
  initRollout().then(() => {
    console.log("Done loading CloudBees Feature Management");
  });
}

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
