"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";

export const Navigation = () => {
    const pathname = usePathname();
    return (
        <div className="flex justify-between items-center px-8">
            <nav className="flex justify-evenly items-center p-4">
                <Link href="/" className={
                    pathname === "/" ? "font-bold mr-4 text-lg": "mr-4 text-blue-500 text-lg"
                }>
                    Home
                </Link>
                <Link href="/about" className={
                    pathname === "/about" ? "font-bold mr-4 text-lg": "mr-4 text-blue-500 text-lg"
                }>
                    About
                </Link>
                <Link href="/products/apple" className={
                    pathname.startsWith("/products/apple") ? "font-bold mr-4 text-lg": "mr-4 text-blue-500 text-lg"
                }>
                    Apple
                </Link>
                <Link href="/users-client" className={
                    pathname==="/users-client" ? "font-bold mr-4 text-lg": "mr-4 text-blue-500 text-lg"
                }>
                    Users-Client
                </Link>
            </nav>
            <div className="flex justify-center items-center px-8 gap-4 text-lg">
                <SignedOut>
                <   SignInButton mode="modal"/>
                </SignedOut>
                <SignedIn>
                    <UserButton />  
                </SignedIn>
            </div>
        </div>
    )
}