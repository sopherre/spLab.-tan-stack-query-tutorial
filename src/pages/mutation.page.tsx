import { useMutation } from "@tanstack/react-query";
import React from "react";
import { createPost } from "../api/createPost";

export const MutationPage: React.FC = () => {
  const { isLoading, error, isSuccess, data, mutate } = useMutation({
    mutationFn: createPost,
  });

  return (
    <div>
      {isLoading ? (
        "Adding todo..."
      ) : (
        <>
          {error instanceof Error && (
            <div>An error occurred: {error.message}</div>
          )}

          <button
            onClick={() => {
              mutate({ id: "1", title: "test-title" });
            }}
          >
            Create Post
          </button>
          {isSuccess && (
            <div>
              <h1>Success Created!</h1>
              <p>id: {data.id}</p>
              <p>title: {data.title}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
};
