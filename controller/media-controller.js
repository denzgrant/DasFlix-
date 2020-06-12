const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/medias", async(req, res) => {
    const data = await db.media.findAll({ include: [db.user] });

    res.json(data);
});

router.get("/api/medias/:id", async(req, res) => {
    const data = await db.media.findAll({ where: { id: req.params.id }, include: [db.user] });

    res.json(data);
});

router.post("/api/medias",
    //  passport.authenticate("jwt", { session: false }),
    async(req, res) => {
        const data = await db.media.create(req.body);

        res.json(data);
    });

router.delete("/api/medias/:id", async(req, res) => {
    const data = await db.media.destroy({ where: { id: req.params.id } });

    res.json(data);
});

module.exports = router;