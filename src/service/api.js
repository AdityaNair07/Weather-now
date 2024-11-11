import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URL;

const apiKey = import.meta.env.VITE_API_KEY;

export const getData = async (city) => {
  try {
    const res = await axios.get(`${baseURL}?key=${apiKey}&q=${city}`);
    return res.data;
  } catch (error) {
    console.log("Error fetching data: ", error);
  }
};
