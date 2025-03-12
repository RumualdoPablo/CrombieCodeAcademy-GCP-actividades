"use client";
import { useFormState } from "react-dom";
import { registerAction } from "@/app/actions/register";
import Link from "next/link";

export default function RegisterPage() {
    const [formState, action] = useFormState(registerAction, undefined);

    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 p-8">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                <h1 className="text-3xl font-bold text-blue-600 mb-4 text-center">Registro</h1>
                <form action={action} className="flex flex-col gap-4">
                    <div>
                        <label className="block text-gray-700 font-bold">Nombre</label>
                        <input type="text" name="name" className="w-full p-2 border rounded" required />
                        {formState?.errors?.name && (
                            <p className="text-red-500 text-sm">{formState.errors.name[0]}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-gray-700 font-bold">Correo Electrónico</label>
                        <input type="email" name="email" className="w-full p-2 border rounded" required />
                        {formState?.errors?.email && (
                            <p className="text-red-500 text-sm">{formState.errors.email[0]}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-gray-700 font-bold">Contraseña</label>
                        <input type="password" name="password" className="w-full p-2 border rounded" required />
                        {formState?.errors?.password && (
                            <p className="text-red-500 text-sm">{formState.errors.password[0]}</p>
                        )}
                    </div>

                    <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">
                        Registrarse
                    </button>
                    <p className="text-center">Ya tienes cuenta?</p>
                    <Link href="/login" className="w-full bg-purple-600 text-white p-2 rounded hover:bg-purple-700 transition text-center">
                        Iniciar sesión
                    </Link>

                    {formState?.message && (
                        <p className={`text-center text-sm mt-2 ${formState.message.includes("exitoso") ? "text-green-600" : "text-red-500"}`}>
                            {formState.message}
                        </p>
                    )}
                </form>
            </div>
        </main>
    );
}
