import DefaultTheme from "vitepress/theme";
import pixelDesignVue from 'pixel-design-vue'
export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
    app.use(pixelDesignVue);
  },
};
