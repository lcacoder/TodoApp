import React from 'react'

export default function TodoCard(props) {
    const { children, handleDeleteTodo, index, handleEditTodo, handleTickWhenFinish, todo } = props
    return (
        <li className='todoItem'>
            {children}
            <div className='actionsContainer'>
                {!todo.isCompleted && (
                    <>
                     <button onClick={() => handleEditTodo(index)}>
                            <i className="fa-solid fa-pen-to-square fa-2x"></i>
                        </button>
                        <button onClick={() => handleDeleteTodo(index)}>
                            <i className="fa-regular fa-trash-can fa-2x"></i>
                        </button>
                    </>
                )}
                <button onClick={() => handleTickWhenFinish(index)}>
                    <i
                        className="fa-regular fa-circle-check fa-2x"
                        style={{ color: todo.isCompleted ? 'green' : 'black' }}
                    ></i>
                </button>
            </div>
        </li>
    )
}
