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
        <nav className="shadow-md w-full sticky top-0 left-0">
            <div className="bg-[#101110] py-2">
                <div className="font-bold flex items-center justify-between">

                    <a href="/" className="flex ms-2">
                        <img className="h-7 sm:h-10" src="./logo-epic-game-news-64x64.png" alt="epic game news logo" />
                        <span className="ms-1 text-white hover:text-[#a335ee] duration-700 text-xl sm:text-3xl">Epic Game News</span>
                    </a>

                    <button onClick={() => setIsOpen(!isOpen)} className="p-2 block lg:hidden absolute right-0 top-0.5 sm:top-2 cursor-pointer">
                        {
                            isOpen ?    <XMarkIcon className="h-7 text-white lg:none" /> :
                                        <Bars3Icon className="h-7 text-white lg:none" />
                        }
                    </button>

                    <div className="flex">
                        <div className='hidden lg:block mr-2'>
                            <Searchbar/>
                        </div>
                        <ul className = {`
                                            text-base block lg:flex
                                            absolute bg-[#161616] lg:bg-transparent lg:static lg:items-center lg:z-auto z-[-1] left-0 w-full lg:w-auto transition-all duration-500 ease-in
                                            ${isOpen ? 'top-[44px] sm:top-[56px]' : 'top-[-490px]'}
                                        `}>
                            {pages.map((page) => (
                                <li key={page.name} className='lg:my-0 text-center py-4 lg:py-0 duration-700 hover:bg-[#202020] lg:hover:bg-transparent'>
                                    <a href={page.route} className="text-white hover:text-[#a335ee] duration-700 py-4 px-14 sm:px-60 md:px-80 lg:px-2">{page.name}</a>
                                </li>
                            ))}
                            
                            <div className='flex justify-center lg:hidden my-4'>
                                <Searchbar/>
                            </div>
                        </ul>
                    </div>

                </div>
            </div>
        </nav>
    );
}

export default Navbar;