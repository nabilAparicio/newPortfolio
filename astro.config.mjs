import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import paraglide from "@inlang/paraglide-astro";
import playformInline from "@playform/inline";
// import favicons from "astro-favicons";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    playformInline(),
    paraglide({
      project: "./project.inlang",
      outdir: "./src/paraglide",
    }),
    // favicons({
    //   masterPicture: "../",
    //   emitAssets: true,
    //   faviconsDarkMode: true,
    // }),
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
  },
});
