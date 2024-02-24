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
                            <span className="ms-1 text-white hover:text-[#a335ee] duration-700 
                            font-Rubik text-base sm:text-3xl">Epic Game News</span>
                        </a>
                        <div className="flex">
                            <div className='hidden xl:block mr-2'>
                                <Searchbar/>
                            </div>
                            <ul className = {`
                                                text-base block xl:flex
                                                absolute bg-[#161616] xl:bg-transparent xl:static xl:items-center xl:z-auto z-[-1] left-0 w-full xl:w-auto transition-all duration-500 ease-in
                                                ${isOpen ? 'top-10 sm:top-14' : 'top-[-490px]'}
                                            `}>
                                {pages.map((page) => (
                                    <li key={page.name} className='text-center xl:my-0 py-1 sm:py-4 xl:py-0 duration-700 hover:bg-[#202020] xl:hover:bg-transparent'>
                                        <a href={page.route} className="font-Rubik text-sm sm:text-xl text-white hover:text-[#a335ee] duration-700 py-4 px-14 sm:px-60 md:px-80 xl:px-2">{page.name}</a>
                                    </li>
                                ))}
                                
                                <div className='flex justify-center xl:hidden my-4'>
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