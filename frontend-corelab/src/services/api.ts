import axios from "axios";
import { Car } from "../types/Car-type";

axios.defaults.baseURL = "http://localhost:3333";
axios.defaults.headers.post["content-type"] = "aplication/json";

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
    try {
      const req = await axios.post("/car", {
        data: {
          name: newCar.name,
          year: newCar.year,
          price: newCar.price,
          brand: newCar.brand,
          color: newCar.color,
          description: newCar.description,
          license: newCar.license
        },
      });
      return req.data;
    } catch (err) {
      alert(err);
    }
  },
};
