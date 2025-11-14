
import React from 'react';

const NewsAndEvents: React.FC = () => {
  const newsItems = [
    "USDA Announces $500 Million for Rural Broadband",
    "New Grant Opportunities for Value-Added Agriculture",
    "Secretary Vilsack Visits Rural Iowa to Highlight Biofuel Investments",
    "Rural Development Celebrates Community Facility Upgrades in Alaska",
  ];
  const events = [
    { date: "AUG 28", title: "Webinar: Applying for Water & Environmental Programs" },
    { date: "SEP 15", title: "Deadline: Rural Energy for America Program Grants" },
    { date: "OCT 05", title: "National Co-op Month Celebration" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-[#002f6c] mb-6 border-b-4 border-[#005ea2] pb-2">Recent News</h2>
            <ul className="space-y-4">
              {newsItems.map(item => (
                <li key={item}><a href="#" className="text-lg text-gray-800 hover:text-[#005ea2] hover:underline">{item}</a></li>
              ))}
            </ul>
            <a href="#" className="text-[#005ea2] font-semibold mt-6 inline-block">More News →</a>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#002f6c] mb-6 border-b-4 border-[#005ea2] pb-2">Upcoming Events</h2>
            <ul className="space-y-4">
              {events.map(event => (
                <li key={event.title} className="flex items-start space-x-4">
                  <div className="text-center font-bold text-white bg-[#005ea2] rounded-md p-2 flex-shrink-0">
                    <span className="block text-xs">{event.date.split(' ')[0]}</span>
                    <span className="block text-xl">{event.date.split(' ')[1]}</span>
                  </div>
                  <a href="#" className="text-lg text-gray-800 hover:text-[#005ea2] hover:underline pt-1">{event.title}</a>
                </li>
              ))}
            </ul>
            <a href="#" className="text-[#005ea2] font-semibold mt-6 inline-block">More Events →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsAndEvents;
