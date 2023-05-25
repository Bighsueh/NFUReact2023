import React, { useEffect, useState } from "react";

const WithoutReactQuery = () => {
  const [data, setDate] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchPokeAPI = async () => {
      try {
        // 抓取API
        const res = await fetch("https://pokeapi.co/api/v2/pokemon/1/");

        // 如果API的狀態不是200不是正常回傳
        if (res.status != 200 && !res.ok) throw new Error("Fetch data fail.");

        const data = await res.json();
        setDate(data);
        console.log(data);
        setIsSuccess(true);
      } catch (error) {
        setErrorMessage(error.message);
      }
    };

    fetchPokeAPI();
    console.log(data);
  }, []);

  if (errorMessage) {
    return <h1>{errorMessage}</h1>;
  }

  return (
    <div className="box">{isSuccess && JSON.stringify(data, null, 2)}</div>
  );
};

export default WithoutReactQuery;
