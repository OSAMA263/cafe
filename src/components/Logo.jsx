import { NavLink } from "react-router-dom";

export default function Logo({ className = "" }) {
  return (
    <NavLink to="/" className={"font-bold text-dark-blue " + className}>
      Logo
    </NavLink>
  );
}
