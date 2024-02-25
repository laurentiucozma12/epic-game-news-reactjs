import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Searchbar from './Searchbar';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo/logo-epic-game-news-64x64.png';

interface Page {
  name: string;
  route: string;
}

function Navbar() {
  const pages: Page[] = [
    { name: 'HOME', route: '/home' },
    { name: 'VIDEO GAMES', route: '/video-games' },
    { name: 'CATEGORIES', route: '/categories' },
    { name: 'PLATFORMS', route: '/platforms' },
    { name: 'ABOUT', route: '/about' },
    { name: 'CONTACT', route: '/contact' },
  ];

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav
      className="fixed left-0 top-0 z-50 w-full bg-transparent shadow-md 
                xl:bg-[#0f100fe6]"
    >
      <div
        className=" z-10 mx-auto max-w-7xl bg-[#0f100fe6] px-6 
                    lg:px-4 
                    xl:bg-transparent
                    2xl:px-0"
      >
        <div className="py-2">
          <div className="flex items-center font-bold sm:justify-center xl:justify-between">
            {/* Link to Home Page */}
            <Link to="/" className="flex">
              <img
                className="h-6 sm:h-10"
                src={logo}
                alt="epic game news logo"
              />
              <span className="ms-1 text-[#a335ee] duration-700 hover:text-[#b545ff] sm:mt-0.5 sm:text-3xl">
                Epic Game News
              </span>
            </Link>
            {/* Mobile Menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="absolute right-0 top-0.5 mr-4 block cursor-pointer p-1 sm:top-2 xl:hidden"
            >
              {isOpen ? (
                <XMarkIcon className="xl:none h-7 text-[#a335ee] duration-700 hover:text-[#b545ff] sm:h-8" />
              ) : (
                <Bars3Icon className="xl:none h-7 text-[#a335ee] duration-700 hover:text-[#b545ff] sm:h-8" />
              )}
            </button>
            {/* Menu */}
            <div className="flex">
              {/* Searchbar for xl screens */}
              <div className="mr-2 mt-0.5 hidden xl:block">
                <Searchbar />
              </div>
              <ul
                className={`
                            absolute left-0 z-[-1] block w-full bg-[#171717e6] text-base transition-all duration-500 ease-in
                            xl:static xl:z-auto xl:flex xl:bg-transparent
                            ${isOpen ? 'top-10 sm:top-14' : 'top-[-490px]'}
                          `}
              >
                {pages.map((page, index) => (
                  <li
                    key={page.name}
                    className=" py-1 text-center duration-700 hover:bg-[#212121cc] sm:py-4
                                xl:my-0
                                xl:py-0 xl:pt-0.5 xl:hover:bg-transparent"
                  >
                    <Link
                      to={page.route}
                      className={`px-14 py-1 text-white duration-700 hover:text-[#b545ff] sm:px-60
                                  sm:py-[18px] sm:text-xl md:px-80
                                  xl:px-4 xl:text-base xl:hover:bg-[#212121cc] ${index === pages.length - 1 ? 'xl:pe-0' : ''}`}
                    >
                      {page.name}
                    </Link>
                  </li>
                ))}
                {/* Searchbar for smaller screens */}
                <div className="my-2 flex justify-center sm:my-4 xl:hidden">
                  <Searchbar />
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
