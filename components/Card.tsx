import Image from "next/image";

interface CardProps {
    title: string;
    description: string;
    image: string;
    children?: React.ReactNode;
}

export default function Card({ title, description, image, children }: CardProps) {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform">
            <Image src={image} alt={title} width={100} height={100} className="w-full h-36 object-contain" />
            <div className="p-4">
                <h2 className="text-2xl font-semibold mb-2">{title}</h2>
                <p className="text-gray-700 mb-4">{description}</p>
                {children}
            </div>
        </div>
    )
}
