import { prisma } from "@/db";
import Link from "next/link";
import TodoItem from "@/components/TodoItem";
import { redirect } from "next/navigation";

function getTodos() {
  return prisma.todo.findMany();
}

async function toggleTodo(id: string, complete: boolean) {
  "use server";
  await prisma.todo.update({where: {id}, data : {complete}});
  // redirect("/new");
}

export default async function Home() {
  const todos = await getTodos();
  
  return (
    <div>
      <header className="flex gap-24 items-center mb-4">
        <h1 className="text-5xl">Todos</h1>
        <Link className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href="/new">New</Link>
      </header>
      <ul className="pl-4 pt-10">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo}/>
        ))}
      </ul>
    </div>
  )
}