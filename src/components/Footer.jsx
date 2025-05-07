import { iconMap } from "../data/icons";
import AnimateElement from "./AnimateElement";
import LayoutContainer from "./LayoutContainer";
import Logo from "./Logo";
import NavigationLinks from "./NavigationLinks";

const informations = [
  {
    title: "Contact",
    info1: "1234 Main St, City, State, Zip",
    info2: "(123) 456-7890",
  },
  {
    title: "Working Time",
    info1: "Monday - Friday: 07:00 - 12:00",
    info2: "Saturday - Sunday: 12:00 - 21:00",
  },
];

export default function Footer() {
  return (
    <AnimateElement Y={false}>
      <LayoutContainer
        as="footer"
        className="mt-32 flex flex-col items-center gap-16 pb-8"
      >
        <Logo />
        {/* navlinks */}
        <NavigationLinks />
        {/* locations & working time */}
        <div className="flex justify-between items-center w-full">
          {informations.map((info) => (
            <Contact_WorkingTime key={info.title} {...info} />
          ))}
        </div>
        {/* medias */}
        <div className="flex items-center gap-4">
          {Object.keys(iconMap).map((key, i) => {
            const Icon = iconMap[key];
            return (
              <Icon
                key={i}
                className="transition-all cursor-pointer text-white bg-gray hover:bg-dark-blue text-4xl p-2"
              />
            );
          })}
        </div>
      </LayoutContainer>
    </AnimateElement>
  );
}

const Contact_WorkingTime = ({ title, info1, info2 }) => {
  return (
    <div className="flex flex-col items-center text-center gap-6">
      <h1 className="tracking-widest font-semibold font-serif text-dark-blue text-2xl">
        {title}
      </h1>
      <p className="text-gray">{info1}</p>
      <p className="text-gray">{info2}</p>
    </div>
  );
};
