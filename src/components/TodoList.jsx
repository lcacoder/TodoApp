import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
    const { todos } = props

    return (
        <ul className='main'>
            {todos.map((todo, todoIndex) => {
                return (
                    <TodoCard {...props} key={todoIndex} index={todoIndex} todo={todo}>
                        <p>  {todo.text} {todo.isCompleted ? ' - Congrats! You have finished this one.' : ''}</p>
                    </TodoCard>
                )
            })}
        </ul>
    )
}
