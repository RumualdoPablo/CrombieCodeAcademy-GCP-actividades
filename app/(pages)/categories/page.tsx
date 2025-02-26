"use client";

import { categories } from "@/lib/products";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CategoryPage = () => {
    const pathname = usePathname();

    return (
        <div className="flex flex-col">
            <h1 className="font-extrabold">Categorías disponibles</h1>
            {categories.map((category) => (
                <div className="">
                    <Link
                        key={category}
                        href={`${pathname}/${category}`}
                        className="my-5 hover:font-semibold"
                    >
                        {category.toUpperCase()}
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default CategoryPage;
