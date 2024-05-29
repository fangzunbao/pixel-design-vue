import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    PixelModal: typeof components.Modal;
    PixelButton: typeof components.Button;
  }
}
export { };

