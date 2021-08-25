import axios from "axios";

/**
 * Connects to the api
 */
export default axios.create({
  baseURL: "http://scrape.com/api",
  headers: { "Content-type": "application/json" },
});
