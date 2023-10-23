// this is broken, I am not sure the proper ways to import it, without causing error in vite
// import { router } from "apiv2";
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";

// export const trpcClient = createT
export const trpc = createTRPCProxyClient<typeof router>({
	links: [
		httpBatchLink({
			url: "http://localhost:4444/trpc",
		}),
	],
});
