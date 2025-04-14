import React from 'react';
import Image from 'next/image';
import AddToCartButton from '../../components/AddToCartButton';
async function GetProductDetails(productId) {
  const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
  return res.json();
}

export default async function ProductDetails({ params }) {
  const product = await GetProductDetails(params.id);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={300}
          className="rounded bg-gray-100"
        />
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-600 mb-2">{product.description}</p>
          <p className="text-green-700 font-bold text-xl mb-4">${product.price}</p>
          
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}
