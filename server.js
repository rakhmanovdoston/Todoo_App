import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const userCredentials = {
  userName: "John",
  password: "123",
};

app.post("/login", (req, res) => {
  if (
    req.body.userName === userCredentials.userName &&
    req.body.password === userCredentials.password
  ) {
    const token =
      userCredentials.userName + Date.now() + userCredentials.password;

    res.status(200).send({
      userName: userCredentials.userName,
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      token,
    });
  } else {
    res.status(401).send("Invalid credentials");
  }
});

app.listen(8080, () => console.log("Server is live on port:8080"));