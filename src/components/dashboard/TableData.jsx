import {
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";
import { deleteItem } from "../../api/getDashboardData";
import { getData } from "../../hooks/getData";
import { useContext } from "react";
import AppContext from "../../state/dashboardContext";

export default function TableData({ dataId }) {
  const { loading } = useSelector((state) => state.data);

  if (loading[dataId]) {
    return <Loader />;
  }

  return (
    <TableContainer>
      <Table variant="striped" colorScheme="blackAlpha">
        {dataId === "team" ? (
          <TeamData />
        ) : dataId === "tea_coffee" ? (
          <Tea_CoffeData />
        ) : (
          <MenuData dataId={dataId} />
        )}
      </Table>
    </TableContainer>
  );
}

const ReusableTable = ({ headers, children, dataId }) => {
  return (
    <>
      <Thead>
        <Tr>
          {headers.map((header, index) => (
            <Th key={index} style={{ opacity: 0.8 }}>
              {header}
            </Th>
          ))}
          <Th className="flex gap-4 items-center">
            Actions
            <AddNewBtn dataId={dataId} />
          </Th>
        </Tr>
      </Thead>
      <Tbody className="[&_tr]:!font-semibold">{children}</Tbody>
    </>
  );
};

const TeamData = () => {
  const { team } = useSelector((state) => state.data);
  const headers = ["Avatar", "Name", "Role"];

  return (
    <ReusableTable headers={headers} dataId="team">
      {team.map(({ id, img, name, role }) => (
        <Tr key={name}>
          <Td>
            <img src={img} className="size-16 rounded-md" alt={name} />
          </Td>
          <Td>{name}</Td>
          <Td>{role}</Td>
          <ActionsBtns data={"team"} id={id} />
        </Tr>
      ))}
    </ReusableTable>
  );
};

const Tea_CoffeData = () => {
  const { tea_coffee } = useSelector((state) => state.data);
  const headers = ["Tea & Coffee"];

  return (
    <ReusableTable headers={headers} dataId="tea_coffee">
      {tea_coffee.map(({ name, id }) => (
        <Tr key={id}>
          <Td>{name}</Td>
          <ActionsBtns data={"tea_coffee"} id={id} />
        </Tr>
      ))}
    </ReusableTable>
  );
};

const MenuData = ({ dataId }) => {
  const { lunch, dinner } = useSelector((state) => state.data);
  const data = dataId === "lunch" ? lunch : dinner;
  const headers = ["Title", "Ingredients", "Price"];

  return (
    <ReusableTable headers={headers} dataId={dataId}>
      {data.map(({ id, name, ingredients, price }) => (
        <Tr key={name}>
          <Td>{name}</Td>
          <Td>
            (
            {ingredients
              .split(",")
              .map((item) => item.trim())
              .join(", ")}
            )
          </Td>
          <Td>{price}$</Td>
          <ActionsBtns data={dataId} id={id} />
        </Tr>
      ))}
    </ReusableTable>
  );
};

const ActionsBtns = ({ data, id }) => {
  const dispatch = useDispatch();
  const { setModalOpen, setSelectedItem, setDataArr, setModalMode } =
    useContext(AppContext);

  const handleDelete = () => {
    dispatch(deleteItem({ dataId: data, id }));
  };

  const handleEdit = () => {
    const foundedItem = async () => {
      const item = await getData({ dataId: data, id: id });
      setSelectedItem(item);
      setModalMode("edit");
      setModalOpen(true);
      setDataArr(data);
    };
    foundedItem();
  };

  return (
    <Td>
      <div className="flex gap-4 ">
        <Button colorScheme="red" onClick={handleDelete}>
          delete
        </Button>
        <Button colorScheme="blue" onClick={handleEdit}>
          edit
        </Button>
      </div>
    </Td>
  );
};

const AddNewBtn = ({ dataId }) => {
  const { setModalOpen, setSelectedItem, setDataArr, setModalMode } =
    useContext(AppContext);

  const handleAddNew = () => {
    const foundedItem = async () => {
      const item = await getData({ dataId });
      setSelectedItem(item[0]);
      setModalMode("add");
      setModalOpen(true);
      setDataArr(dataId);
    };
    foundedItem();
  };
  return (
    <Button colorScheme="green" onClick={handleAddNew}>
      Add New
    </Button>
  );
};
