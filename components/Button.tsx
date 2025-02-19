"use client"; // Indica que este es un Client Component

interface ButtonProps {
    text: string;
    buttonFunction?: () => void;
    type?: "button" | "submit" | "reset";
}

export default function Button({ text, buttonFunction, type = "button" }: ButtonProps) {
    return (
        <button
            type={type}
            onClick={buttonFunction}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
            {text}
        </button>
    );
}