import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";
import starlightRosePine from "starlight-rose-pine";

export default defineConfig({
  integrations: [
    starlight({
      favicon: "/favicon.png",
      editLink: {
        baseUrl:
          "https://github.com/trueberryless-org/starlight-rose-pine/edit/main/docs/",
      },
      plugins: [starlightRosePine()],
      sidebar: [
        {
          label: "Start Here",
          items: ["getting-started", "configuration", "customization"],
        },
        { label: "Examples", autogenerate: { directory: "examples" } },
      ],
      social: [
        {
          href: "https://github.com/trueberryless-org/starlight-rose-pine",
          icon: "github",
          label: "GitHub",
        },
      ],
      title: "Starlight Rose Pine",
    }),
  ],
});
