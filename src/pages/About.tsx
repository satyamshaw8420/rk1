import { motion } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function About() {
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
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 text-lg max-w-2xl mx-auto"
          >
            Discover the legacy and vision behind R.K. Academic Point High School
          </motion.p>
        </div>
      </section>

      {/* School History */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#c8a415] font-semibold text-sm uppercase tracking-wider mb-2">Our Story</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a2a5e] mb-6">
                A Journey of Excellence Since 1987
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  R.K. Academic Point High School (H.S.) was established in 1987 in the heart of Salkia, Howrah, West Bengal. What began as a modest educational initiative has grown into one of the most respected coeducational English medium higher secondary schools in the region.
                </p>
                <p>
                  Located at 40/1, Benaras Road, Salkia, our institution has been serving the community for over three decades, providing quality education from Nursery to Class XII. Our commitment to academic excellence, combined with holistic development, has made us a preferred choice for parents seeking the best for their children.
                </p>
                <p>
                  As a recognised Higher Secondary School, we follow a comprehensive curriculum that prepares students not just for examinations, but for life. Our English medium instruction ensures that students are well-equipped for higher education and professional careers.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#1a2a5e]/5 to-[#c8a415]/5 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                    <p className="text-3xl font-bold text-[#1a2a5e]">1987</p>
                    <p className="text-sm text-gray-500 mt-1">Year Established</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                    <p className="text-3xl font-bold text-[#1a2a5e]">37+</p>
                    <p className="text-sm text-gray-500 mt-1">Years of Service</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                    <p className="text-3xl font-bold text-[#1a2a5e]">N-XII</p>
                    <p className="text-sm text-gray-500 mt-1">Classes Offered</p>
                  </div>
                  <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                    <p className="text-3xl font-bold text-[#1a2a5e]">1000+</p>
                    <p className="text-sm text-gray-500 mt-1">Students Enrolled</p>
                  </div>
                </div>
                <div className="mt-6 bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-bold text-[#1a2a5e] mb-2">Our Recognition</h4>
                  <p className="text-gray-600 text-sm">
                    Recognised Higher Secondary School affiliated with the West Bengal Board of Secondary Education and the West Bengal Council of Higher Secondary Education.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              <div className="w-14 h-14 bg-[#1a2a5e] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#c8a415]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1a2a5e] mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be a leading educational institution that empowers students with knowledge, values, and skills to become responsible citizens and future leaders. We envision a school where every child discovers their potential and develops the confidence to pursue their dreams.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              <div className="w-14 h-14 bg-[#c8a415] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-[#1a2a5e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h3 className="text-2xl font-bold text-[#1a2a5e] mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide accessible, quality education that nurtures intellectual curiosity, fosters moral values, and promotes physical well-being. We are committed to creating an inclusive learning environment where students from all backgrounds can thrive and excel.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#c8a415] font-semibold text-sm uppercase tracking-wider mb-2">Our Foundation</p>
            <h2 className="section-title">Core Values</h2>
            <p className="section-subtitle">The principles that guide everything we do at R.K. Academic Point</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Academic Integrity', desc: 'Upholding the highest standards of honesty and excellence in all academic pursuits', color: 'from-blue-500/10 to-blue-600/5' },
              { title: 'Respect', desc: 'Fostering mutual respect among students, teachers, and the wider community', color: 'from-amber-500/10 to-amber-600/5' },
              { title: 'Innovation', desc: 'Encouraging creative thinking and embracing modern teaching methodologies', color: 'from-green-500/10 to-green-600/5' },
              { title: 'Inclusivity', desc: 'Creating a welcoming environment for students of all backgrounds and abilities', color: 'from-purple-500/10 to-purple-600/5' },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 rounded-xl bg-gradient-to-br ${value.color} border border-gray-100`}
              >
                <h3 className="font-bold text-[#1a2a5e] mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#c8a415] font-semibold text-sm uppercase tracking-wider mb-2">Our Journey</p>
            <h2 className="section-title">Milestones</h2>
          </motion.div>

          <div className="space-y-8">
            {[
              { year: '1987', event: 'R.K. Academic Point was established in Salkia, Howrah as a coeducational English medium school' },
              { year: '1995', event: 'Expanded to include higher secondary classes, becoming a full-fledged H.S. school' },
              { year: '2005', event: 'Introduced modern teaching aids and computer education in the curriculum' },
              { year: '2015', event: 'Celebrated 28 years of academic excellence with over 5000 alumni' },
              { year: '2024', event: 'Continuing to serve the community with updated infrastructure and teaching methodologies' },
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-lg font-bold text-[#c8a415]">{milestone.year}</span>
                </div>
                <div className="flex-shrink-0 w-3 h-3 bg-[#1a2a5e] rounded-full mt-2 ring-4 ring-[#1a2a5e]/10" />
                <div className="flex-1 bg-white p-4 rounded-lg shadow-sm">
                  <p className="text-gray-700 text-sm">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
