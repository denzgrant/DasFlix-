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
        const providerName = req.body.provider;
        if (!providerName) {
            res.status(400).send({ error: "missing providerName" });
        }
        const provider = await db.provider.findOne({ where: { name: providerName } });
        if (!provider) {
            res.status(400).send({
                error: `couldn't find provider ${providerName}`
            });
        }
        const movie = {
            "title": req.body.title,
            "media_type": req.body.media_type,
            "external_id": req.body.external_id,
            "summary": req.body.summary,
            "icon": req.body.icon,
            "listId": req.body.listId,
            "providerId": provider.id
        };

        const medium = await db.medium.create(movie);
        const list_medium = await db.list_medium.create({ mediumId: medium.id, listId: listID });
        res.json(list_medium);
    });

router.delete("/api/media/:id", async(req, res) => {
    const data = await db.medium.destroy({ where: { id: req.params.id } });

    res.json(data);
});

module.exports = router;