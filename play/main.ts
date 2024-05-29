import { createApp } from 'vue';
import App from './app.vue';
import pixelDesignVue from '@pixel-design-vue/components';

const app = createApp(App);
app.use(pixelDesignVue);
app.mount('#app');
