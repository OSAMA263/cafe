import { NavLink } from "react-router-dom";
import Button from "./Button";
import NavigationLinks from "./NavigationLinks";
import LayoutContainer from "./LayoutContainer";

export default function Header() {
  return (
    <div className="border-b border-gray/15 !mb-14">
      <LayoutContainer
        as="header"
        className="flex items-center justify-between "
      >
        <NavLink className="!border-transparent" to="/">
          logo
        </NavLink>

        <NavigationLinks />

        <Button to="/contact">Book Online</Button>
      </LayoutContainer>
    </div>
  );
}
