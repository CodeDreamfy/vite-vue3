import mitt from 'mitt'

/**
  User：
  import { emitter } from "@/utils/mitt";
  emitter.emit("openPanel");
  emitter.on("logoChange", key => {
    showLogo.value = key;
  });
*/
export default mitt()
