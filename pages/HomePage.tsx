
import React from 'react';
import Header from '../components/homepage/Header';
import NavigationBar from '../components/homepage/NavigationBar';
import HeroSection from '../components/homepage/HeroSection';
import FindLoansGrants from '../components/homepage/FindLoansGrants';
import ExplorePrograms from '../components/homepage/ExplorePrograms';
import SupportTools from '../components/homepage/SupportTools';
import ResourcesSection from '../components/homepage/ResourcesSection';
import NewsAndEvents from '../components/homepage/NewsAndEvents';
import TrendingTopics from '../components/homepage/TrendingTopics';
import Footer from '../components/homepage/Footer';
import FloatingChatWidget from '../components/chat/FloatingChatWidget';

const HomePage: React.FC = () => {
  return (
    <div className="bg-white">
      <Header />
      <NavigationBar />
      <main>
        <HeroSection
          imageUrl="https://picsum.photos/1600/600?image=1056"
          title="Disaster Resiliency and Recovery Resources"
          subtitle="USDA Rural Development is here to help rural communities affected by disaster."
          buttonText="Learn More"
        />
        <HeroSection
          imageUrl="https://picsum.photos/1600/600?image=553"
          title="Water & Waste Disposal Loan & Grant Program"
          subtitle="Funding for clean and reliable drinking water systems, sanitary sewage disposal, sanitary solid waste disposal, and storm water drainage."
          buttonText="Explore WEP Grants"
          reverse
        />
        <FindLoansGrants />
        <ExplorePrograms />
        <SupportTools />
        <ResourcesSection />
        <NewsAndEvents />
        <TrendingTopics />
      </main>
      <Footer />
      <FloatingChatWidget />
    </div>
  );
};

export default HomePage;
