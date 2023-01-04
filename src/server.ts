import express, { response } from "express";

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
  return response.json({ message: "hellow world" });
});

app.listen(3333, () => console.log("server is running"));
