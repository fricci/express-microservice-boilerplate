import express from "express";
import testRouting from "./testRouting/index.mjs";

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use("/api", testRouting);

app.get("/", async (req, res) => {
  res.contentType("json");

  const result = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("This is the result");
    }, 1000);
  });

  res.json({ message: result });
});
