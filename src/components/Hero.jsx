export default function Hero(props) {
  const {
    home = false,
    title = "title",
    img,
    children,
    className = "",
  } = props;

  return (
    <div
      className={
        "flex flex-col items-center justify-center gap-y-7 " + className
      }
    >
      <h2 className="tracking-widest font-semibold text-gray">
        QUALITY AND TRADITION
      </h2>
      <h1 className="text-dark-blue text-7xl uppercase font-serif">
        {home ? (
          <>
            testy <span className="text-peach">&</span> fresh
          </>
        ) : (
          title
        )}
      </h1>
      {children}
      {img && <img src={img} alt="hero image" className="object-cover" />}
    </div>
  );
}
