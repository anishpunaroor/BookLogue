import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import path from "path";

import connectDB from "./db";
import { errorHandler, notFound } from "./middleware/error";

// Import routes
import productRoutes from "./routes/product";
import userRoutes from "./routes/user";
import orderRoutes from "./routes/order";
import paymentRoutes from "./routes/payment";
import uploadRoutes from "./routes/upload";

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Use routes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/upload", uploadRoutes);

// Check if app is ready to be deployed in production mode
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}!`);
});
