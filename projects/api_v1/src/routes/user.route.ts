import { GetUserRequestSchema } from "@nurbxfit/domain";
import { RequestValidatorMiddleware, Router } from "@nurbxfit/infra";
import { UserController } from "src/controllers/user.controller";

const router = Router();

router.get(
	"/",
	RequestValidatorMiddleware(GetUserRequestSchema),
	UserController.getUser
);

export const UserRoutes = router;

/**
 * TODO Controller we wrap it up like the middleware
 * so we just call RequestController(Controller.method), it will pass the body and query to the controller. then it takes
 * what ever the controller returns, and send it using res.
 * This somehow provide some abstractions to this API, without knowing the actual framework of the http infra. (not sure)
 */
