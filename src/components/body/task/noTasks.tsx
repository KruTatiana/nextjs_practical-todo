type NoTasksType = {
  message: string;
}

export const NoTasks = ({message}: NoTasksType) => {
  return (
    <p>{message}</p>
  );
}