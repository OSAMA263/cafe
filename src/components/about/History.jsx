import { history, special_text } from "../../data/aboutUs";
import { motion } from "framer-motion";
import LayoutContainer from "../LayoutContainer";
import AnimateElement from "../AnimateElement";

export default function History() {
  return (
    <LayoutContainer className="overflow-x-hidden">
      <motion.div
        initial={{ translateX: "90%" }}
        animate={{ translateX: "0%" }}
        exit={{ translateX: "-90%" }}
        transition={{ duration: 0.5, type: "tween" }}
        className="text-center space-y-20 text-pretty leading-relaxed"
      >
        {/* history */}
        <div className="grid lg:grid-cols-3 items-center">
          {history.map(({ date, text }, i) => (
            <AnimateElement className="h-full" key={i} i={i}>
              <div className="border border-transparent hover:border-gray/30 h-full transition-all xl:px-10 px-4 py-7 text-center space-y-10">
                <h1 className="font-semibold text-5xl text-dark-blue font-serif">
                  {date}
                </h1>
                <p className="text-gray">{text}</p>
              </div>
            </AnimateElement>
          ))}
        </div>
        {/* the special talks thingy */}
        <div className="space-y-4 w-[75%] mx-auto">
          <p className="text-gray text-balance">{special_text.text}</p>
          <h1 className="text-dark-blue text-sm font-semibold font-serif">
            {special_text.founder}
          </h1>
        </div>
      </motion.div>
    </LayoutContainer>
  );
}
