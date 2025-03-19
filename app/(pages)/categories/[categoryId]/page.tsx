"use client"
import { useParams, usePathname } from 'next/navigation';
import { products } from '@/lib/products';
import Image from 'next/image';

const CategoryById = () => {
    const pathname = useParams();
    const productsByCategory = products.filter(product => product.category === pathname.categoryId)

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {productsByCategory.map((product) => (
                <div key={product.name} className="bg-slate-400 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform">
                    <Image src={product.name} alt={product.name} className="w-full h-80" />
                    <div className="p-4">
                        <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
                        <p className="text-xl font-bold text-blue-600">{product.price}</p>
                        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Buy Now</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CategoryById