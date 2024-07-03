"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CircleUserRound, Menu, ShoppingCart } from 'lucide-react'
import { useUser, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
    const { user } = useUser();
    const [dropdownMenu, setDropdownMenu] = useState(false)
    return (
        <div className='sticky top-0 z-10 py-2 px-10 flex gap-2 justify-between items-center bg-white max-sm:px-2'>
            <Link href='/'>
                <Image src="/logo.png" alt='logo' width={130} height={100} />
            </Link>
            <div>
                <Link href="/">Home</Link>
            </div>
            <div className='relative flex gap-3 items-center'>
                <Link className="flex items-center gap-3 border rounded-lg py-1 hover:bg-black hover:text-white" href="/cart"><ShoppingCart /><p className='text-base-bold'>Cart (0)</p>
                </Link>
            </div>
            {user && <Menu className='cursor-pointer' onClick={() => { setDropdownMenu(!dropdownMenu) }} />}
            {user && dropdownMenu && (
                <div className="absolute top-12 right-5 flex flex-col gap-4 p-3 rounded-lg border bg-white text-base-bold">
                    <Link href="/" className="hover:text-red-1">
                        Home
                    </Link>
                    <Link href={user ? "/wishlist" : "/sign-in"} className="hover:text-red-1">Wishlist</Link>
                    <Link href={user ? "/orders" : "/sign-in"} className="hover:text-red-1">Orders</Link>
                </div>
            )}

            {user ? (
                <UserButton afterSignOutUrl="/sign-in" />
            ) : (
                <Link href="/sign-in">
                    <CircleUserRound />
                </Link>
            )}

        </div>
    )
}

export default Navbar
