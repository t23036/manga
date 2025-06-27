'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function SearchComponent({ keyword }: { keyword: string }) {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (keyword) {
      const fetchData = async () => {
        console.log("fetchData start for keyword:", keyword);
        setLoading(true);
        try {
          const response = await axios.post('http://localhost:8000/search', {
            query1: keyword
          }, {
            headers: {
              'Content-Type': 'application/json'
            },
            withCredentials: false
          });
          console.log("fetchData start for keyword:", keyword);
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }
  }, [keyword]);

  return (
    <div>
      {loading && <p>読み込み中...</p>}
      {!loading && data.map((item, index) => (
        <div key={index}>
          <p>{item.manga} - {item.name}</p>
        </div>
      ))}
    </div>
  );
}