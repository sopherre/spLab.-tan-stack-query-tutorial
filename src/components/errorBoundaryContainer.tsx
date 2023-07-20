import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { errorApi } from "../api/error";

export const ErrorBoundaryContainer: React.FC = () => {
  const { isLoading, error } = useQuery<unknown, Error>({
    queryKey: ["errorApi"],
    queryFn: errorApi,
  });

  useEffect(() => {
    if (!error) return;
    throw new Error(error.message);
  }, [error]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <h1>ErrorBoundaryContainer</h1>
    </div>
  );
};
