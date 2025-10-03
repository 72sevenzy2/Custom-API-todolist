import type { JSX } from "react";
import React, { useState } from "react";

interface Todo {
    title: string;
    id: number
}


function Content(): JSX.Element {
    const [todos, settodos] = useState<Todo[]>([]);
    const [int, args] = useState<string>("");

    const submitconfig = (e: React.FormEvent) => {
        e.preventDefault();

        if (!int.trim()) {
            return undefined;
        }

        const newTodo: Todo = {
            title: int,
            id: Date.now()
        }

        try {
            settodos([...todos, newTodo]);
        } catch (e) {
            console.log(e);
        }

        args("");
    }

    return (
        <div className="container">
            <form onSubmit={submitconfig}>
                <input type="text" placeholder="Enter todolist" value={int}
                    onChange={(e) => args(e.target.value)} />
                <button type="submit">Add todos</button>
            </form>

            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Content;