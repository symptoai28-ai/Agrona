
import React from 'react';

const HomeIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
);
const BusinessIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
);
const CommunityIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
);

const Card: React.FC<{icon: React.ReactNode, title: string, links: string[]}> = ({icon, title, links}) => (
    <div className="bg-white p-8 border rounded-lg shadow-sm hover:shadow-lg transition-shadow">
        <div className="text-[#005ea2] mb-4">{icon}</div>
        <h3 className="text-2xl font-bold text-[#002f6c] mb-4">{title}</h3>
        <ul className="space-y-2">
            {links.map(link => (
                <li key={link}><a href="#" className="text-gray-700 hover:text-[#005ea2] hover:underline">{link}</a></li>
            ))}
        </ul>
    </div>
);

const FindLoansGrants: React.FC = () => {
    const cardData = [
        { icon: <HomeIcon className="w-12 h-12"/>, title: "Homes", links: ["Single Family Housing", "Multi-Family Housing", "Guaranteed Loan Program"]},
        { icon: <BusinessIcon className="w-12 h-12"/>, title: "Businesses", links: ["Business & Industry Loans", "Rural Energy for America", "Value-Added Producer Grants"]},
        { icon: <CommunityIcon className="w-12 h-12"/>, title: "Communities", links: ["Community Facilities", "Water & Waste Disposal", "Telecommunications"]},
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-[#002f6c] mb-12">Find Loans & Grants</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {cardData.map(data => <Card key={data.title} {...data} />)}
                </div>
            </div>
        </section>
    );
};

export default FindLoansGrants;
