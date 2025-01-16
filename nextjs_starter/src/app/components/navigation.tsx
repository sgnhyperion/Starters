"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
    const pathname = usePathname();
    return (
        <nav>
            <Link href="/" className={
                pathname === "/" ? "font-bold mr-4 ": "mr-4 text-blue-500"
            }>
                Home
            </Link>
            <Link href="/about" className={
                pathname === "/about" ? "font-bold mr-4 ": "mr-4 text-blue-500"
            }>
                About
            </Link>
            <Link href="/products/apple" className={
                pathname.startsWith("/products/apple") ? "font-bold mr-4 ": "mr-4 text-blue-500"
            }>
                Apple
            </Link>
            <Link href="/users-client" className={
                pathname==="/users-client" ? "font-bold mr-4 ": "mr-4 text-blue-500"
            }>
                Users-Client
            </Link>
        </nav>
    )
}