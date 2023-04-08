import NavBar from '@/components/NavBar/NavBar';
import { useEffect, useState } from 'react';

export default function Home() {
  const [productList, setProductList] = useState<TProduct[]>([]);

  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((res) => res.json())
      .then(({ data, length }) => {
        setProductList(data);
      });
  }, []);

  return (
    <>
      <main>
        <div>
          <NavBar />
          <p>Hola Home</p>
          {productList.map((product) => (
            <div key={product.name}>{product.image}</div>
          ))}
        </div>
      </main>
    </>
  );
}
