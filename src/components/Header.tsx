import React from 'react'
import Image from 'next/image';

function Header() {
    return <header>
        <Image
            src="https://i0.wp.com/nyiwinecompetition.com/wp-content/uploads/2017/03/wine-glasses-header-optimized.jpg?resize=768%2C240&ssl=1"
            alt="Wine Store Logo"
            width={300}
            height={100}
            className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
        />
    </header>;
}

export default Header