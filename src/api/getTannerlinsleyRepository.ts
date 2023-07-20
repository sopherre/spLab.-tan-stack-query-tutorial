import axios from "axios";
import { sleep } from "../utils/sleep";

export interface Response {
  name: string;
  description: string;
  subscribers_count: number;
  stargazers_count: number;
  forks_count: number;
}

export const getTannerlinsleyRepository = async (signal?: AbortSignal) => {
  const { data } = await axios.get<Response>(
    "https://api.github.com/repos/tannerlinsley/react-query",
    { signal }
  );
  await sleep(3000);
  return data;
};
