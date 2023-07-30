import { ErrorBoundary } from "react-error-boundary";
import { ErrorBoundaryContainer } from "../components/errorBoundaryContainer";

export const ErrorBoundaryPage: React.FC = () => {
  return (
    <ErrorBoundary
      FallbackComponent={({ error }) => (
        <div role="alert">
          <p>Something went wrong:(</p>
          <pre style={{ color: "red" }}>{error.message}</pre>
        </div>
      )}
    >
      <ErrorBoundaryContainer />
    </ErrorBoundary>
  );
};
