import { motion } from 'framer-motion';

export default function Faculty() {
  const facultyMembers = [
    {
      name: 'Principal',
      designation: 'Principal',
      qualification: 'M.A., B.Ed.',
      subject: 'Administration',
      experience: '25+ Years',
      description: 'Leading the institution with a vision for academic excellence and holistic student development.'
    },
    {
      name: 'Vice Principal',
      designation: 'Vice Principal',
      qualification: 'M.Sc., B.Ed.',
      subject: 'Science',
      experience: '20+ Years',
      description: 'Overseeing academic programs and ensuring quality teaching standards across all classes.'
    },
    {
      name: 'Head of English',
      designation: 'Senior Teacher',
      qualification: 'M.A. English, B.Ed.',
      subject: 'English Literature',
      experience: '15+ Years',
      description: 'Specialist in English language and literature with expertise in communication skills development.'
    },
    {
      name: 'Head of Mathematics',
      designation: 'Senior Teacher',
      qualification: 'M.Sc. Mathematics, B.Ed.',
      subject: 'Mathematics',
      experience: '18+ Years',
      description: 'Making mathematics accessible and enjoyable through innovative teaching methods.'
    },
    {
      name: 'Head of Science',
      designation: 'Senior Teacher',
      qualification: 'M.Sc. Physics, B.Ed.',
      subject: 'Physics',
      experience: '16+ Years',
      description: 'Fostering scientific temper and practical understanding through laboratory-based learning.'
    },
    {
      name: 'Head of Commerce',
      designation: 'Senior Teacher',
      qualification: 'M.Com., B.Ed.',
      subject: 'Accountancy',
      experience: '14+ Years',
      description: 'Preparing students for careers in commerce and business with practical knowledge.'
    },
    {
      name: 'Head of Arts',
      designation: 'Senior Teacher',
      qualification: 'M.A. History, B.Ed.',
      subject: 'History & Political Science',
      experience: '12+ Years',
      description: 'Creating awareness about society, governance, and historical perspectives.'
    },
    {
      name: 'Head of Primary Section',
      designation: 'Coordinator',
      qualification: 'M.A., D.El.Ed.',
      subject: 'Primary Education',
      experience: '15+ Years',
      description: 'Ensuring strong foundational learning with child-friendly teaching approaches.'
    },
  ];

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
            Our Faculty
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 text-lg max-w-2xl mx-auto"
          >
            Dedicated educators committed to nurturing the next generation
          </motion.p>
        </div>
      </section>

      {/* Faculty Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#c8a415] font-semibold text-sm uppercase tracking-wider mb-2">Our Team</p>
            <h2 className="section-title">Meet Our Educators</h2>
            <p className="section-subtitle">
              Our faculty comprises highly qualified and experienced professionals who are passionate about teaching and student development.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facultyMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#1a2a5e] to-[#2d4a8c] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                  <span className="text-[#c8a415] font-bold text-xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-[#1a2a5e]">{member.name}</h3>
                  <p className="text-[#c8a415] text-sm font-medium">{member.designation}</p>
                  <p className="text-gray-500 text-xs mt-1">{member.qualification}</p>
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <p className="text-xs text-gray-600"><span className="font-medium">Subject:</span> {member.subject}</p>
                    <p className="text-xs text-gray-600"><span className="font-medium">Experience:</span> {member.experience}</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-2 leading-relaxed">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: '50+', label: 'Qualified Teachers', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
              { number: '85%', label: 'Post Graduates', icon: 'M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z' },
              { number: '15+', label: 'Avg. Years Experience', icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' },
              { number: '100%', label: 'B.Ed. Qualified', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm text-center"
              >
                <div className="w-12 h-12 bg-[#1a2a5e]/5 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-[#1a2a5e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={stat.icon}/></svg>
                </div>
                <p className="text-3xl font-bold text-[#1a2a5e]">{stat.number}</p>
                <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[#c8a415] font-semibold text-sm uppercase tracking-wider mb-2">Our Approach</p>
              <h2 className="text-3xl font-bold text-[#1a2a5e] mb-6">Teaching Philosophy</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Our faculty believes that every student has unique potential waiting to be discovered. We employ diverse teaching strategies to cater to different learning styles and ensure no child is left behind.
                </p>
                <p>
                  Regular professional development workshops keep our teachers updated with the latest pedagogical techniques and educational technology. We encourage innovation in the classroom while maintaining strong foundational teaching principles.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {[
                'Student-centered learning approach',
                'Regular professional development programs',
                'Integration of technology in teaching',
                'Parent-teacher collaboration',
                'Continuous assessment and feedback',
                'Value-based education emphasis',
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg"
                >
                  <div className="w-8 h-8 bg-[#c8a415]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[#c8a415]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                  </div>
                  <span className="text-gray-700 font-medium text-sm">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
