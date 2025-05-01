import { useState } from "react"

export default function TodoInput(props) {
    const { handleAddTodos, todoValue, setTodoValue } = props

    const handleAddClick = () => {
        if (!todoValue.trim()) {
            alert("Please enter a task")
            return
        }
        handleAddTodos(todoValue)
        setTodoValue('')
    }

    return (
        <header style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

            <h1>Daily To Do List</h1> 
            <input 
                value={todoValue} 
                onChange={(e) => setTodoValue(e.target.value)} 
                placeholder="Enter task..." 
            />
            <button onClick={handleAddClick}>Add task</button>
        </header>
    )
}
