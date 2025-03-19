"use client";
import { useState, useEffect } from "react";

export default function AdminPage() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [categories, setCategories] = useState<Array<{ categoryId: string; name: string }>>([]);
    const [image, setImage] = useState<File | null>(null);

    useEffect(() => {
        fetch("/api/categories")
            .then((res) => res.json())
            .then((data) => setCategories(data.categories));
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("category", categoryId)
        if (image) formData.append("image", image);

        const res = await fetch("/api/products", {
            method: "POST",
            body: formData,
        });

        if (res.ok) alert("Producto creado!");
    };

    return (
        <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-8">
            <h1 className="text-4xl font-bold text-blue-600 mb-6">Admin - Crear Producto</h1>
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 w-96">
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Nombre</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 border rounded text-black"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Descripción</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full p-2 border rounded text-black"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Precio</label>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full p-2 border rounded text-black"
                        required
                    />
                </div>
                <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files?.[0] || null)} required />
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Categoría</label>
                    <select
                        value={categoryId}
                        onChange={(e) => setCategoryId(e.target.value)}
                        className="w-full p-2 border rounded text-black"
                        required
                    >
                        <option value="" disabled>Selecciona una categoría</option>
                        {categories.map((category) => (
                            <option key={category.categoryId} value={category.categoryId}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">
                    Crear Producto
                </button>
            </form>
        </main>
    );
}
