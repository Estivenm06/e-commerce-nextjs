import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white w-full border-b-2 border-[#d4d2d5]">
      <nav className="flex flex-col-reverse sm:flex-row flex-wrap justify-between items-center w-full max-w-screen-xl mx-auto min-h-[80px] px-4 sm:px-10 py-4 gap-4">
        {/* Left Navigation */}
        <ul className="flex flex-wrap items-center gap-4 md:gap-6">
          <li>
            <Link
              href={"/"}
              className="text-[#353535] p-1 font-semibold text-lg sm:text-xl"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/shop"}
              className="text-[#353535] p-1 font-semibold text-lg sm:text-xl"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              href={"/contact"}
              className="text-[#353535] p-1 font-semibold text-lg sm:text-xl"
            >
              Contact
            </Link>
          </li>
        </ul>
        {/* Right Actions */}
        <ul className="flex flex-wrap items-center gap-4 md:gap-5">
          <li className="text-sm sm:text-base font-medium text-[#353535]">
            seeker
          </li>
          <li>
            <Link
              href={"/register"}
              className="py-2 px-4 rounded-lg text-white bg-[#3c6e71] font-bold ring-1 ring-stone-200 cursor-pointer hover:bg-white hover:text-[#353535] transition-all duration-200 ease-in text-sm sm:text-base"
            >
              Register
            </Link>
          </li>
          <li>
            <Link
              href={"/login"}
              className="py-2 px-4 rounded-lg text-[#353535] font-bold ring-1 ring-stone-200 cursor-pointer hover:bg-[#f5f5f5] transition-all duration-200 ease-in text-sm sm:text-base"
            >
              Log in
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
