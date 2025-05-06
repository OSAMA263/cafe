import Hero from "../components/Hero";
import MenuSection from "../components/menu/MenuSection";
import BookingSection from "../components/contact/BookingSection";
import LayoutContainer from "../components/LayoutContainer";
import Speciales from "../components/menu/Speciales"

export default function Menu() {
  const arr = Array.from({ length: 15 }, (_, i) => i + 1);

  const fourArr = () => {
    let four = [];
    for (let i = 0; i < arr.length; i += 4) {
      four.push(arr.slice(i, i + 4));
    }
    return four;
  };

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
          {fourArr().map((group, i) => (
            <div key={i} className="space-y-2">
              {group.map((item) => (
                <div key={item} className="p-4 border border-gray-300">
                  Item {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </LayoutContainer>
      {/* our specials*/}
      <Speciales/>
    </div>
  );
}
