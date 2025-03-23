"use client";
import { useFormState } from "react-dom";
import { loginAction } from "@/app/actions/auth";
import Link from "next/link";

export default function LoginPage() {
    const [formState, action] = useFormState(loginAction, undefined);

    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 p-8">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                <h1 className="text-3xl font-bold text-blue-600 mb-4 text-center">Iniciar Sesión</h1>
                <form action={action} className="flex flex-col gap-4">
                    <div>
                        <label className="block text-gray-700 font-bold">Correo Electrónico</label>
                        <input
                            type="email"
                            name="email"
                            className="w-full p-2 border rounded"
                            required
                        />
                        {formState?.errors?.email && (
                            <p className="text-red-500 text-sm">{formState.errors.email[0]}</p>
                        )}
                    </div>

                    <div>
                        <label className="block text-gray-700 font-bold">Contraseña</label>
                        <input
                            type="password"
                            name="password"
                            className="w-full p-2 border rounded"
                            required
                        />
                        {formState?.errors?.password && (
                            <p className="text-red-500 text-sm">{formState.errors.password[0]}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
                    >
                        Iniciar Sesión
                    </button>

                    <p className="text-center">No tienes cuenta?</p>
                    <Link href="/register" className="w-full bg-purple-600 text-white p-2 rounded hover:bg-purple-700 transition text-center">
                        Registrate
                    </Link>


                    {formState?.message && (
                        <p className={`text-center text-sm mt-2 ${formState.message === "Login exitoso" ? "text-green-600" : "text-red-500"}`}>
                            {formState.message}
                        </p>
                    )}
                </form>
            </div>
        </main>
    );
}
