const express = require("express");
const router = express.Router();
const db = require("../models");



router.get("/api/media", async(req, res) => {

    const data = await db.medium.findAll();

    res.json(data);
});

router.get("/api/media/:id", async(req, res) => {
    const data = await db.medium.findAll({ where: { id: req.params.id } });

    res.json(data);
});

router.post("/api/media",
    //  passport.authenticate("jwt", { session: false }),
    async(req, res) => {
        const listID = req.body.listId;
        if (!listID) {
            res.status(400).send({ error: "missing listId" });
        }
        const medium = await db.medium.create(req.body);
        const list_medium = await db.list_medium.create({ mediumId: medium.id, listId: listID });
        res.json(list_medium);
    });

router.delete("/api/media/:id", async(req, res) => {
    const data = await db.medium.destroy({ where: { id: req.params.id } });

    res.json(data);
});

module.exports = router;