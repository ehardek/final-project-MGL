const router = require("express").Router();
const gameRoutes = require("./games");
const userRoutes = require("./users")

router.use("/users", userRoutes);
router.use("/games", gameRoutes);

module.exports = router;