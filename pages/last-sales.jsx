import { useEffect, useState } from "react";
import useSWR from "swr";

export default function LastSalesPage(props) {
  const [sales, setSales] = useState(props.sales);

  const { data, error } = useSWR(
    "https://nextjs-app-74e61-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json"
  );

  useEffect(() => {
    if (data) {
      const transformedSales = [];

      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }
      setSales(transformedSales);
    }
  }, [data]);

  if (!data && !sales) return <p>Loading...</p>;

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  try {
    const response = await fetch(
      "https://nextjs-app-74e61-default-rtdb.asia-southeast1.firebasedatabase.app/sales.json"
    );
    const data = await response.json();
    const transformedSales = [];

    for (const key in data) {
      transformedSales.push({
        id: key,
        username: data[key].username,
        volume: data[key].volume,
      });
    }

    return {
      props: {
        sales: transformedSales,
        revalidate: 10,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
