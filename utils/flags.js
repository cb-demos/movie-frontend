import { Flag, Rox } from "rox-ssr";

export const flags = {
  fancySignup: new Flag(false),
};

const configurationFetchedHandler = (fetcherResults) => {};

export const initRollout = async () => {
  const options = {
    configurationFetchedHandler,
  };

  Rox.register("frontend", flags);
  await Rox.setup(process.env.NEXT_PUBLIC_FM_KEY, options);
};
