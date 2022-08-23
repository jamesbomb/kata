import axios from "axios";

export const BASE_URL = "https://jb-fake-server.herokuapp.com/";

export const fetchData = async () => {
  try {
    return await axios.get(`${BASE_URL}/data`);
  } catch (e) {
    return [];
  }
};
