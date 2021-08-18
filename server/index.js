const express = require("express");
const cors = require("cors");
const controller = require("./controller")

const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", controller.politeStatement)

app.get("/api/fortune", controller.fortuneTeller)

app.get("/api/inspiration", controller.pickEmUp)

app.get("/api/pick", controller.sweetQuotes)

app.post("/api/pick", controller.submitQuote)


app.listen(4000, () => console.log("Server running on 4000"));






  