import { history, special_text } from "../../data/aboutUs";
import { motion } from "framer-motion";

export default function History() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="text-center space-y-20 text-pretty leading-relaxed"
    >
      {/* history */}
      <div className="grid grid-cols-3 items-center">
        {history.map(({ date, text }) => (
          <div
            key={date}
            className="border border-transparent transition-all px-10 py-7 hover:border-gray/20 text-center space-y-10"
          >
            <h1 className="font-semibold text-5xl text-dark-blue font-serif">
              {date}
            </h1>
            <p className="text-gray">{text}</p>
          </div>
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
  );
}
