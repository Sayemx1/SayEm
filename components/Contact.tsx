
import React from 'react';
import { PhoneIcon, EmailIcon, LocationIcon, LinkedInIcon, InstagramIcon, FacebookIcon, XIcon } from './icons';
import AnimatedSection from './AnimatedSection';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">{children}</h2>
);

interface ContactItemProps {
    icon: React.ReactNode;
    title: string;
    value: string;
    href?: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, title, value, href }) => {
    const content = (
        <div className="flex items-center space-x-4">
            <div className="bg-slate-900 p-3 rounded-full text-indigo-400">
                {icon}
            </div>
            <div>
                <h4 className="font-semibold text-white">{title}</h4>
                <p className="text-slate-400">{value}</p>
            </div>
        </div>
    );
    
    return href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="hover:bg-slate-900/50 p-4 rounded-lg transition-colors duration-300 block">{content}</a>
    ) : (
        <div className="p-4">{content}</div>
    );
};

const Contact: React.FC = () => {
    return (
        <AnimatedSection id="contact" className="py-20">
            <SectionTitle>Get In Touch</SectionTitle>
            <div className="max-w-4xl mx-auto text-center mb-12">
                <p className="text-lg text-slate-400">I'm currently seeking new opportunities. Feel free to reach out to me. References are available upon request.</p>
            </div>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                <ContactItem icon={<PhoneIcon />} title="Phone" value="01970779935" href="tel:01970779935"/>
                <ContactItem icon={<EmailIcon />} title="Email" value="sayemh120@gmail.com" href="mailto:sayemh120@gmail.com"/>
                <ContactItem icon={<LocationIcon />} title="Address" value="Ramarbag, Narayanganj Sadar, Narayanganj" />
                <ContactItem icon={<LinkedInIcon />} title="LinkedIn" value="linkedin.com/in/sayemx" href="https://linkedin.com/in/sayemx" />
                <ContactItem icon={<InstagramIcon />} title="Instagram" value="@say.e.m" href="https://www.instagram.com/say.e.m/"/>
                <ContactItem icon={<FacebookIcon />} title="Facebook" value="Sayemx12" href="https://www.facebook.com/Sayemx12"/>
                <ContactItem icon={<XIcon />} title="X (Twitter)" value="@Say_e_m" href="https://x.com/Say_e_m"/>
            </div>
        </AnimatedSection>
    );
};

export default Contact;