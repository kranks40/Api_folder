import express from "express";
import bodyParser from "body-parser"; //allows to take in incoming post request bodies
import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 5000;

// initializing the bodyParser using json as our data structure
app.use(bodyParser.json());

app.use("/users", usersRoutes);

app.get("/", (req, res) => {
  res.send("Hello from home page");
});

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
