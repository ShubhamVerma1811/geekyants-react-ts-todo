import React, { useState } from 'react'
import id from 'shortid'

type Todo = {
  name: string
  id: string | number
}

const Todo = () => {
  const [todo, setTodo] = useState('')

  const [todos, setTodos] = useState<Array<Todo>>([
    {
      id: 1,
      name: 'Eat',
    },
    {
      id: 2,
      name: 'Cook',
    },
  ])

  const handleTodo = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault()

    setTodos(prev => [
      ...prev,
      {
        name: todo,
        id: id.generate(), // generates random id for our todo
      },
    ])
    setTodo('')
  }

  const handleTodoDelete = (todo_id: string | number) => {
    setTodos(todos.filter(todo => todo.id !== todo_id))
  }

  return (
    <div>
      <h1 className="text-2xl text-center py-5">This is the TODO component</h1>
      <div className="w-full">
        <form onSubmit={handleTodo}>
          <input
            className="w-full py-3"
            type="text"
            name="Todo"
            id="todo"
            value={todo}
            placeholder="Enter TODO"
            onChange={e => setTodo(e.target.value)}
            required
          />
          <button
            className="border-2 border-red-300 px-2 py-1 text-red-300 hover:text-white hover:bg-red-300 font-bold w-full"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="py-2">
        {todos.map(todo => {
          return (
            <div key={todo.id} className="flex flex-wrap justify-between py-2">
              <li>{todo.name}</li>
              <span className="ml-4 p-1 rounded bg-pink-300 cursor-pointer" onClick={() => handleTodoDelete(todo.id)}>
                Delete Todo
              </span>
            </div>
          )
        })}
      </div>
      <h2 className="text-2xl text-center py-5">Made by Shubham Verma</h2>
    </div>
  )
}

export default Todo
