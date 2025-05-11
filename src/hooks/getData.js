import axios from "axios";
import { API } from "../api/APIS";

export const getData = async ({ dataId = "", id = "" }) => {
  const res = await axios.get(`${API}${dataId}/${id}`);
  return res.data;
};
