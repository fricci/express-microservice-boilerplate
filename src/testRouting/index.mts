import express from "express";

const router = express.Router();

router.post("/sayHello/:name", (req, res) => {
  const name = req.params.name;

  res.sendStatus(200).json({ message: name });
});

export default router;
