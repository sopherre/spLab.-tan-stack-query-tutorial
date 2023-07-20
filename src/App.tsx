import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SnackbarProvider } from "notistack";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { TopPage } from "./pages/index.page";
import { ConventionalPage } from "./pages/conventional.page";
import { TanStackQueryPage } from "./pages/tanStackQuery.page";
import { ErrorBoundaryPage } from "./pages/errorBoundary.page";
import { MutationPage } from "./pages/mutation.page";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <TopPage />,
  },
  {
    path: "/conventional",
    element: <ConventionalPage />,
  },
  {
    path: "/tan-stack-query",
    element: <TanStackQueryPage />,
  },
  {
    path: "/error-boundary",
    element: <ErrorBoundaryPage />,
  },
  {
    path: "/mutation",
    element: <MutationPage />,
  },
]);

export const App = () => {
  return (
    <SnackbarProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </SnackbarProvider>
  );
};
