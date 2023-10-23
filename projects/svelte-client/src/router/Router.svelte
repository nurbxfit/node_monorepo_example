<script lang="ts">
	import "../app.css";
	import { Router, Route, Link } from "svelte-navigator";
	import Home from "../pages/Home.svelte";
	import TrpcTest from "../pages/TrpcTest.svelte";
	import HttpTest from "../pages/HttpTest.svelte";
	export let url = "";
	console.log("Url:", url);

	const title = document.querySelector("title");
	console.log("Title:", title);
</script>

<Router {url}>
	<nav class="flex p-2 gap-1 bg-slate-800 text-white">
		<Link class="border p-2" to="/">Home</Link>
		<Link class="border p-2" to="/test-trpc">TRPC</Link>
		<Link class="border p-2" to="/test-http">HTTP</Link>
	</nav>
	<div>
		<Route path="/">
			<!-- change these components with the components you want to render  -->
			<Home />
		</Route>
		<Route path="/test-trpc">
			<TrpcTest />
		</Route>
		<Route path="/test-http">
			<HttpTest />
		</Route>
	</div>
</Router>
