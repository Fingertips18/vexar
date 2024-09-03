import { useState, useEffect } from "react";

export const useAppwrite = (fn) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    setLoading(true);

    try {
      const data = await fn();
      setData(data);
    } catch (error) {
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetchData = async () => await fetchData();

  return { data, loading, refetchData };
};
