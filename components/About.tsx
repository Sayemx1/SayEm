
import React from 'react';
import AnimatedSection from './AnimatedSection';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">{children}</h2>
);

const About: React.FC = () => {
    return (
        <AnimatedSection id="about" className="py-20">
            <SectionTitle>About Me</SectionTitle>
            <div className="max-w-4xl mx-auto bg-slate-900/50 rounded-lg p-8 shadow-lg border border-slate-700">
                <p className="text-lg text-slate-300 leading-relaxed text-center">
                    I am a highly motivated and dedicated student with a strong academic background in Science, currently pursuing a Bachelor’s degree in English. I am seeking to develop professional skills and gain experience in a dynamic environment where I can contribute effectively to organizational goals and enhance my personal growth.
                </p>
            </div>
        </AnimatedSection>
    );
};

export default About;