export default function LayoutContainer(props) {
  const { children, className = "", as: Tag = "div", ...rest } = props;

  return (
    <Tag
      className={
        "xl:w-[65%] md:w-[80%] sm:w-[90%] w-[95%] mx-auto " + className
      }
      {...rest}
    >
      {children}
    </Tag>
  );
}
