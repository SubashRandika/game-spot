import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3454736b5d12401fb4b9cfe8f8176f74",
  },
});
