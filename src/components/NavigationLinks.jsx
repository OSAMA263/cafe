import { NavLink } from "react-router-dom";
import { navLinks } from "../data/navLinks";

export default function NavigationLinks() {
  return (
    <nav>
      <ul className="flex items-center gap-4">
        {navLinks.map(({ name, href }) => (
          <li key={name}>
            <NavLink
              className={({ isActive }) =>
                `py-12 px-8 font-semibold inline-block border-b text-gray/50 ${
                  isActive
                    ? "border-peach !text-dark-blue"
                    : "border-transparent hover:border-dark-blue hover:text-dark-blue"
                }`
              }
              to={href}
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
