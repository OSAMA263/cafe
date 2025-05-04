import { useState } from "react";
import Hero from "../Hero";
import LayoutContainer from "../LayoutContainer";
import TabSwitcher from "../TabSwitcher";
import { AnimatePresence } from "framer-motion";
import { tabs_content } from "../../data/menuTabs";
import { motion } from "framer-motion";
import Button from "../Button";

const tabs = ["lunch", "dinner"];

export default function Speciales() {
  const [switchTab, setSwitchTab] = useState("lunch");

  return (
    <LayoutContainer id="Speciales" as="section" className="space-y-10">
      <Hero title="OUR SPECIALTIES" />
      <TabSwitcher {...{ tabs, switchTab, setSwitchTab }} />
      <AnimatePresence mode="wait">
        {switchTab && (
          <TabContent key={switchTab} content={tabs_content[switchTab]} />
        )}
      </AnimatePresence>
    </LayoutContainer>
  );
}

const TabContent = ({ content }) => {
  const { img, key, text } = content;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="grid grid-cols-2 gap-x-10 items-center"
    >
      <img src={img} alt="img" className={key === "lunch" ? "ms-auto" : ""} />
      <div className={`space-y-10 ${key === "lunch" ? "-order-1" : "order-2"}`}>
        <h1 className="text-gray">{text}</h1>
        <Button to="/menu" variant={key === "lunch" ? "dark" : "light"}>
          See our menu
        </Button>
      </div>
    </motion.div>
  );
};
