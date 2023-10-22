// import type {AppRouter} from '../../somehwerrhe'
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";

type HttpHeaders = Record<string, string>;
type TrpcClientOptions = {
	url: string;
	headers?: HttpHeaders;
};

export const createTRPCClient = (options: TrpcClientOptions, router: any) => {
	return createTRPCProxyClient<typeof router>({
		links: [
			httpBatchLink({
				url: options.url,
				headers: options.headers,
			}),
		],
	});
};
