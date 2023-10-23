<script lang="ts">
	import { trpc } from "../lib/clients/trpc.client";

	let result = "";
	async function testTRPC() {
		result = await trpc.greet.query({});
	}
</script>

<main>
	<div>
		<p>Example</p>
	</div>
	<button on:click={testTRPC}>test trpc</button>

	<p>Result:</p>
	<pre>
  {JSON.stringify(result, null, 4)}
</pre>
</main>

<style>
</style>
