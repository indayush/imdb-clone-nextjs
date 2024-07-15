"use client";

import { MdLightMode, MdDarkMode } from "react-icons/md";
import React, { useEffect } from "react";
import { useTheme } from "next-themes";

export default function DarkModeSwitch() {
  const [mounted, setMounted] = React.useState(false);

  const { theme, setTheme, systemTheme } = useTheme();
  const CurrentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div>
      {mounted &&
        (CurrentTheme === "dark" ? (
          <MdLightMode
            className="text-xl cursor-pointer hover:text-amber-500"
            onClick={() => setTheme("light")}
          />
        ) : (
          <MdDarkMode
            className="text-xl cursor-pointer hover:text-amber-500"
            onClick={() => setTheme("dark")}
          />
        ))}
    </div>
  );
}
