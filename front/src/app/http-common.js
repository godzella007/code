import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5000/api",
  //20.219.178.245
  headers: {
    "Content-type": "application/json"
  }
});
