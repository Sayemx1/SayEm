
import React from 'react';
import AnimatedSection from './AnimatedSection';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">{children}</h2>
);

const SkillBadge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span className="bg-slate-800 text-indigo-300 text-sm font-medium mr-2 mb-2 px-3 py-1.5 rounded-full transition-all duration-300 ease-in-out hover:bg-indigo-500 hover:text-white hover:scale-105 cursor-pointer">{children}</span>
);

const SkillCategory: React.FC<{ title: string, skills: string[] }> = ({ title, skills }) => (
    <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-700">
        <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
        <div className="flex flex-wrap">
            {skills.map((skill, index) => (
                <SkillBadge key={index}>{skill}</SkillBadge>
            ))}
        </div>
    </div>
);

const Skills: React.FC = () => {
    const technicalSkills = ['Adobe Photoshop'];
    const softSkills = ['Teamwork and Collaboration', 'Problem Solving', 'Time Management'];
    const personalStrengths = ['Punctual and disciplined', 'Eager to learn and adapt', 'Friendly and cooperative attitude', 'Strong work ethic'];
    const languages = ['Bangla (Native)', 'English (Good)'];

    return (
        <AnimatedSection id="skills" className="py-20">
            <SectionTitle>Skills & Strengths</SectionTitle>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <SkillCategory title="Technical Skills" skills={technicalSkills} />
                <SkillCategory title="Soft Skills" skills={softSkills} />
                <SkillCategory title="Personal Strengths" skills={personalStrengths} />
                <div className="md:col-span-2 lg:col-span-3">
                     <SkillCategory title="Language Proficiency" skills={languages} />
                </div>
            </div>
        </AnimatedSection>
    );
};

export default Skills;