import axios from "axios";

export default axios.create({
  baseURL: "http://scrape.com/api",
  headers: { "Content-type": "application/json" },
});
