import { useState } from "react";
import Button from "../components/Button";
import Hero from "../components/Hero";
import LayoutContainer from "../components/LayoutContainer";
import History from "../components/about/History";
import Team from "../components/about/Team";
import { AnimatePresence } from "framer-motion";
import BookingSection from "../components/contact/BookingSection";
import Speciales from "../components/menu/Speciales";
import TabSwitcher from "../components/TabSwitcher";
import FollowUs from "../components/FollowUs";

const tabs = ["history", "team"];

export default function Home() {
  const [switchTab, setSwitchTab] = useState("history");

  return (
    <div className="space-y-40">
      <Hero home className="pt-20" img="/hero-home.jpg">
        <Button variant="dark" to="/contact">
          Reserve Today
        </Button>
      </Hero>
      {/* about us tab switcher */}
      <LayoutContainer className="overflow-x-hidden">
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
      </LayoutContainer>
      {/* booking section */}
      <BookingSection />
      {/* special section */}
      <Speciales />
      {/* follow us */}
      <FollowUs />
    </div>
  );
}
