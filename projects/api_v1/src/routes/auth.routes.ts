import { LoginRequestSchema, RegisterRequestSchema } from "@nurbxfit/domain";
import {
	HttpController,
	RequestValidatorMiddleware,
	Router,
} from "@nurbxfit/infra";
import { AuthController } from "src/controllers/auth.controller";

const router = Router();

router.post(
	"/register",
	RequestValidatorMiddleware(RegisterRequestSchema),
	HttpController(AuthController.register)
);
router.post(
	"/login",
	RequestValidatorMiddleware(LoginRequestSchema),
	HttpController(AuthController.login)
);

export const AuthRoutes = router;
