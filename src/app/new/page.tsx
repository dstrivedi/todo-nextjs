import { prisma } from '@/db';
import Link from 'next/link'
import { redirect } from 'next/navigation';
import React from 'react'

async function createTodo(data: FormData) {
    "use server";
    const title = data.get('title')?.valueOf();
    if(typeof title !== 'string' || title.length === 0) {
        throw new Error("Invalid title")
    }
    await prisma.todo.create({data: {title, complete: false}});
    redirect('/')
}


export default function New() {
    return (
        <div>
            <header className="flex justify-between items-center mb-4">
                <h1 className="text-2xl">New todo</h1>
            </header>
            <form action={createTodo} className='flex gap-2 flex-col'>
                <input type="text" name="title" className='border border-slate-300 bg-transparent rounded px-2 py-1 outline-none focus-within:border-slate-100' /> 
                <div className='flex gap-1 justify-end'>
                    <Link className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href="..">Cancel</Link>
                    <button className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" type="submit">Add</button>
                </div>
            </form>
        </div>
    )
}