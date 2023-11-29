import { networkInterfaces } from "os";
import { CapacitorConfig } from "@capacitor/cli";

// first IPv4 on interface en0
const localIp = Object.entries(networkInterfaces())
  // interface is a reserved word
  .filter(([intrface]) => intrface === "en0")
  .map(
    ([_, entries]) =>
      (entries ?? [])
        .filter((entry) => entry.family === "IPv4")
        .map(({ address }) => address)[0]
  )[0];

type Config = CapacitorConfig & { entryUrl: string };
const config: Config = {
  appId: "com.example.app",
  appName: "capacitor-hello-world",
  webDir: "www",
  plugins: {
    SplashScreen: {
      launchShowDuration: 0
    }
  },
  entryUrl: `http://${localIp}:3000`,
  server: {
    cleartext: true,
    allowNavigation: [localIp]
  }
};

export default config;
