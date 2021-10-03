import express from "express";
//mport dotenv from "dotenv";
//import morgan from "morgan";

const app = express();
const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}!`)
})