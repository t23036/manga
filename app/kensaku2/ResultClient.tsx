'use client';

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ResultTable from "../components/ResultTable";
import axios from "axios";
import React from "react";

export default function ResultClient() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (keyword) {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await axios.post("http://localhost:8000/search", {
            query1: keyword,
          });
          const result = await response.data;
          setData(result);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [keyword]);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : data.length > 0 ? (
        <ResultTable data={data} />
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
}
