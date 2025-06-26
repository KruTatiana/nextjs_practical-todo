"use client";

import { useTodoStore } from "@/store/useTodoStore";

import { Checkbox } from "./Checkbox";
import { ButtonDelete } from "./ButtonDelete";
import { NoTasks } from "./noTasks";

export const Done = () => {
  const todos = useTodoStore((state) => state.todos);
  const toggleChecked = useTodoStore((state) => state.toggleChecked);
  const removeTodo = useTodoStore((state) => state.removeTodo);

  const doneTodos = todos.filter((todo) => todo.checked);

  return (
    <>
      <h2 className="self-start text-xl mb-2">Completed tasks</h2>
      <ul className="mb-4">
        {doneTodos.length > 0 ? (
          doneTodos.map((todo) => (
            <li key={todo.id} className="flex flex-row w-full pt-2">
              <label className="flex flex-row w-6">
                <Checkbox
                  checked={todo.checked}
                  onChange={() => toggleChecked(todo.id)}
                />
              </label>
              <div className="mx-4 grow flex flex-col justify-start">
                <h3 className="text-lg">{todo.title}</h3>
                <p className="text-sm auto-rows-max">{todo.description}</p>
                <p>
                  <span className="text-xs">{todo.taskDate}</span>
                  <span className="pl-3 text-xs">{todo.taskTime}</span>
                </p>
              </div>
              <ButtonDelete onClick={() => removeTodo(todo.id)} />
            </li>
          ))
        ) : (
          <NoTasks message={"No completed tasks"} />
        )}
      </ul>
    </>
  );
};
