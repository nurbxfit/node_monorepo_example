<script lang="ts">
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
	<nav>
		<Link to="/">Home</Link>
		<Link to="/test-trpc">TRPC</Link>
		<Link to="/test-http">HTTP</Link>
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
