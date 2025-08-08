// 중괄호가 쳐져 있으면, export된 항목 중 하나만 선택하여 import
// 중괄호가 없으면 default(대표요소) 요소를 import
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import "@mdi/font/css/materialdesignicons.css";

const app = createApp(App);

app.use(vuetify);
app.use(router);
app.mount("#app");
