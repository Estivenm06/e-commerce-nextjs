const Header = () => {
  return (
    <header className="bg-white w-full border-b-2 border-[#d4d2d5]">
      <nav className="h-[100px] max-w-[1200px] mx-auto flex flex-wrap justify-between items-center">
        <ul className="flex items-center gap-5">
          <button className="text-[#353535] p-1 font-semibold text-xl">
            Home
          </button>
          <button className="text-[#353535] p-1 font-semibold text-xl">
            Shop
          </button>
          <button className="text-[#353535] p-1 font-semibold text-xl">
            Contact
          </button>
        </ul>
        <ul className="flex items-center gap-5">
          <article>seeker</article>
          <button className="py-2 px-4 rounded-lg text-white bg-[#3c6e71] text-center font-bold ring-1 ring-stone-200 cursor-pointer hover:bg-white hover:text-[#353535] transition-all duration-200 ease-in">
            Register
          </button>
          <button className="py-2 px-4 rounded-lg text-[#353535] text-center font-bold ring-1 ring-stone-200 cursor-pointer">
            Log in
          </button>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
