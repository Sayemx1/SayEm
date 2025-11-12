
import React from 'react';
import { LinkedInIcon, EmailIcon, InstagramIcon, FacebookIcon, XIcon } from './icons';

const Hero: React.FC = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center py-20 px-6 md:px-12">
            <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between gap-12">
                <div className="lg:max-w-xl text-center lg:text-left">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4">
                        Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-500">Md SayEm</span>.
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-400 mb-8">
                        A highly motivated and dedicated student transitioning from Science to English, passionate about professional growth and lifelong learning.
                    </p>
                    <div className="flex items-center justify-center lg:justify-start space-x-6">
                        <a href="https://linkedin.com/in/sayemx" target="_blank" rel="noopener noreferrer" title="LinkedIn" className="text-slate-300 hover:text-indigo-400 transition-colors duration-300"><LinkedInIcon className="w-6 h-6" /></a>
                        <a href="https://www.instagram.com/say.e.m/" target="_blank" rel="noopener noreferrer" title="Instagram" className="text-slate-300 hover:text-indigo-400 transition-colors duration-300"><InstagramIcon className="w-6 h-6" /></a>
                        <a href="https://www.facebook.com/Sayemx12" target="_blank" rel="noopener noreferrer" title="Facebook" className="text-slate-300 hover:text-indigo-400 transition-colors duration-300"><FacebookIcon className="w-6 h-6" /></a>
                        <a href="https://x.com/Say_e_m" target="_blank" rel="noopener noreferrer" title="X" className="text-slate-300 hover:text-indigo-400 transition-colors duration-300"><XIcon className="w-6 h-6" /></a>
                        <a href="mailto:sayemh120@gmail.com" title="Email" className="text-slate-300 hover:text-indigo-400 transition-colors duration-300"><EmailIcon className="w-6 h-6" /></a>
                    </div>
                </div>
                <div className="flex-shrink-0">
                    <img 
                        src="https://i.imgur.com/riaJsYV.jpeg"
                        alt="Md SayEm" 
                        className="rounded-2xl w-64 h-64 md:w-80 md:h-80 object-cover border-4 border-indigo-500/50 shadow-2xl shadow-indigo-500/20"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;