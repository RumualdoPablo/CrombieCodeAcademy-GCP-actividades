"use client"

import Card from "@/components/Card";
import ProfileCard from "@/components/ProfileCard";
import Button from "@/components/Button";

export default function ProfilePage() {
    return (
        <main className="min-h-screen bg-gray-100 text-gray-800 p-8">
            <section className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-8 text-blue-600">Profile Page</h1>
                <ProfileCard
                    name="Carlos"
                    bio="Desarrollador Full-Stack con más de 35 años de experiencia."
                    avatar="https://randomuser.me/api/portraits/men/32.jpg"
                />
                <h2 className="text-3xl font-semibold mt-8 mb-4">Productos Favoritos</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 cursor-pointer">
                    <Card
                        title="Producto 1"
                        description="Este es el producto número 1."
                        image="/images/product1.jpg"
                    >
                        <Button text="Comprar Ahora" buttonFunction={() => alert("Articulo comprado")} />
                    </Card>
                    <Card
                        title="Producto 3"
                        description="Este es el producto número 3."
                        image="/images/product3.jpg"
                    >
                        <Button text="Comprar Ahora" />
                    </Card>
                </div>
            </section>
        </main>
    )
}
