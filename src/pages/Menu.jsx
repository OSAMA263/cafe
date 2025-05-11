import Hero from "../components/Hero";
import MenuSection from "../components/menu/MenuSection";
import BookingSection from "../components/contact/BookingSection";
import LayoutContainer from "../components/LayoutContainer";
import Speciales from "../components/menu/Speciales";
import AnimateElement from "../components/AnimateElement";
import { useEffect, useState } from "react";
import { fourArr } from "../hooks/fourArray";
import Loader from "../components/Loader";
import { getData } from "../hooks/getData";

export default function Menu() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData({ dataId: "tea_coffee" });
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <div className="gap-between-elements">
      <LayoutContainer>
        <Hero title="menu" />
      </LayoutContainer>
      {/* lunch menu */}
      <MenuSection />
      {/* booking */}
      <BookingSection />
      {/* dinner menu */}
      <MenuSection menu="dinner" />
      {/* our tea and coffee */}
      <LayoutContainer className="space-y-10">
        <Hero title="our tea and coffee" />
        <div className="grid grid-cols-4 gap-4">
          {data.length > 0 ? (
            fourArr(data).map((group, i) => (
              <AnimateElement i={i} key={i} className="space-y-2">
                {group.map((item) => (
                  <div
                    key={item.name}
                    className="text-dark-blue p-4 border border-gray/20"
                  >
                    {item.name}
                  </div>
                ))}
              </AnimateElement>
            ))
          ) : (
            <Loader className="col-span-4" />
          )}
        </div>
      </LayoutContainer>
      {/* our specials*/}
      <Speciales />
    </div>
  );
}
