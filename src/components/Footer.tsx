import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div className="flex items-center justify-between p-4 lg:px-20 xl:px-40 text-red-500 h-12 md:h-24 border-t-2 border-t-red-500">
            <Link href="/" className="font-bold text-xl" >Food Express Go</Link>
            <p>&copy;All Rights Reserved.</p>
        </div>
    );
};

export default Footer;