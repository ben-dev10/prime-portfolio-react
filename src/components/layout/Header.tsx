import { Link } from "react-router-dom";
import { Layers3, Sun } from "lucide-react";
import { SheetUI } from "../ui-2/sheetui";

// Updates theme
document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("portfolio-theme") || "light";
  // remove any "dark" or "light" class before applying new theme
  document.documentElement.classList.remove("dark", "light");
  document.documentElement.classList.add(savedTheme);
});

function Logo() {
  return (
    <div className="mx-auto md:ml-0">
      {/* <img src={logo} alt="vite logo" width="" /> */}
      {/* <p className="text-accent">LOGO</p> */}
      <Layers3 size={20} className="text-accent opacity-90" />
    </div>
  );
}

function Links() {
  return (
    <div className="space-x-3 dark:text-slate-50 hidden md:block">
      <Link to={"/"} className="hover:underline">
        Home
      </Link>
      <Link to={"/about"} className="hover:underline">
        About
      </Link>
    </div>
  );
}

function ThemeToggle() {
  function handleToggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.classList.contains("light") ? "light" : "dark";

    const newTheme = currentTheme === "light" ? "dark" : "light";

    localStorage.setItem("portfolio-theme", newTheme);
    html.classList.remove(currentTheme);
    html.classList.add(newTheme);
  }

  return (
    <div className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800">
      <Sun size={18} strokeWidth={2} id="toggle" onClick={handleToggleTheme} />
    </div>
  );
}

function MenuIcon() {
  return (
    <div className="md:hidden">
      <SheetUI />
    </div>
  );
}

export default function Header() {
  return (
    <div className="header-wrapper">
      <div className="container-4xl w-full flex gap-x-3 items-center h-[26px]">
        <MenuIcon />
        <Logo />
        <Links />
        <ThemeToggle />
      </div>
    </div>
  );
}
