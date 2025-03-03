import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    return (
        <div className="p-4 flex justify-center items-center relative font-bold">
            <Link href="/" className="text-2xl absolute left-4">
                Landing Page
            </Link>
            <div className="flex space-x-8">
                <Link href="/about" className="hover:text-blue-500 transition duration-300 ">About</Link>
                <Link href="/categories" className="hover:text-blue-500 transition duration-300 ">Categories</Link>
                <Link href="/products" className="hover:text-blue-500 transition duration-300">Products</Link>
                <Link href="/profile" className="hover:text-blue-500 transition duration-300 absolute right-4">Profile</Link>
            </div>
        </div>
    )

}

export default NavBar