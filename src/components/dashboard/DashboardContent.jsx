import {
  AccordionPanel,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
} from "@chakra-ui/react";
import TableData from "./TableData";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../api/getDashboardData";
import Modal from "./Modal";

const accordionItems = [
  { dataId: "team", text: "the team" },
  { dataId: "lunch", text: "lunch menu" },
  { dataId: "dinner", text: "dinner menu" },
  { dataId: "tea_coffee", text: "tea & coffee" },
];

export default function DashboardContent() {
  const { team, tea_coffee, dinner, lunch } = useSelector(
    (state) => state.data
  );

  const dispatch = useDispatch();

  // fetch and get the data fnc
  const handleFetchData = (dataId) => {
    const data = { team, tea_coffee, dinner, lunch };
    // to prevent re-fetching the data if its already fetched
    if (!data[dataId].length) {
      dispatch(fetchData({ dataId }));
    }
  };


  return (
    <div className="w-full gap-20 flex flex-col items-center">
      <h1 className="w-fit !text-4xl !font-bold !text-dark-blue !border-b border-black">
        Dashboard
      </h1>
      <Modal/>
      <Accordion className="w-full" allowMultiple>
        {accordionItems.map(({ text, dataId }) => (
          <AccordionItem
            border={0}
            className="!border-b !border-white"
            onClick={() => handleFetchData(dataId)}
            key={text}
          >
            <h2>
              <AccordionButton
                py={6}
                px={50}
                _hover={{ bg: "gray", color: "white" }}
                _expanded={{ bg: "#1c1c1c", color: "white" }}
                bg="#525252"
                color="white"
                justifyContent={"space-between"}
              >
                <span className="capitalize text-xl font-bold">{text}</span>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className="!bg-gray/10" border={0} pb={4}>
              <TableData dataId={dataId} />
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
