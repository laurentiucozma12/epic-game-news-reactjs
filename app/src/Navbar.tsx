import MobileButton from './MobileButton.jsx'

function Navbar() {
    const pages = [
        {name: "HOME", route: "/"},
        {name: "VIDEO GAMES", route: "/video-games"},
        {name: "CATEGORIES", route: "/categories"},
        {name: "PLATFORMS", route: "/platforms"},
        {name: "ABOUT", route: "/about"},
        {name: "CONTACT", route: "/contact"},
    ];

    return (
        <nav className="shadow-md w-full sticky top-0 left-0">
            <div className="md-flex bg-zinc-900 py-2">
                <div className="font-bold cursor-pointer flex items-center justify-between">
                    <a href="/" className="flex">
                        <img className="w-10 h-10" src="./public/logo-epic-game-news-64x64.png" alt="epic game news logo" />
                        <span className="ms-1 text-white text-3xl">Epic Game News</span>
                    </a>
                    <div className="flex">
                        <input type="search" className="rounded" />
                        <ul className="flex text-base">
                            {pages.map((page) => (
                                <li key={page.name}>
                                    <a href={page.route} className="text-white p-2">{page.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <MobileButton/>
                </div>
            </div>
        </nav>    
    );
}

export default Navbar