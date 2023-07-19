import { ErrorBoundary } from "react-error-boundary";
import { ErrorBoundaryContainer } from "../components/errorBoundaryContainer";

export const ErrorBoundaryPage: React.FC = () => {
  return (
    <ErrorBoundary
      fallbackRender={({ error }) => <p>An error has occurred:{error}</p>}
    >
      <ErrorBoundaryContainer />
    </ErrorBoundary>
  );
};
