import { Link } from "react-router-dom";
import { team } from "../../data/aboutUs";
import { motion } from "framer-motion";

export default function Team() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex justify-between gap-x-3 flex-wrap"
    >
      {team.map(({ img, name, role, media }) => (
        <div key={name} className="flex flex-col items-center gap-y-4">
          <img src="" className="aspect-square mb-auto" alt={name} />
          <h1 className="text-dark-blue font-semibold font-serif text-xl">
            {name}
          </h1>
          <h2 className="text-gray text-sm font-semibold">{role}</h2>
          <div className="flex gap-4 items-center">
            {media.map(({ icon, link }) => (
              <Link to={link}>{icon}</Link>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
}
