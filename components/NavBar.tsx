"use client";

import { useEffect, useState, useTransition } from "react";
import { logoutAction } from "@/app/actions/logout";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname(); // Detecta cambios en la URL

    useEffect(() => {
        async function checkAuth() {
            const res = await fetch("/api/auth/me", { cache: "no-store" }); // Evita la caché
            const data = await res.json();
            setIsAuthenticated(data.isAuthenticated);
        }
        checkAuth();
    }, [pathname]);

    return (
        <div className="p-4 flex justify-center items-center relative font-bold">
            <Link href="/" className="text-2xl absolute left-4">
                Landing Page
            </Link>
            <div className="flex space-x-8">
                <Link href="/about" className="hover:text-blue-500 transition duration-300 ">About</Link>
                <Link href="/categories" className="hover:text-blue-500 transition duration-300 ">Categories</Link>
                <Link href="/products" className="hover:text-blue-500 transition duration-300">Products</Link>
                {isAuthenticated ? (
                    <>
                        <Link href="/profile" className="hover:text-blue-500 transition duration-300 absolute right-4">Profile</Link>
                        <button
                            onClick={() => startTransition(logoutAction)}
                            disabled={isPending}
                            className="bg-red-500 px-3 py-1 rounded"
                        >
                            {isPending ? "Cerrando..." : "Cerrar Sesión"}
                        </button>
                    </>

                ) : (
                    <Link href="/login">Iniciar Sesión</Link>
                )

                }
            </div>
        </div>
    )

}