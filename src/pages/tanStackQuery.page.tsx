import { getTannerlinsleyRepository } from "../api/getTannerlinsleyRepository";
import { useQuery } from "@tanstack/react-query";

export const TanStackQueryPage: React.FC = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["tannerlinsleyRepository"],
    queryFn: getTannerlinsleyRepository,
  });

  if (error instanceof Error)
    return <p>An error has occurred: {error.message}</p>;

  if (isLoading || !data) return <p>Loading...</p>;

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
