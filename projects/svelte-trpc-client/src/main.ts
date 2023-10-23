import "./app.css";
import App from "./App.svelte";
import Router from "./router";

// const app = new App({
//   target: document.getElementById('app'),
// })

const app = new Router({
	target: document.getElementById("app"),
});
export default app;
