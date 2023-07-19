import axios from "axios";

export const errorApi = async () => {
  const { data } = await axios.get("https://.example.error.com");
  return data;
};
