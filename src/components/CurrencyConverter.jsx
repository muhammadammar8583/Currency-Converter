import { useState, useEffect } from "react";

const CurrencyConverter = (currrency) => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currrency}.json`
    )
      .then((response) => response.json())
      .then((response) => setData(response[currrency]));
  }, [currrency]);

  console.log(data);
  return data;
};

export default CurrencyConverter;
