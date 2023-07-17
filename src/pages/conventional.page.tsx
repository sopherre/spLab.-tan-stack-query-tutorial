import { useEffect } from "react";
import { getTannerlinsley } from "../api/getTannerlinsley";

export const ConventionalPage: React.FC = () => {
  useEffect(() => {
    const fetch = async () => {
      await getTannerlinsley();
    };
    fetch();
  }, []);

  // if (isLoading || !data) return <p>Loading...</p>;

  // if (error instanceof Error)
  //   return <p>An error has occurred: + {error.message}</p>;

  return (
    <div>
      {/* <h1>{data.name}</h1>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong>{" "}
      <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong> */}
    </div>
  );
};
