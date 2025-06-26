import { create } from "zustand";
import { persist } from "zustand/middleware";

type Todo = {
  id: string;
  title: string;
  description: string;
  taskDate: string;
  taskTime: string;
  checked: boolean;
};

type TodoStore = {
  todos: Todo[];
  addTodo: (
    title: string,
    description: string,
    taskDate: string,
    taskTime: string
  ) => void;
  toggleChecked: (id: string) => void;
  removeTodo: (id: string) => void;
};

export const useTodoStore = create<TodoStore>()(
  persist(
    (set, get) => ({
      todos: [],
      addTodo: (title, description, taskDate, taskTime) => {
        const newTodo: Todo = {
          id: crypto.randomUUID(),
          title,
          description,
          taskDate,
          taskTime,
          checked: false,
        };
        console.log("Добавляю задачу:", newTodo);
        const current = get().todos;
        set({
          todos: [...current, newTodo],
        });
      },
      toggleChecked: (id) => {
        const current = get().todos;
        const updated = current.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        );
        set({ todos: updated });
      },
      removeTodo: (id) => {
        const current = get().todos;
        const filtered = current.filter((todo) => todo.id !== id);
        set({ todos: filtered });
      },
    }),
    {
      name: "todo-storage",
    }
  )
);
