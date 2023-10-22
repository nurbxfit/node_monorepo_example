import { initTRPC } from "@trpc/server";
import { Context } from "./context";
import { checkJWT } from "./middlewares/auth.middleware";

export const t = initTRPC.context<Context>().create();
export const trpcMiddleware = t.middleware;
export const trpcRouter = t.router;

export const trpcPublicProcedure = t.procedure;
export const trpcPrivateProcedure = t.procedure.use(trpcMiddleware(checkJWT));
