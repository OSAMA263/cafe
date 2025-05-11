import { motion } from "framer-motion";
import React from "react";

export default function AnimateElement({
  i,
  children,
  className = "",
  ...rest
}) {
  return (
    <>
      {React.Children.map(children, (child, ind) => (
        <motion.div
          key={ind}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i ? 0.2 * i : 0 }}
          viewport={{ once: true, amount: 0.5 }}
          {...rest}
          className={className}
        >
          {child}
        </motion.div>
      ))}
    </>
  );
}
