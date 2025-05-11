import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { iconMap } from "../../data/icons";
import LayoutContainer from "../LayoutContainer";
import { useEffect, useState } from "react";
import { getData } from "../../hooks/getData";
import Loader from "../Loader";

const media = [
  { icon: "facebook", link: "/" },
  { icon: "instagram", link: "/" },
  { icon: "twitter", link: "/" },
];

export default function Team() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData({ dataId: "team" });
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <LayoutContainer className="overflow-x-hidden">
      <motion.div
        initial={{ translateX: "-90%" }}
        animate={{ translateX: "0%" }}
        exit={{ translateX: "90%" }}
        transition={{ duration: 0.5, type: "tween" }}
        className="grid xl:grid-cols-4 grid-cols-2 gap-10"
      >
        {data.length > 0 ? (
          data.map(({ img, name, role }) => (
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
          ))
        ) : (
          <Loader className="col-span-4" />
        )}
      </motion.div>
    </LayoutContainer>
  );
}
