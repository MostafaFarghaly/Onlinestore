import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AddToCartButton from '../components/AddToCartButton';

async function GetProducts() {
const res = await fetch('https://fakestoreapi.com/products',);
return res.json();
}

export default async function HomePage() {
const products = await GetProducts();

return (
    <div className="bg-white mx-auto p-6">
        {/* ✅ Section Title */}
        <div className="max-w-5xl mx-auto my-6 px-4">
        <h2 className="text-lg font-semibold text-gray-800 flex">🛒 All Products</h2>
        <p className="text-gray-600 text-sm">Browse our collection of amazing products.</p>
        <hr className="my-4 border-gray-600" />
        </div>

        {/* ✅ Product List */}
        <div className="max-w-5xl mx-auto bg-white rounded-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
        {products.map((product) => (
            <div key={product.id} className="relative w-full border p-4 rounded-lg shadow-sm bg-white">
            {/* Rating */}
            <div className="absolute top-2 right-2 px-2 py-1 rounded-full bg-yellow-400 text-black text-xs shadow">
                ⭐ {product.rating.rate}
            </div>

            {/* Image */}
            <div className="flex justify-center h-32">
                <Image
                src={product.image}
                alt={product.title}
                width={100}
                height={100}
                className="object-contain max-h-28"
                />
            </div>

            {/* Info */}
            <div className="mt-4">
                <h3 className="text-md font-semibold text-gray-900 truncate">{product.title}</h3>
                <p className="text-blue-600 font-bold">${product.price}</p>
            </div>

            {/* Actions */}
            <div className="mt-4 grid gap-2">
                <Link
                href={`/productDetails/${product.id}`}
                className="text-center px-4 py-2 bg-black text-white rounded hover:bg-white hover:text-black border border-black transition"
                >
                View Details
                </Link>
                <AddToCartButton product={product} />
            </div>
            </div>
        ))}
        </div>
    </div>
);
}
