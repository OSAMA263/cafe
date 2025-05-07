import { NavLink } from "react-router-dom";
import { navLinks } from "../data/navLinks";
import Button from "./Button";

export default function Sidebar({ isOpen }) {
  return (
    <div
      className={`md:hidden h-dvh fixed z-[6969] top-0 right-0 bg-white transition-all duration-300 overflow-hidden ${
        isOpen ? "w-full" : "w-0"
      }`}
    >
      <ul className="flex flex-col items-center justify-center h-full gap-8 text-2xl font-bold min-w-[300px]">
        {navLinks.map(({ href, name }) => (
          <li key={name}>
            <NavLink
              className={({ isActive }) => `
            ${isActive ? "text-peach" : "text-dark-blue"}`}
              to={href}
            >
              {name}
            </NavLink>
          </li>
        ))}
        <Button to="/contact" >
          Book Online
        </Button>
      </ul>
    </div>
  );
}
