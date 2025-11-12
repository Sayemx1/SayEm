import React, { useState } from 'react';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: '#about', label: 'About' },
        { href: '#education', label: 'Education' },
        { href: '#skills', label: 'Skills' },
        { href: '#contact', label: 'Contact' },
    ];

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <header className="bg-slate-950/80 backdrop-blur-sm sticky top-0 z-50">
            <nav className="container mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
                {/* Left Section */}
                <div className="flex-1 flex justify-start">
                    <a href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-500">
                        Md SayEm
                    </a>
                </div>

                {/* Centered Navigation (Desktop) */}
                <div className="hidden md:flex justify-center items-center space-x-8">
                    {navLinks.map(link => (
                        <a key={link.href} href={link.href} className="text-slate-300 hover:text-indigo-400 transition-colors duration-300">
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Right Section */}
                <div className="flex-1 flex justify-end">
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-slate-900">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
                        {navLinks.map(link => (
                             <a key={link.href} href={link.href} onClick={handleLinkClick} className="text-slate-300 hover:text-indigo-400 block px-3 py-2 rounded-md text-base font-medium">
                                {link.label}
                             </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;