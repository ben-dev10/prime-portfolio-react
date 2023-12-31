import { Link } from "react-router-dom";
import { Download, Layers3, Sun } from "lucide-react";
import { SheetUI } from "../ui-2/sheetui";
import { Button } from "../ui/button";
import cv from "../../assets/resume/resume-v1.pdf";

// Updates theme
document.addEventListener("DOMContentLoaded", function () {
  const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
  // remove any "dark" or "light" class before applying new theme
  document.documentElement.classList.remove("dark", "light");
  document.documentElement.classList.add(savedTheme);
});

function Logo() {
  return (
    <div className="mx-auto md:ml-0">
      <Link to={"/"}>
        <Layers3 size={20} className="text-accent opacity-90" />
      </Link>
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

type work = { status: "away" | "available"; className?: string };

function Availability({ className, status }: work) {
  return (
    <div className={`available-for-work flex items-center gap-1 ${className}`}>
      <div
        className={`size-[8px] rounded-[100%] ${
          status == "available" ? "bg-green-500" : "bg-red-500"
        } `}
      >
        <p
          className={`indicator size-[8px] rounded-[100%] ${
            status == "available" ? "bg-green-500" : "bg-red-500"
          }  animate-ping`}
        ></p>
      </div>
      {status == "available" ? <p>Available for work</p> : <p>Away</p>}
    </div>
  );
}

function CV() {
  return (
    <div>
      <a href={cv}>
        <Button
          variant="pill"
          size="pill"
          className="text-accent bg-accent text-white px-2 py-[2px] hover:border-green-300"
        >
          CV
          <Download size={14} className="ml-1" />
        </Button>
      </a>
    </div>
  );
}

export default function Header() {
  return (
    <div className="header-wrapper">
      <div className="container-4xl w-full h-[56px]">
        <div className="primary-nav flex gap-x-3 items-center p-2 pt-3 md:pt-4 px-4">
          <MenuIcon />
          <Logo />
          <Availability status="available" className="hidden md:flex mr-2" />
          <CV />
          <Links />
          <ThemeToggle />
        </div>
      </div>
      <div className="secondary-nav bg-slate-300/[.15] dark:bg-slate-700/[.15] md:hidden">
        <div className="wrapper container-4xl  p-2 px-4">
          <Availability status="available" />
        </div>
      </div>
    </div>
  );
}
