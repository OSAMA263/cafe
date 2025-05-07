import { motion } from "framer-motion";
import React from "react";

export default function AnimateElement({ Y = true, i, children, ...rest }) {
  return (
    <>
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: Y ? 50 : 0 }}
          whileInView={{ opacity: 1, y: "0%" }}
          transition={{ duration: 0.5, delay: i ? 0.2 * i : 0 }}
          {...rest}
        >
          {child}
        </motion.div>
      ))}
    </>
  );
}
