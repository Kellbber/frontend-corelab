import axios from "axios";
import { url } from "inspector";
import { Car } from "../types/Car-type";

axios.defaults.baseURL = "http://localhost:3333";
axios.defaults.headers.post["Content-Type"] = "application/json";

export const carsApi = {
  getCars: async () => {
    try {
      const req = await axios.get("/car");
      return req.data;
    } catch (err) {
      alert(err);
    }
  },
  postCar: async (newCar: Car) => {
    console.log(newCar)
    try {
      const req = await axios.post("/car", newCar);
      return req;
    } catch (err) {
      alert(err);
    }
  },
};
