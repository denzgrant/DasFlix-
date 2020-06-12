const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/lists", async(req, res) => {
    const data = await db.list.findAll({ include: [db.user] });

    res.json(data);
});

router.get("/api/lists/:id", async(req, res) => {
    const data = await db.list.findAll({ where: { id: req.params.id }, include: [db.user] });

    res.json(data);
});

router.post("/api/lists",
    //  passport.authenticate("jwt", { session: false }),
    async(req, res) => {
        const data = await db.list.create(req.body);

        res.json(data);
    });

router.delete("/api/lists/:id", async(req, res) => {
    const data = await db.list.destroy({ where: { id: req.params.id } });

    res.json(data);
});

module.exports = router;