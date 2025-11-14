
import React, { useState } from 'react';

const TrendingTopics: React.FC = () => {
  const [activeTab, setActiveTab] = useState('trending');

  const trendingTopics = ["Climate-Smart Agriculture", "Broadband Equity", "Rural Healthcare Access", "Supply Chain Resiliency"];
  const successStories = ["Community Solar in Colorado", "Farm to School in Vermont", "Broadband for a Tribal Nation in Oklahoma", "Wastewater System Upgrade in rural Georgia"];

  const TabButton: React.FC<{id: string; children: React.ReactNode}> = ({id, children}) => (
      <button onClick={() => setActiveTab(id)} className={`px-6 py-3 font-semibold text-lg ${activeTab === id ? 'text-[#002f6c] border-b-4 border-[#005ea2]' : 'text-gray-600'}`}>
          {children}
      </button>
  );

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="border-b mb-8">
            <TabButton id="trending">Trending Topics</TabButton>
            <TabButton id="stories">Success Stories</TabButton>
        </div>
        <div>
          {activeTab === 'trending' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {trendingTopics.map(topic => (
                <a key={topic} href="#" className="block p-4 bg-gray-100 rounded text-gray-800 hover:bg-[#005ea2] hover:text-white transition-colors">{topic}</a>
              ))}
            </div>
          )}
          {activeTab === 'stories' && (
             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {successStories.map(story => (
                <a key={story} href="#" className="block p-4 bg-gray-100 rounded text-gray-800 hover:bg-[#005ea2] hover:text-white transition-colors">{story}</a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TrendingTopics;
