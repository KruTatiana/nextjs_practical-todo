type NoTasksType = {
  message: string;
}

export const NoTasks = ({message}: NoTasksType) => {
  return (
    <p className="justify-self-center text-yellow-400">{message}</p>
  );
}