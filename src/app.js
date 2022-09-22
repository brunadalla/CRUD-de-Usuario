import express from "express";
import "dotenv/config";

import userRouter from "./routes/users.routes" 

const app = express();

app.use(express.json());
app.use("/users", userRouter)

const PORT = process.env.PORT || 3000;

/* 
app.get("/", (req, res) => {
  return res.status(200).json({
    message: "está funcionando",
  });
}); 
*/

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});

export default app;
