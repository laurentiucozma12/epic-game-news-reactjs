import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Searchbar from './Searchbar';

interface Page {
    name: string;
    route: string;
}

function Navbar() {
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
        <nav className="fixed shadow-md top-0 left-0 w-full bg-[#101110]">
            <div className="mx-auto max-w-7xl px-6 lg:px-4 2xl:px-0 bg-[#101110]">
                <div className="py-2">
                    <div className="font-bold flex items-center sm:justify-center xl:justify-between">

                        {/* Mobile Menu */}
                        <button onClick={() => setIsOpen(!isOpen)} className="mr-4 p-1 block xl:hidden absolute right-0 top-0.5 sm:top-2 cursor-pointer">
                            {
                                isOpen ?    <XMarkIcon className="h-7 sm:h-8 text-white hover:text-[#a335ee] duration-700 xl:none" /> :
                                            <Bars3Icon className="h-7 sm:h-8 text-white hover:text-[#a335ee] duration-700 xl:none" />
                            }
                        </button>
                        <a href="/" className="flex">
                            <img className="h-6 sm:h-10" src="./logo-epic-game-news-64x64.png" alt="epic game news logo" />
                            <span className="   ms-1 text-white hover:text-[#a335ee] duration-700
                                                sm:mt-0.5 sm:text-3xl">Epic Game News</span>
                        </a>
                        <div className="flex">
                            <div className='hidden mr-2 mt-0.5 xl:block'>
                                <Searchbar/>
                            </div>
                            <ul className = {`
                                                text-base block absolute bg-[#161616] z-[-1] left-0 w-full transition-all duration-500 ease-in
                                                xl:flex xl:static xl:bg-transparent xl:z-auto
                                                ${isOpen ? 'top-10 sm:top-14' : 'top-[-490px]'}
                                            `}>
                                {pages.map((page) => (
                                    <li key={page.name} className=' py-1 text-center hover:bg-[#202020] duration-700
                                                                    sm:py-4
                                                                    xl:my-0 xl:py-0 xl:hover:bg-transparent'>
                                        <a href={page.route} className="py-1 px-14 text-white hover:text-[#a335ee] duration-700
                                                                        sm:py-4 sm:px-60 sm:text-xl
                                                                        md:px-80
                                                                        xl:text-lg xl:px-2">{page.name}</a>
                                    </li>
                                ))}
                                <div className='flex justify-center my-2 sm:my-4 xl:hidden'>
                                    <Searchbar/>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;