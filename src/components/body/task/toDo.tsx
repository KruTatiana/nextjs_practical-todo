'use client';

import { useTodoStore } from "@/store/useTodoStore";

import { Checkbox } from "./Checkbox";
import { ButtonDelete } from "./ButtonDelete";
import { NoTasks } from "./noTasks";

export const ToDo = () => {
  const todos = useTodoStore(state => state.todos);
  const toggleChecked = useTodoStore(state => state.toggleChecked);
  const removeTodo = useTodoStore(state => state.removeTodo);

  const activeTodos = todos.filter((todo) => !todo.checked);

  return (
    <>
    <h2 className="self-start text-xl">New tasks</h2>
      <ul>
        {activeTodos.length > 0 ? (
          activeTodos.map((todo) => (
            <li key={todo.id} className="flex flex-row space-x-4">
              <label className="flex flex-row space-x-4">
                <Checkbox 
                  checked={todo.checked} 
                  onChange={() => toggleChecked(todo.id)}
                  />
                  <div>
                    <h3>{todo.title}</h3>
                    <p>{todo.description}</p>
                  </div>
              </label>
              <ButtonDelete onClick={() => removeTodo(todo.id)} />
            </li>
          ))
        ):(
          <NoTasks message={'No new tasks'}/>
        )}
      </ul>
    </>
  )
}