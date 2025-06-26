import { SwitchTheme } from "./SwitchTheme";

export const Header = () => {
  return (
    <header className=" w-screen py-5 flex ">
      <h1 className=" mx-auto text-5xl font-bold">
        <span className="text-[var(--color-second)]">TODO</span>
        <span className="text-[var(--color-text)]">List</span>
      </h1>
      <SwitchTheme />
    </header>
  );
};
