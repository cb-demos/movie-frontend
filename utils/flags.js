import { Flag, Rox } from "rox-ssr";

const flags = {
  enableTutorial: new Flag(false),
};

export const initRollout = async () => {
  const options = {};

  Rox.register("test", flags);
  await Rox.setup(process.env.NEXT_PUBLIC_FM_KEY, options);
};

if (Rox.flags.length > 0) {
  initRollout().then(() => {
    console.log("Done loading CloudBees Feature Management");
  });
}
