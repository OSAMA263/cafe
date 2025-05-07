import AnimateElement from "./AnimateElement";
import { motion } from "framer-motion";

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
        "flex flex-col items-center justify-center gap-y-10 " + className
      }
    >
      <AnimateElement i={1}>
        <h2 className="tracking-widest font-semibold text-gray">
          QUALITY AND TRADITION
        </h2>
      </AnimateElement>
      <AnimateElement i={2}>
        <h1 className="text-dark-blue text-7xl uppercase font-serif">
          {home ? (
            <>
              testy <span className="text-peach">&</span> fresh
            </>
          ) : (
            title
          )}
        </h1>
      </AnimateElement>
      <AnimateElement i={3}>{children}</AnimateElement>
      {img && (
        <div className="relative w-full overflow-hidden">
          {/* hero cover */}
          <motion.div
            initial={{ height: "100%" }}
            whileInView={{ height: "0%" }}
            transition={{ duration: 1.3 ,delay: 0.6 }}
            viewport={{ once: true }}
            className="absolute z-10 w-full h-full bg-white"
          ></motion.div>
          {/* hero image */}
          <motion.img
            initial={{ scale: 1.5 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.3,delay: 0.6 }}
            viewport={{ once: true }}
            src={img}
            alt="hero image"
            className="object-cover w-full"
          />
        </div>
      )}
    </div>
  );
}
