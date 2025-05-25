'use client';

import { useTodoStore } from "@/store/useTodoStore";

import { Checkbox } from "./Checkbox";
import { ButtonDelete } from "./ButtonDelete";
import { NoTasks } from "./noTasks";

export const Done = () => {
  const todos = useTodoStore(state => state.todos);
  const toggleChecked = useTodoStore(state => state.toggleChecked);
  const removeTodo = useTodoStore(state => state.removeTodo);

  const doneTodos = todos.filter((todo) => todo.checked);
  
  return (
    <>
    <h2 className="self-start text-xl">Completed tasks</h2>
      <ul className="self-start">
        {doneTodos.length > 0 ? (
          doneTodos.map(todo => (
            <li key={todo.id} className="flex flex-row space-x-4 self-start">
              <label className="flex flex-row space-x-4 auto-rows-max">
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
          <NoTasks message={'No completed tasks'}/>
        )}
      </ul>
    </>
  )
}