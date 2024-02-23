
function Navbar() {

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
                        <ul className="flex text-xl">
                            <li><a href="/" className="text-white p-2">Video Games</a></li>
                            <li><a href="/" className="text-white p-2">Categories</a></li>
                            <li><a href="/" className="text-white p-2">Platforms</a></li>
                            <li><a href="/" className="text-white p-2">About</a></li>
                            <li><a href="/" className="text-white p-2">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>    
    );
}

export default Navbar