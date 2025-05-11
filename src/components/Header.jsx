import { useLocation } from "react-router-dom";
import Button from "./Button";
import NavigationLinks from "./NavigationLinks";
import LayoutContainer from "./LayoutContainer";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  // close sidebar navigatoin on route change
  useEffect(() => {
    setIsOpen(false);
    window.scrollTo({ top: 0 });
  }, [pathname]);

  // disable scroll when sidebar is open
  useEffect(() => {
    if (isOpen ) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen, ]);

  return (
    <div className="border-b border-gray/15 !mb-14 max-md:py-4">
      <LayoutContainer
        as="header"
        className="flex items-center justify-between"
      >
        <Logo />

        {/* large screens navbar */}
        <NavigationLinks className="max-md:hidden" />
        <Button to="/contact" className="max-md:hidden">
          Book Online
        </Button>

        {/* small screens navbar */}
        <Sidebar {...{ isOpen }} />

        {/* sidebar toggler */}
        <button
          className="relative z-[42091169] md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <TogglerIcon {...{ isOpen }} />
        </button>
      </LayoutContainer>
    </div>
  );
}

const TogglerIcon = ({ isOpen }) => {
  return (
    <div className="flex flex-col gap-2 *:transition-all *:bg-black *:h-[2px] *:w-10 *:rounded-full *:ms-auto *:duration-500">
      <span></span>
      <span className={isOpen ? "!w-1/2" : "w-10"}></span>
      <span className={isOpen ? "!w-[80%]" : "w-10"}></span>
    </div>
  );
};
