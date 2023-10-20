import { Router } from "@nurbxfit/infra";

const router = Router();

router.get("/example", (req, res, next) => {
	return res.status(200).json({
		data: "Hello everyone!",
	});
});

export const exampleRoutes = router;
