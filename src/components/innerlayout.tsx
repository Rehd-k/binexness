'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { BsPerson } from 'react-icons/bs';
import { CiHome, CiLogout, CiLight } from 'react-icons/ci';
import { FaWhatsapp } from 'react-icons/fa6';
import { IoIosCog, IoMdArrowRoundBack, IoIosNotificationsOutline } from 'react-icons/io';
import { MdDashboard } from 'react-icons/md';
import { signOut } from "next-auth/react"

interface InnerLayoutProps {
    children: React.ReactNode;
}

const InnerLayout: React.FC<InnerLayoutProps> = ({ children }) => {
    const router = useRouter()
    return (
        <div className="relative">
            <div className="w-20 h-screen fixed bg-white border-r border-blue-100 md:block hidden">
                <div className="h-20 w-full"></div>

                <div className="w-full flex justify-center ">
                    <Link href={"/main/index"} className="p-5 text-gray-500 hover:shadow-2xl shadow-blue-900 rounded-2xl hover:text-blue-500">
                        <CiHome className="text-2xl" />
                    </Link>
                </div>

                <div className="w-full flex justify-center ">
                    <Link href={"/main/assetpage"} className="p-5 text-gray-500 hover:shadow-2xl shadow-blue-900 rounded-2xl hover:text-blue-500">
                        <MdDashboard className="text-2xl " />
                    </Link>
                </div>


                <div className="w-full flex justify-center ">
                    <Link href={"/main/profile"} className="p-5 text-gray-500 hover:shadow-2xl shadow-blue-900 rounded-2xl hover:text-blue-500">
                        <BsPerson className="text-2xl " />
                    </Link>
                </div>

                <div className="w-full flex justify-center ">
                    <Link href={"/main/settings"} className="p-5 text-gray-500 hover:shadow-2xl shadow-blue-900 rounded-2xl hover:text-blue-500">
                        <IoIosCog className="text-2xl " />
                    </Link>
                </div>

                <div className="w-full flex justify-center ">
                    <div onClick={() => signOut()} className="p-5 text-gray-500 hover:shadow-2xl shadow-blue-900 rounded-2xl hover:text-blue-500">
                        <CiLogout className="text-2xl " />
                    </div>
                </div>
            </div>
            <div className="h-16 w-full bg-white fixed flex justify-between md:px-28 px-2 border-b border-blue-100 ">

                <IoMdArrowRoundBack className="mt-5 text-blue-500" onClick={() => router.back()} />

                <div className="flex justify-between w-1/3 md:w-1/6 ml-auto mt-5 ">
                    <div className="">
                        <FaWhatsapp className="text-2xl text-blue-500" />
                    </div>
                    <div className="text-2xl ">
                        <CiLight className="text-2xl text-yellow-500" />
                    </div>
                    <div className="">
                        <IoIosNotificationsOutline className="text-2xl text-green-500" />
                    </div>

                </div>
            </div>
            <div className="md:pl-20 pt-16 px-2">
                {children}
            </div>
            <div className="fixed bottom-0 flex justify-around w-full bg-white md:hidden">
                <Link href={"/main/index"} className="p-5 text-gray-500 hover:shadow-2xl shadow-blue-900 rounded-2xl hover:text-blue-500">
                    <CiHome className="text-2xl" />
                </Link>

                <Link href={"/main/assetpage"} className="p-5 text-gray-500 hover:shadow-2xl shadow-blue-900 rounded-2xl hover:text-blue-500">
                    <MdDashboard className="text-2xl " />
                </Link>

                <Link href={"/main/profile"} className="p-5 text-gray-500 hover:shadow-2xl shadow-blue-900 rounded-2xl hover:text-blue-500">
                    <BsPerson className="text-2xl " />
                </Link>

                <div onClick={() => signOut()} className="p-5 text-gray-500 hover:shadow-2xl shadow-blue-900 rounded-2xl hover:text-blue-500">
                    <CiLogout className="text-2xl " />
                </div>
            </div>
        </div>
    );
};

export default InnerLayout;