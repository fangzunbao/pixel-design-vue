import { defineComponent } from 'vue';
export default defineComponent({
  name: 'pixel-button',
  setup(props, ctx) {
    return () => <button>按钮</button>;
  }
});
