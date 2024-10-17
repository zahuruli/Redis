const router = require("express").Router();
const redisTestController = require("../controllers/testController");

router.get("/redis", redisTestController);

module.exports = router;
