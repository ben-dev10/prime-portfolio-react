import { Link } from "react-router-dom";
import { Layers3, Sun } from "lucide-react";
// import logo from "/logo.svg";
// import Sheet from "../ui/Sheet";

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
    <div className="space-x-3 text-slate-50 hidden">
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
  // function handleBodyStylesAndSheetVisibility() {
  //   document.getElementById("sheet").classList.toggle("hidden");
  //   document.body.classList.toggle("overflow-hidden");
  // }

  return (
    <div className="md:hidden">
      <div
        id="menu-icon"
        // onClick={handleBodyStylesAndSheetVisibility}
        className="cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M3 9H10.2188"
            stroke="#94A3B8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 4.5H15"
            stroke="#94A3B8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 13.5H12.75"
            stroke="#94A3B8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {/* <Sheet /> */}
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
