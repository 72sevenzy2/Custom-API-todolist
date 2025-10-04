import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// __dirname substitute
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "todos.json");

// Load todos
export const todoList = fs.existsSync(filePath)
  ? JSON.parse(fs.readFileSync(filePath, "utf-8"))
  : [];

// Save todos
export function saveTodos() {
  fs.writeFileSync(filePath, JSON.stringify(todoList, null, 2));
}
