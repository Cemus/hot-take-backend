const express = require("express");
const takesRoutes = require("./routes/takes");
require("dotenv").config();
const mongoose = require("mongoose");

const port = process.env.PORT;
const app = express();

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use(express.json());

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(`Serveur lancé sur ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/takes", takesRoutes);
