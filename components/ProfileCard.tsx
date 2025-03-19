import Image from "next/image";
interface ProfileCardProps {
    name: string;
    bio: string;
    avatar: string;
}

export default function ProfileCard({ name, bio, avatar }: ProfileCardProps) {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition">
            <Image
                src={avatar}
                alt={name}
                className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h2 className="text-2xl font-bold">{name}</h2>
            <p className="text-gray-600">{bio}</p>
        </div>
    )
}
