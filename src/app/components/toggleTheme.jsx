"use client";

import { useTheme } from "next-themes";
import { Switch , Card } from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function ToggleThemes() {
  const { theme, setTheme, systemTheme } = useTheme(); // استفاده از تم سیستم
  const [isDark, setIsDark] = useState(false);

  // تنظیم مقدار اولیه `isDark` پس از رندر کلاینت
  useEffect(() => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    setIsDark(currentTheme === "dark");
  }, [theme, systemTheme]);

  const handleTheme = () => {
    setIsDark(!isDark); // تغییر وضعیت حالت تیره
    setTheme(isDark ? "light" : "dark"); // تنظیم تم
  };

  return (
    <Card>
    <Switch
    defaultSelected
      checked={isDark}
      onChange={handleTheme}
     
    >
      {isDark ? "Dark Mode" : "Light Mode"}
    </Switch>
    </Card>
  );
}
