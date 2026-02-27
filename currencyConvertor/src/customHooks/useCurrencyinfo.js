import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@latest/v1/currencies/${currency}.json
`
      );

      const result = await response.json();

      setData(result[currency]); // important fix
    };

    fetchData();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
