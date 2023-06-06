import Image from 'next/image';
import { MagnifyingGlassIcon, UserCircleIcon, MagnifyingGlassCircleIcon } from '@heroicons/react/24/solid';

function Header() {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10
      rouned-b-2xl">

        <div
            className="
              absolute
              top-0
              w-full
              h-96
              bg-gradient-to-br
              from-[#800020]
              to-[#722f37]
              rounded-md
              filter
              blur-3xl
              opacity-50
              -z-50
            "
        />

        <Image
          src="https://static.vecteezy.com/system/resources/previews/002/732/063/original/full-glass-of-red-wine-icon-illustration-free-vector.jpg"
          alt="Wine Logo"
          width={300}
          height={100}
          className="w-10 md:w-20 pb-10 md:pb-0 object-contain"
        />

        <div className="">
          {/* Search Box */}
          <form className="flex items=center space-x-5 bg-white rounded-md p-2 shadow-md
              flex-1 md:flex-initial">
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
            <input 
              type="text" 
              placeholder="Wine Appeallation" 
              className="flex-1 outline-none" />
            <button type='submit' hidden>
              Search
            </button>
          </form>
        </div>
      </div>

      <div className="flex items-center justify-center px-5 md:py-5">
        <p className="flex items-center p-5 text-sm font-light pr-5 shadow-xl
        rounded-xl w-fit bg-white italic max-w-3xl text-[#800020]">
          <MagnifyingGlassCircleIcon className="inline-block h-10 w-10 text-
          [#005501] mr-1"/>
          Want to find similar wines with wine image?
        </p>
      </div>
    </header>
  );
}

export default Header;
