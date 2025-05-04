import { useState } from "react";
import Button from "../components/Button";
import Hero from "../components/Hero";
import LayoutContainer from "../components/LayoutContainer";
import Img from "/public/img.jpg";
import History from "../components/about/History";
import Team from "../components/about/Team";
import { AnimatePresence } from "framer-motion";
import BookingSection from "../components/contact/BookingSection";
import Speciales from "../components/menu/Speciales";
import TabSwitcher from "../components/TabSwitcher";

const tabs = ["history", "team"];

export default function Home() {
  const [switchTab, setSwitchTab] = useState("history");

  return (
    <div className="space-y-26">
      <Hero home className="pt-20" img={Img}>
        <Button variant="dark" to="/contact">
          Reserve Today
        </Button>
      </Hero>
      {/* about us tab switcher */}
      <LayoutContainer>
        {/* tab toggler content */}
        <TabSwitcher {...{ tabs, switchTab, setSwitchTab }} />
        {/* displayed tab content */}
        <AnimatePresence mode="wait">
          {switchTab === "history" ? <History /> : <Team />}
        </AnimatePresence>
      </LayoutContainer>
      {/* booking section */}
      <BookingSection />
      {/* special section */}
      <Speciales />
      {/* follow us */}
      {/* footer */}
    </div>
  );
}
