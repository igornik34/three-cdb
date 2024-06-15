import mailruInit from "./mailruInit.js";
import onedriveInit from "./onedriveInit.js";
import yandexInit from "./yandexInit.js";

window.addEventListener("DOMContentLoaded", () => {
    yandexInit.init()
    mailruInit.init()
    onedriveInit.init()
})