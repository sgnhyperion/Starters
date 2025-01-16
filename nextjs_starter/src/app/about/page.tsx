"use client"
import { useRouter } from "next/navigation";

export default function About(){
    const router = useRouter();
    return (
        <div>
            <h1>About Page</h1>
            <button
                onClick={() => {
                    router.push("/");
                }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >Go Home</button>
        </div>
    );
};