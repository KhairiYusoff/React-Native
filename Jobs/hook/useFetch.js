import React, { useState } from "react";
import axios from "axios";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: "https://jsearch.p.rapidapi.com/search",
    params: {
      query: "Python developer in Texas, USA",
      page: "1",
      num_pages: "1",
    },
    headers: {
      "X-RapidAPI-Key": "5dde110088msh19900a44b4bf838p1708e2jsnf7608eb4875e",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };
  return <div>useFetch</div>;
};

export default useFetch;
