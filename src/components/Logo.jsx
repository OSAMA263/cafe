import { NavLink } from "react-router-dom";

export default function Logo({ className = "" }) {
  return (
    <NavLink
      to="/"
      className={"font-bold text-dark-blue text-2xl font-serif " + className}
    >
      Cafe
    </NavLink>
  );
}
