import type { StarlightPlugin } from "@astrojs/starlight/types";

type DarkFlavor = "main" | "moon";
type LightFlavor = "dawn";
type Accent = "love" | "gold" | "rose" | "pine" | "foam" | "iris";

interface Config {
  dark?: { flavor?: DarkFlavor; accent?: Accent };
  light?: { flavor?: LightFlavor; accent?: Accent };
}

export default function createPlugin(config?: Config): StarlightPlugin {
  const { dark, light } = config ?? {};
  return {
    name: "starlight-rose-pine",
    hooks: {
      "config:setup": ({ config, updateConfig }) => {
        updateConfig({
          customCss: [
            ...(config.customCss ?? []),
            "starlight-rose-pine/styles/shared.css",
            `starlight-rose-pine/themes/rose-pine-${dark?.flavor ?? "main"}-${dark?.accent ?? "pine"}.css`,
            `starlight-rose-pine/themes/rose-pine-${light?.flavor ?? "dawn"}-${light?.accent ?? "pine"}.css`,
          ],
        });
      },
    },
  };
}
