"use client";

import { SignInButton, SignOutButton, SignUpButton, UserButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    const { user, isSignedIn } = useUser();

    return (
        <div className="p-4 flex justify-center items-center relative font-bold">
            <Link href="/" className="text-2xl absolute left-4">
                Landing Page
            </Link>
            <div className="flex space-x-8">
                <Link href="/about" className="hover:text-blue-500 transition duration-300 ">About</Link>
                <Link href="/categories" className="hover:text-blue-500 transition duration-300 ">Categories</Link>
                <Link href="/products" className="hover:text-blue-500 transition duration-300">Products</Link>
                {
                    isSignedIn ? (
                        <>

                            <Link href="/profile">Perfil ({user?.firstName || "Usuario"})</Link>
                            <UserButton />
                            <SignOutButton>
                                <button className="bg-red-500 px-3 py-1 rounded">Cerrar Sesión</button>
                            </SignOutButton>
                        </>
                    ) : (
                        <>
                            <SignInButton />
                            <SignUpButton />
                        </>
                    )}
            </div>
        </div>
    )

}

export default NavBar