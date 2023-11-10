import { Router, socketConnectionService } from "@nurbxfit/infra";

const router = Router();
let count = 0;
router.get("/example", (req, res, next) => {
	// this will send to connected socket
	const key = String(req.query.key);
	if (key) {
		socketConnectionService.sendToMachine(key, "example", {
			count: count++,
		});
	}

	return res.status(200).json({
		data: "Hello everyone!",
		query: req.query,
	});
});

export const ExampleRoutes = router;
