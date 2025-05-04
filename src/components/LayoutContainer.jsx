export default function LayoutContainer(props) {
  const { children, className = "", as: Tag = "div" } = props;

  return (
    <Tag className={"w-[65%] mx-auto " + className}> {children}</Tag>
  );
}
