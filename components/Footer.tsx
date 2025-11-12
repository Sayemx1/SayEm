
import React from 'react';
import { LinkedInIcon, InstagramIcon, FacebookIcon, XIcon, EmailIcon } from './icons';

const Footer: React.FC = () => {
    const socialLinks = [
        { href: 'https://linkedin.com/in/sayemx', icon: <LinkedInIcon />, title: 'LinkedIn' },
        { href: 'https://www.instagram.com/say.e.m/', icon: <InstagramIcon />, title: 'Instagram' },
        { href: 'https://www.facebook.com/Sayemx12', icon: <FacebookIcon />, title: 'Facebook' },
        { href: 'https://x.com/Say_e_m', icon: <XIcon />, title: 'X' },
        { href: 'mailto:sayemh120@gmail.com', icon: <EmailIcon />, title: 'Email' },
    ];

    return (
        <footer className="bg-slate-950 border-t border-slate-900">
            <div className="container mx-auto px-6 md:px-12 py-6 text-center text-slate-500">
                <div className="flex justify-center space-x-6 mb-4">
                    {socialLinks.map(link => (
                        <a 
                            key={link.href} 
                            href={link.href} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            title={link.title}
                            className="text-slate-400 hover:text-indigo-400 transition-colors duration-300"
                        >
                            {React.cloneElement(link.icon, { className: 'w-6 h-6' })}
                        </a>
                    ))}
                </div>
                <p>&copy; {new Date().getFullYear()} Md SayEm. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;