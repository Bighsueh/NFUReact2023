import React, { useState } from "react";
import "./App.css";
import WithoutReactQuery from "./withoutReactQuery";
import { useQuery } from "react-query";

const timeToDate = (time) => {
  let t = new Date(time);
  return t.toLocaleDateString();
};

const fetchPokeAPI = async ({ queryKey }) => {
  console.log(queryKey);
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${queryKey[1]}/`);
  const data = await res.json();
  return data;
};

function App() {
  const [dexId, setdexId] = useState(1);
  const { data, isSuccess, isError, dataUpdatedAt, error, isLoading } =
    useQuery(["PokeAPI", dexId, "Hello", "World"], fetchPokeAPI, {
      refetchOnWindowFocus: false,
      cacheTime: 1000,
    });
  console.log("isSuccess", isSuccess);
  console.log("isError", isError);

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="box">
      <h3>Data update at: {timeToDate(dataUpdatedAt)}</h3>
      <div>
        <button onClick={() => setdexId((prev) => prev - 1)}>Prev</button>
        <button onClick={() => setdexId((prev) => prev + 1)}>Next</button>
      </div>
      <div>
        <div className="card">
          <p className="dexId">
            No.00{data.id} {data.name}
          </p>
          <img src={data?.sprites?.front_default} />
          <div className="typeflex">
            {data?.types?.map((type) => (
              <div className={`types ${type.type.name}`} key={type.type.name}>
                <span className="mt-1">{type.type.name.toUpperCase()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
