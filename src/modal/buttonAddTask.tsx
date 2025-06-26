type ButtonAddTaskProps = {
  onClick: () => void;
};

export const ButtonAddTask = ({ onClick }: ButtonAddTaskProps) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-1.5 border-none rounded-full bg-[var(--color-primary)] text-[var(--color-yellowbtn-text)] text-sm"
    >
      Add Task
    </button>
  );
};
