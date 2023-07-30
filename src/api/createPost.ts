import axios from "axios";

export interface RequestBody {
  id: string;
  title: string;
}

export interface Response {
  id: string;
  title: string;
}

export const createPost = async (req: RequestBody) => {
  const { data } = await axios.post<Response>(
    "https://jsonplaceholder.typicode.com/posts/",
    req
  );
  return data;
};
