import axios from "../axios";

const getAll = () => {
  return axios.get("/scrape");
};

const createOrUpdate = (data) => {
  return axios.post("/scrape", data);
};

const getByName = (name) => {
  return axios.get(`/scrape?name=${name}`);
};

export default { getAll, createOrUpdate, getByName };
