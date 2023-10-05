"use client";

import React from 'react'

type TodoItemProps = {
    id: string,
    title: string,
    complete: boolean,
    toggleTodo: (id: string, complete: boolean) => void
}

export default function TodoItem({id, title, complete, toggleTodo} : TodoItemProps) {
    return (
        <div>
            <li className='flex gap-2 items-center text-3xl'>
                <input id={id} type="checkbox" className='cursor-pointer peer w-5 h-5' defaultChecked={complete} onChange={e => toggleTodo(id, e.target.checked)} />
                <label htmlFor={id} className='peer-checked:line-through peer-checked:text-slate-500'>{title}</label>
            </li>
        </div>
    )
}
