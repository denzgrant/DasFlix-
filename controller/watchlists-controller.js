const app = require("../server");


app.get("/watchlists", (req, res) => {
    res.render("watchlists");
});