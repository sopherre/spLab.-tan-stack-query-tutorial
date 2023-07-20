import axios from "axios";

interface RequestBody {
  id: string;
  title: string;
}

interface Response {
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
