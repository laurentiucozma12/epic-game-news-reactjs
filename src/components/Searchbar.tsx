function Searchbar() {
  return (
    <input
      type="search"
      className="w-40 rounded-lg bg-[#212021] px-1 text-white ring-4 ring-[#5F5E5F]
        duration-700 placeholder:text-[#5F5E5F] focus:border-[#a335ee] focus:outline-none focus:ring-4
        focus:ring-[#a335ee] xl:w-48"
      placeholder="Search"
    />
  );
}

export default Searchbar;
