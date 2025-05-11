import LayoutContainer from "../LayoutContainer";
import Button from "../Button";
import AnimateElement from "../AnimateElement";
import { useEffect, useState } from "react";
import { getData } from "../../hooks/getData";

export default function MenuSection({ menu = "lunch" }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData({ dataId: menu });
      setData(result);
    };
    fetchData();
  }, [menu]);

  return (
    <LayoutContainer className="flex gap-10 items-center ">
      <AnimateElement className="max-lg:hidden" i={1}>
        <img
          src={menu === "lunch" ? "/lunch-menu.jpg" : "/dinner-menu.jpg"}
          alt={menu}
        />
      </AnimateElement>
      {/*----- */}
      <AnimateElement className="flex-1" i={2}>
        <div className="space-y-10">
          {/* what meanu is it */}
          <h1 className="capitalize text-2xl font-semibold text-dark-blue border-b w-fit border-peach py-4">
            {menu} menu
          </h1>
          {/* {/* /* the menu and the ingredients*/  }
                <div className="space-y-4 mb-20">
                {data.map(({ name, price, ingredients }) => (
                  <div className="flex justify-between items-center" key={name}>
                  <div className="space-y-4">
                    <h1 className="text-dark-blue text-xl font-semibold">
                    {name}
                    </h1>
                    <p className="text-gray">
                    ({ingredients.split(",").map((item) => item.trim()).join(", ")})
                    </p>
                  </div>
                  {/* price */}
                <h1 className="font-semibold text-dark-blue text-lg">
                  {price}$
                </h1>
              </div>
            ))}
          </div>
          {/* navigation link button */}
          <Button to={menu === "lunch" ? "/about" : "/contact"} variant="dark">
            {menu === "lunch" ? "About our Resturant" : "Make a Reservation"}
          </Button>
        </div>
      </AnimateElement>
    </LayoutContainer>
  );
}
