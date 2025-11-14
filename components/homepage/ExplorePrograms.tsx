
import React from 'react';

const ProgramCard: React.FC<{icon: string, title: string, description: string}> = ({ icon, title, description }) => (
    <a href="#" className="block p-6 bg-white rounded-lg border text-center hover:shadow-lg hover:border-blue-300 transition-all group">
        <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">{icon}</div>
        <h3 className="text-xl font-bold text-[#002f6c] mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </a>
);

const ExplorePrograms: React.FC = () => {
    const programs = [
        { icon: "💧", title: "Water & Wastewater", description: "Providing safe drinking water and sanitary waste disposal for rural areas."},
        { icon: "⚡️", title: "Energy", description: "Funding for rural energy projects, from renewable systems to energy efficiency."},
        { icon: "🌐", title: "High-Speed Internet", description: "Expanding broadband access to connect rural America to the world."},
        { icon: "💡", title: "Electricity", description: "Ensuring reliable and affordable electricity for rural communities."},
        { icon: "🏥", title: "Community Facilities", description: "Financing essential community facilities like hospitals, schools, and public safety buildings."},
        { icon: "📈", title: "Business Programs", description: "Supporting rural businesses to create jobs and stimulate economic growth."}
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-[#002f6c] mb-12">Explore Our Programs</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programs.map(p => <ProgramCard key={p.title} {...p} />)}
                </div>
            </div>
        </section>
    );
};

export default ExplorePrograms;
