import React from 'react'

export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src="data:image/jpeg;base64,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" alt="product_image1" />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        1:1 Mentorship, Career Guidance
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        4.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$99</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );
}