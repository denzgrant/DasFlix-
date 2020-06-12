const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/providers", async(req, res) => {
    const data = await db.provider.findAll({ include: [db.medium] });

    res.json(data);
});

router.get("/api/providers/:id", async(req, res) => {
    const data = await db.provider.findAll({ where: { id: req.params.id }, include: [db.medium] });

    res.json(data);
});

router.post("/api/providers",
    //  passport.authenticate("jwt", { session: false }),
    async(req, res) => {
        const data = await db.provider.create(req.body);

        res.json(data);
    });

router.delete("/api/providers/:id", async(req, res) => {
    const data = await db.provider.destroy({ where: { id: req.params.id } });

    res.json(data);
});

module.exports = router;