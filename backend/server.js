import path from "path";
import express from "express"; 
import dotenv from "dotenv"; 
import colors from "colors";
import morgan from "morgan";

const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}



app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}!`.yellow
      .bold
  )
);