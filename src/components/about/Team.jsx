import { Link } from "react-router-dom";
import { team } from "../../data/aboutUs";
import { motion } from "framer-motion";
import { iconMap } from "../../data/icons";

export default function Team() {
  return (
    <motion.div
    initial={{ translateX: "-100%" }}
    animate={{ translateX: "0%" }}
    exit={{ translateX: "100%" }}
    transition={{ duration: 0.5 ,type: "tween"}}
      className="grid grid-cols-4 gap-10"
    >
      {team.map(({ img, name, role, media }) => (
        <div key={name} className="flex flex-col items-center gap-y-4">
          <img src={img} className="aspect-square mb-auto" alt={name} />
          <h1 className="text-dark-blue font-semibold font-serif text-xl">
            {name}
          </h1>
          <h2 className="text-gray text-sm font-semibold">{role}</h2>
          <div className="flex gap-4 items-center">
            {media.map(({ icon, link }, index) => {
              const IconComponent = iconMap[icon];
              return (
                <Link to={link} key={index}>
                  {IconComponent && (
                    <IconComponent className="text-2xl text-gray" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </motion.div>
  );
}
