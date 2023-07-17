import { useEffect, useState } from "react";
import { Response, getTannerlinsley } from "../api/getTannerlinsley";

export const ConventionalPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setDate] = useState<Response>();
  const [error, setError] = useState<Error>();

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const res = await getTannerlinsley();
        setDate(res);
      } catch (e) {
        if (!(e instanceof Error)) return;
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };
    fetch();
  }, []);

  if (isLoading || !data) return <p>Loading...</p>;

  if (error) return <p>An error has occurred: + {error.message}</p>;

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
