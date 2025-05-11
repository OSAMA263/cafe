import { useContext, useState } from "react";
import AppContext from "../../state/dashboardContext";
import { addItem, editItem } from "../../api/getDashboardData";
import { useDispatch } from "react-redux";
import { Button } from "@chakra-ui/react";

const plaholderImg =
  "https://www.allstaffresources.com.au/wp-content/uploads/2020/11/Team-Member-Male-Placeholder.png";

export default function Modal() {
  const {
    dataArr,
    modalOpen,
    selectedItem,
    setModalOpen,
    setSelectedItem,
    setDataArr,
    modalMode,
    setModalMode,
  } = useContext(AppContext);
  const dispatch = useDispatch();
  const [newItem, setNewItem] = useState(
    dataArr === "team" ? { img: plaholderImg } : {}
  );

  // handle edit fetch
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (modalMode === "edit") {
        await dispatch(
          editItem({ dataId: dataArr, item: selectedItem })
        ).unwrap();
      } else {
        await dispatch(addItem({ dataId: dataArr, item: newItem })).unwrap();
      }
      handleModalClose();
      setNewItem(null);
    } catch (error) {
      console.error("Error during submission:", error);
    }
  };

  const handleChange = (name, val) => {
    if (modalMode === "edit") {
      setSelectedItem((prev) => ({
        ...prev,
        [name]: val,
      }));
    } else {
      setNewItem((prev) => ({
        ...prev,
        [name]: val,
        ...(dataArr === "team" && !prev.img ? { img: plaholderImg } : {}),
      }));
    }
  };

  const handleModalClose = () => {
    setModalOpen(false);
    setSelectedItem(null);
    setDataArr(null);
    setModalMode(null);
  };

  return (
    <div
      className={`fixed top-0 flex items-center justify-center left-0 bg-gray/75 w-full h-dvh transition-all duration-300 z-[6969] ${
        modalOpen ? "visible opacity-100" : "opacity-0 invisible"
      }`}
    >
      <div className="bg-white md:w-1/2 md:h-1/2 w-full flex p-20 rounded-md flex-col items-center justify-center">
        <form onSubmit={handleSubmit} className="w-full space-y-6">
          {modalOpen &&
            Object.keys(selectedItem || {})
              .filter((key) => key !== "media" && key !== "id")
              .map((key) => (
                <div key={key} className="flex flex-col ">
                  {modalMode === "edit" && <label htmlFor={key}>{key}</label>}
                  <input
                    className="!p-2 !border-black !border !placeholder-gray"
                    id={key}
                    name={key}
                    required
                    type={key === "price" ? "number" : "text"}
                    value={
                      modalMode === "edit"
                        ? selectedItem?.[key] || ""
                        : modalMode !== "edit" && key === "img"
                        ? plaholderImg
                        : modalMode !== "edit"
                        ? newItem?.[key] || ""
                        : ""
                    }
                    placeholder={
                      modalMode === "edit" ? "" : selectedItem[key] || ""
                    }
                    onChange={(e) =>
                      handleChange(e.target.name, e.target.value)
                    }
                  />
                </div>
              ))}
          <div className="flex gap-4 justify-center w-full">
            <Button colorScheme="green" type="submit">
              Submit
            </Button>
            <Button colorScheme="red" type="button" onClick={handleModalClose}>
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
