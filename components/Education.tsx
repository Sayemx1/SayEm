
import React from 'react';
import AnimatedSection from './AnimatedSection';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">{children}</h2>
);

interface EducationItemProps {
  degree: string;
  institution: string;
  subject: string;
  year: string;
  result: string;
}

const EducationItem: React.FC<EducationItemProps> = ({ degree, institution, subject, year, result }) => (
  <div className="relative pl-8 sm:pl-32 py-6 group">
    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-700 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-400 after:border-4 after:box-content after:border-slate-900 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
      <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-indigo-200 bg-indigo-900/50 rounded-full">{year}</time>
      <div className="text-xl font-bold text-white">{degree} - {subject}</div>
    </div>
    <div className="pl-8 sm:pl-32">
        <p className="text-slate-400 mb-1">{institution}</p>
        <p className="text-slate-500">Result (GPA): {result}</p>
    </div>
  </div>
);


const Education: React.FC = () => {
    const educationData = [
        { degree: 'B.A (Hons)', institution: 'Hazi Misir Ali University College (HMC)', subject: 'English', year: 'Ongoing', result: '—' },
        { degree: 'H.S.C', institution: 'Govt. Kadam Rasul College', subject: 'Science', year: '2024', result: '4.17' },
        { degree: 'S.S.C', institution: 'Fatulla Pilot High School', subject: 'Science', year: '2022', result: '4.67' },
    ];

    return (
        <AnimatedSection id="education" className="py-20">
            <SectionTitle>Education</SectionTitle>
            <div className="max-w-4xl mx-auto">
                {educationData.map((item, index) => (
                    <EducationItem key={index} {...item} />
                ))}
            </div>
        </AnimatedSection>
    );
};

export default Education;