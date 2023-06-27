import React, { useMemo } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Response {
  success: boolean;
  data: {
    name: string;
    note: string;
    age: number;
    registerDate: string;
  };
}

const getShakespeare = async () => {
  const { data } = await axios.get<Response>(
    "https://umayadia-apisample.azurewebsites.net/api/persons/Shakespeare"
  );
  return data;
};

function App() {
  const { data, isLoading } = useQuery({
    queryKey: ["shakespeare"],
    queryFn: getShakespeare,
  });

  const shakespeareEntries = useMemo(() => {
    return data?.data ? Object.entries(data.data) : [];
  }, [data?.data]);

  return (
    <div className="App">
      <header className="App-header">
        {isLoading ? (
          "loading"
        ) : (
          <img src={logo} className="App-logo" alt="logo" />
        )}
        {shakespeareEntries.map(([key, value]) => (
          <p key={key}>
            {key}: {value}
          </p>
        ))}
      </header>
    </div>
  );
}

export default App;
