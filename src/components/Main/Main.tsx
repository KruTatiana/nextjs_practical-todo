import { ToDo } from "./task/toDo";
import { Done } from "./task/done";
import { AddSection } from "./add-section/AddSection";

export const Main = () => {
  return (
    <div className="w-2/4 pb-6 flex flex-col items-center justify-self-center gap-y-4 rounded-3xl bg-[var(--color-card)]">
      <AddSection />
      <div className="flex flex-col w-3/4 p-4 rounded-2xl bg-[var(--color-item)]">
        <ToDo />
        <Done />
      </div>
    </div>
  );
};
