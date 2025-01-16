"use client";
import { useEffect } from "react";

export default function Error({error}: {error: Error}){
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-red-500 text-2xl">Error fetching users data</div>
        </div>
    );
}