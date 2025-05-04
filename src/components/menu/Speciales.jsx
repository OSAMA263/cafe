import { useState } from "react";
import Hero from "../Hero";
import LayoutContainer from "../LayoutContainer";
import TabSwitcher from "../TabSwitcher";
import { AnimatePresence } from "framer-motion";
import { tabs_content } from "../../data/menuTabs";
import { motion } from "framer-motion";

const tabs = ["lunch", "dinner"];

export default function Speciales() {
  const [switchTab, setSwitchTab] = useState("lunch");

  return (
    <LayoutContainer className="space-y-10">
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
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="grid grid-cols-2 gap-x-10 items-center"
    >
      {/* <img src="" alt="img" /> */}
      <h1>{content.text}</h1>
      <button>take us to menu page</button>
    </motion.div>
  );
};
