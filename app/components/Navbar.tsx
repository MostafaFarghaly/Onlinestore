'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { useCart } from '@/app/context/CartContext'; // تأكد إن المسار صح حسب مشروعك

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { cartCount } = useCart();

    return (
        <>
            <nav className="p-2 container mx-auto max-w-5xl">
                <div className="flex flex-col lg:flex-row justify-between items-center">
                    {/* Logo and Mobile Toggle */}
                    <div className="flex justify-between items-center w-full lg:w-auto">
                        <Link href="/" className="text-2xl font-serif font-bold text-gray-800">
                            MFG STOR
                        </Link>
                        <button
                            aria-label="Toggle Menu"
                            className="lg:hidden p-2 text-gray-700"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>

                    {/* Nav Links */}
                    <div className={`${isOpen ? 'block' : 'hidden'} lg:block w-full lg:w-auto`}>
                        <ul className="flex flex-col lg:flex-row lg:space-x-8 items-center mt-4 lg:mt-0 text-gray-700">
                            <li>
                                <Link href="/" className="p-2 hover:text-blue-600 transition">Home</Link>
                            </li>
                            <li>
                                <Link href="/about" className="p-2 hover:text-blue-600 transition">About</Link>
                            </li>
                            <li className="fixed top-4 right-4 z-50 ">
                                <Link href="/car" className="p-2 hover:text-blue-600  flex items-center gap-1">
                                    🛒 Car
                                    {cartCount > 0 && (
                                        <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                                            {cartCount}
                                        </span>
                                    )}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="my-2 border-gray-300" />
            </nav>
            
        </>
    );
};

export default Navbar;
