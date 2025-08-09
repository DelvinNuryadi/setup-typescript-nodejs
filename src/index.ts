import express from "express";

const app = express();

app.get("/", (req, res, next) => {
    return res.json({ message: "API WORKING" });
});

app.listen(3000, () => {
    console.log("listening on http://localhost:3000");
});
