import Image from 'next/image';
import { MagnifyingGlassIcon, UserCircleIcon } from '@heroicons/react/24/solid';

function Header() {
  return (
    <header>
      <Image
        src="https://static.vecteezy.com/system/resources/previews/002/732/063/original/full-glass-of-red-wine-icon-illustration-free-vector.jpg"
        alt="Wine Logo"
        width={300}
        height={100}
        className="w-10 md:w-20 pb-10 md:pb-0 object-contain"
      />

      <div>
        {/* Search Box */}
        <form className="flex items=center space-x-5 bg-white rounded-md p-2 shadow-md
            flex-1 md:flex-initial">
          <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
          <input 
            type="text" 
            placeholder="Wine Producer" 
            className="flex-1 outline-none" />
          <button type='submit' hidden>Search</button>
        </form>
      
        {/* Avatar */}
      </div>
    </header>
  );
}

export default Header;
