export default function LayoutContainer(props) {
  const { children, className = "", as: Tag = "div", ...rest } = props;

  return (
    <Tag className={"w-[65%] mx-auto " + className} {...rest}>
      {children}
    </Tag>
  );
}
