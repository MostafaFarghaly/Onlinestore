import React from 'react'

export default function About() {
    return (
        <div className="container mx-auto max-w-4xl p-6">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">About Us</h1>
            
            <p className="text-lg text-gray-700 mb-4">
                Welcome to MFG STOR, your go-to online store for the best products!
            </p>

            <p className="text-lg text-gray-700 mb-4">
                We are committed to providing the highest quality of products, handpicked to ensure they meet your needs. Our team works hard to offer a seamless shopping experience and excellent customer service. Whether you're looking for gadgets, home decor, or clothing, we've got something for everyone.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-4">
                Our mission is to offer top-notch products that not only meet, but exceed your expectations. We aim to create a convenient and enjoyable shopping experience for you, backed by fast and reliable service.
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Why Choose Us?</h2>
            <ul className="list-disc pl-6 text-lg text-gray-700">
                <li>High-quality products at affordable prices</li>
                <li>Reliable and fast shipping</li>
                <li>Excellent customer support</li>
                <li>Secure payment options</li>
            </ul>

            <div className="mt-6 text-center">
                <p className="text-lg text-gray-700">Thank you for choosing MFG STOR. We look forward to serving you!</p>
            </div>
        </div>
    );
}
