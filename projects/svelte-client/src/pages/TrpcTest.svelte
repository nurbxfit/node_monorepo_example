<script lang="ts">
	import { trpc } from "../lib/clients/trpc.client";

	let result = "";
	async function testTRPC() {
		result = await trpc.greet.query({});
	}
</script>

<main class="p-2">
	<div>
		<p>Example</p>
	</div>
	<button class="border p-2 bg-slate-400 shadow-sm" on:click={testTRPC}
		>test trpc</button
	>

	<p>Result:</p>
	<pre>
  {JSON.stringify(result, null, 4)}
</pre>
</main>

<style>
</style>
