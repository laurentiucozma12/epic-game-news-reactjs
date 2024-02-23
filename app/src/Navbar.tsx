import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

interface Page {
    name: string;
    route: string;
}

interface NavbarProps {
    children?: React.ReactNode;
}

function Navbar(props: NavbarProps) {
    const pages: Page[] = [
        { name: "HOME", route: "/" },
        { name: "VIDEO GAMES", route: "/video-games" },
        { name: "CATEGORIES", route: "/categories" },
        { name: "PLATFORMS", route: "/platforms" },
        { name: "ABOUT", route: "/about" },
        { name: "CONTACT", route: "/contact" },
    ];

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <nav className="shadow-md w-full sticky top-0 left-0">
            <div className="bg-zinc-900 py-2">
                <div className="font-bold cursor-pointer flex items-center justify-between">

                    <a href="/" className="flex">
                        <img className="w-10 h-10" src="./public/logo-epic-game-news-64x64.png" alt="epic game news logo" />
                        <span className="ms-1 text-white text-3xl">Epic Game News</span>
                    </a>

                    <button onClick={() => setIsOpen(!isOpen)} className="p-2 block lg:hidden absolute right-2 top-2 cursor-pointer">
                        {
                            isOpen ?    <XMarkIcon className="h-7 text-white lg:none" /> :
                                        <Bars3Icon className="h-7 text-white lg:none" />
                        }

                        {props.children}
                    </button>

                    <div className="">
                        {/* <input type="search" className="rounded w-40" /> */}
                        <ul className = {`  
                                            text-base block lg:flex
                                            absolute bg-zinc-900 lg:static lg:items-center lg:z-auto z-[-1] left-0 w-full lg:w-auto transition-all duration-500 ease-in
                                            ${isOpen ? 'top-19' : 'top-[-490px]'}
                                        `}>
                            {pages.map((page) => (
                                <li key={page.name} className='lg:my-0 my-7 text-center'>
                                    <a href={page.route} className="text-white p-2">{page.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;