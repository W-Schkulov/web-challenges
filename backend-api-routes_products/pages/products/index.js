import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function Products() {
  const { data, error } = useSWR("/api/products", fetcher);

  if (error) return <p>Loading error</p>;
  if (!data) return <p>Is Loading...</p>;

  return (
    <>
      <h1>Products</h1>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
