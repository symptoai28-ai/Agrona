
import React from 'react';

const ResourceCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
    <a href="#" className="block p-6 bg-gray-50 border rounded-lg hover:bg-white hover:shadow-md transition-all">
        <h3 className="text-xl font-bold text-[#005ea2] mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
    </a>
);

const ResourcesSection: React.FC = () => {
    const resources = [
        { title: "Lender Portal", description: "Information and tools for our lending partners." },
        { title: "Forms & Publications", description: "Access all necessary application forms and official publications." },
        { title: "Resource Guides", description: "Comprehensive guides to our programs and services." },
        { title: "Success Stories", description: "See how our programs are making a difference across America." },
        { title: "Data & Reports", description: "Explore data, reports, and analytics on rural development." },
        { title: "Freedom of Information Act (FOIA)", description: "Learn how to make a FOIA request." },
    ];
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-[#002f6c] mb-12">Resources</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {resources.map(r => <ResourceCard key={r.title} {...r} />)}
                </div>
            </div>
        </section>
    );
};

export default ResourcesSection;
