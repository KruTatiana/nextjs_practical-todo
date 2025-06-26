"use client";

import { useState } from "react";
import { useTodoStore } from "@/store/useTodoStore";
import { ButtonAddTask } from "./buttonAddTask";
import { ButtonClose } from "./buttonClose";

type ModalProps = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Modal = ({ setModal }: ModalProps) => {
  const addTodo = useTodoStore((state) => state.addTodo);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = () => {
    if (!title.trim() || !description.trim()) return;
    addTodo(title, description);
    setTitle("");
    setDescription("");
    setModal(false);
  };

  return (
    <div className="absolute top-0 flex items-center justify-center w-screen h-screen z-500 bg-[var(--color-modal-bg)]">
      <div className="w-1/4 h-1/3 flex flex-col items-center gap-y-4 bg-[var(--color-card)] rounded-lg">
        <div className="w-full h-1/5 flex items-center justify-end border-b-2 border-[var(--color-second)]">
          <ButtonClose setModal={setModal} />
        </div>
        <div className="w-full h-3/5 flex flex-col gap-y-4 items-center justify-center">
          <p>New Task</p>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Task Name"
            className="w-3/4 border px-2 py-1 rounded"
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className="w-3/4 border px-2 py-1 rounded"
          />
        </div>
        <div className="w-full h-1/5 flex items-center justify-center border-t-2 border-[var(--color-second)]">
          <ButtonAddTask onClick={handleAdd} />
        </div>
      </div>
    </div>
  );
};
