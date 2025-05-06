import { NavLink } from "react-router-dom";

export default function Button({
  children,
  variant = "light",
  className = "",
  as: Tag = NavLink,
  ...rest
}) {
  return (
    <Tag
      className={
        `border-[1px] py-3 px-7 font-semibold cursor-pointer ${
          variant === "light"
            ? "text-dark-blue bg-white hover:bg-sky border-gray/15"
            : "text-white bg-dark-blue hover:bg-gray border-dark-blue"
        } ` + className
      }
      {...rest}
    >
      {children ?? "bottom text"}
    </Tag>
  );
}
