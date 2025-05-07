import { useState } from "react";
import Button from "../components/Button";
import Hero from "../components/Hero";
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
    <div className="gap-between-elements">
      <Hero home img="/hero-home.jpg">
        <Button variant="dark" to="/contact">
          Reserve Today
        </Button>
      </Hero>
      {/* tab toggler content */}
        <TabSwitcher {...{ tabs, switchTab, setSwitchTab }} />
        {/* displayed tab content */}
        <AnimatePresence mode="wait">
          {switchTab === "history" ? (
            <History key="history" />
          ) : (
            <Team key="team" />
          )}
        </AnimatePresence>
      {/* booking section */}
      <BookingSection />
      {/* special section */}
      <Speciales />
    </div>
  );
}
