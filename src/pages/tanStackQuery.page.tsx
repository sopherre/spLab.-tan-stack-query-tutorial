import { getTannerlinsley } from "../api/getTannerlinsley";
import { useQuery } from "@tanstack/react-query";

export const TanStackQueryPage: React.FC = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: getTannerlinsley,
  });

  if (isLoading || !data) return <p>Loading...</p>;

  if (error instanceof Error)
    return <p>An error has occurred: {error.message}</p>;

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
