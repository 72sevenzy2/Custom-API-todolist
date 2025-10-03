import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import { todoList } from "./memory.js";

const app = express();

const port = process.env.PORT || 4000;
app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173",  // allow requests from Vite dev server
    methods: ["GET", "POST"],
    credentials: true
}));

app.use(express.static("../src"));

// test request
app.get("/todos", (req, res) => {
    if (req.method === "GET") {
        res.send("hello");
    }
});

// endpoint where we will grab our todos

app.post("/api/todos", (req, res) => {
    const { title, id } = req.body;
    if (!title || !id) {
        res.status(404).send(JSON.stringify({ message: "Error: Please include a title and an ID." }));
    }
    const newTodo = { title, id };
    todoList.push(newTodo);
    res.status(200).send(newTodo);
});
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});