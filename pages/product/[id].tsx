import React from 'react';
import { useRouter } from 'next/router';

const ProductItem = () => {
  // const router = useRouter();
  const {
    query: { id },
  } = useRouter();

  return <div>This is the ProductItem: {id}</div>;
};

export default ProductItem;
