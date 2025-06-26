"use client";

import { useThemeStore } from "@/store/themeStore";
import { useEffect, useState } from "react";

export const SwitchTheme = () => {
  const { theme, toggleTheme } = useThemeStore();
  const [isChecked, setIsChecked] = useState(theme === "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    setIsChecked(theme === "dark");
  }, [theme]);

  const handleChange = () => {
    toggleTheme();
  };

  return (
    <div className="fixed top-8 right-8 z-100">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
          className="sr-only peer"
        ></input>
        <div className="w-12 h-6 bg-[var(--color-toggl-bg)] peer-checked:bg-[var(--color-toggl-bg)] rounded-full peer transition-colors duration-300 ease-in-out"></div>
        <div className="absolute left-1 top-1 w-4 h-4 bg-[var(--color-toggl)] rounded-full transition-transform duration-300 ease-in-out peer-checked:translate-x-6 shadow"></div>
      </label>
    </div>
  );
};
