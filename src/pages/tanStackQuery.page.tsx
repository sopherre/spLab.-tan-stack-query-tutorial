import { AxiosError } from "axios";
import {
  Response,
  getTannerlinsleyRepository,
} from "../api/getTannerlinsleyRepository";
import { useQuery } from "@tanstack/react-query";

export const TanStackQueryPage: React.FC = () => {
  const { isLoading, error, data } = useQuery<Response, AxiosError>({
    queryKey: ["tannerlinsleyRepository"],
    queryFn: ({ signal }) => getTannerlinsleyRepository(signal),
  });

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>An error has occurred: {error.message}</p>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  );
};
