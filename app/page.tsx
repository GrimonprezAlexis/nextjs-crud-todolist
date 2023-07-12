import React from "react";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import { getAllTodos } from "@/api/api";

export default async function Home() {
  const tasks = await getAllTodos();
  console.log(tasks);

  return (
    <main className="max-w-4xl mx-auto mt-4 p-10">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-center underline">Next TodoList</h1>
        <AddTask />
      </div>
      <TodoList tasks={tasks} />
    </main>
  );
}
