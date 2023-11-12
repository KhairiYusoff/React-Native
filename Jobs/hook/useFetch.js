import React, { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
  console.log(endpoint, query);
  const [data, setData] = useState([]);
  console.log(data);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": "5dde110088msh19900a44b4bf838p1708e2jsnf7608eb4875e",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
    // params: {
    //   query: "Python developer in Texas, USA",
    //   page: "1",
    //   num_pages: "1",
    // },
  };

  const fetchData = async () => {
    setIsLoading(true);
    const response = await axios.request(options);
    console.log(response);
    setData(response.data.data);
    setIsLoading(false);
    try {
    } catch (error) {
      setError(error);
      alert("There is an error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };
  return { data, isLoading, error, refetch };
};

export default useFetch;
