import { useQuery } from "@tanstack/react-query";
import { useErrorBoundary } from "react-error-boundary";
import { useEffect } from "react";
import { errorApi } from "../api/error";

export const ErrorBoundaryContainer: React.FC = () => {
  const { showBoundary } = useErrorBoundary();
  const { isLoading, error, data } = useQuery({
    queryKey: ["errorApi"],
    queryFn: errorApi,
  });

  useEffect(() => {
    if (!(error instanceof Error)) return;

    showBoundary(error.message);
  }, [error, showBoundary]);

  if (isLoading || !data) return <p>Loading...</p>;

  return (
    <div>
      <h1>ErrorBoundaryContainer</h1>
    </div>
  );
};
