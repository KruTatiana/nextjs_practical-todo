
type ButtonAddTaskProps = {
  onClick:()=>void
}


export const ButtonAddTask = ({onClick}:ButtonAddTaskProps) => {
  return (
    <button onClick={onClick} className="px-4 py-1.5 border-none rounded-full bg-violet-950 text-white text-sm" >
      Add Task
    </button>
  )
}