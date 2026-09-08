import { motion } from 'framer-motion';
import { useState } from 'react';

const galleryCategories = ['All', 'Campus', 'Events', 'Sports', 'Cultural', 'Classrooms'];

const galleryItems = [
  { category: 'Campus', title: 'School Building Front View', description: 'Main entrance of R.K. Academic Point High School' },
  { category: 'Campus', title: 'School Campus', description: 'Aerial view of our well-maintained campus' },
  { category: 'Classrooms', title: 'Smart Classroom', description: 'Technology-enabled learning spaces' },
  { category: 'Classrooms', title: 'Science Laboratory', description: 'Well-equipped science lab for practical learning' },
  { category: 'Classrooms', title: 'Computer Lab', description: 'Modern computer laboratory with latest systems' },
  { category: 'Classrooms', title: 'Library', description: 'Stocked library with thousands of books' },
  { category: 'Events', title: 'Annual Day Celebration', description: 'Students performing at the annual function' },
  { category: 'Events', title: 'Republic Day Program', description: 'Flag hoisting ceremony and cultural program' },
  { category: 'Events', title: 'Science Exhibition', description: 'Students showcasing science projects' },
  { category: 'Events', title: 'Prize Distribution', description: 'Awarding meritorious students' },
  { category: 'Sports', title: 'Annual Sports Day', description: 'Students participating in track events' },
  { category: 'Sports', title: 'Cricket Tournament', description: 'Inter-school cricket competition' },
  { category: 'Sports', title: 'Football Match', description: 'Students playing in the school ground' },
  { category: 'Cultural', title: 'Durga Puja Celebration', description: 'Cultural program during Durga Puja' },
  { category: 'Cultural', title: 'Dance Performance', description: 'Students performing traditional dance' },
  { category: 'Cultural', title: 'Drama Competition', description: 'Students acting in a stage play' },
  { category: 'Campus', title: 'Playground', description: 'Spacious playground for sports and activities' },
  { category: 'Events', title: 'Teachers Day', description: 'Students celebrating Teachers Day' },
];

const colorMap: Record<string, string> = {
  'Campus': 'from-blue-600 to-blue-800',
  'Classrooms': 'from-emerald-600 to-emerald-800',
  'Events': 'from-purple-600 to-purple-800',
  'Sports': 'from-orange-600 to-orange-800',
  'Cultural': 'from-rose-600 to-rose-800',
};

const iconMap: Record<string, string> = {
  'Campus': 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
  'Classrooms': 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  'Events': 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
  'Sports': 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  'Cultural': 'M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3',
};

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="pt-24">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-[#1a2a5e] to-[#0f1b3d] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 text-lg max-w-2xl mx-auto"
          >
            Glimpses of life at R.K. Academic Point High School
          </motion.p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-24 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {galleryCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[#1a2a5e] text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group cursor-pointer"
              >
                <div className={`relative h-64 rounded-xl overflow-hidden bg-gradient-to-br ${colorMap[item.category]} shadow-md hover:shadow-xl transition-all duration-300`}>
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                    <svg className="w-12 h-12 text-white/80 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={iconMap[item.category]} />
                    </svg>
                    <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-white/70 text-sm">{item.description}</p>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#c8a415] font-semibold text-sm uppercase tracking-wider mb-2">Virtual Tour</p>
            <h2 className="section-title">Experience Our Campus</h2>
            <p className="section-subtitle">Take a virtual tour of our school facilities and infrastructure</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Campus Overview', desc: 'Walk through our beautiful campus' },
              { title: 'Laboratory Tour', desc: 'Explore our science and computer labs' },
              { title: 'Annual Day Highlights', desc: 'Best moments from our annual celebration' },
            ].map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-[#1a2a5e] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#c8a415]" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                </div>
                <h3 className="font-bold text-[#1a2a5e] mb-1">{video.title}</h3>
                <p className="text-gray-600 text-sm">{video.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
