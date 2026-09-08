import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Academics() {
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
            Academics
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 text-lg max-w-2xl mx-auto"
          >
            Comprehensive curriculum designed for holistic development from Nursery to Class XII
          </motion.p>
        </div>
      </section>

      {/* Academic Levels */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#c8a415] font-semibold text-sm uppercase tracking-wider mb-2">Our Programs</p>
            <h2 className="section-title">Academic Levels</h2>
            <p className="section-subtitle">Structured learning pathways for every stage of your child's education</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                level: 'Pre-Primary',
                classes: 'Nursery - UKG',
                description: 'Play-based learning that builds foundational skills in literacy, numeracy, and social interaction in a nurturing environment.',
                features: ['Activity-based learning', 'Phonics & basic numeracy', 'Creative arts & crafts', 'Motor skill development'],
                color: 'border-l-4 border-l-pink-400'
              },
              {
                level: 'Primary',
                classes: 'Class I - V',
                description: 'Building strong academic foundations with focus on reading, writing, mathematics, and environmental awareness.',
                features: ['English medium instruction', 'Mathematics & Science', 'Social studies', 'Computer education'],
                color: 'border-l-4 border-l-blue-400'
              },
              {
                level: 'Middle School',
                classes: 'Class VI - VIII',
                description: 'Developing critical thinking and analytical skills through an enriched curriculum and project-based learning.',
                features: ['Advanced subjects', 'Laboratory work', 'Project-based learning', 'Competitive exam prep'],
                color: 'border-l-4 border-l-green-400'
              },
              {
                level: 'Secondary',
                classes: 'Class IX - X',
                description: 'Rigorous preparation for Madhyamik examinations with focus on conceptual understanding and application.',
                features: ['Board exam preparation', 'Science & Commerce streams', 'Regular assessments', 'Career counselling'],
                color: 'border-l-4 border-l-amber-400'
              },
              {
                level: 'Higher Secondary',
                classes: 'Class XI - XII',
                description: 'Specialised streams preparing students for higher education and professional careers with in-depth subject knowledge.',
                features: ['Science / Arts / Commerce', 'University preparation', 'Practical training', 'Career guidance'],
                color: 'border-l-4 border-l-purple-400'
              },
              {
                level: 'Co-Curricular',
                classes: 'All Classes',
                description: 'Complementary activities that develop talents beyond academics, building confidence and teamwork skills.',
                features: ['Sports & athletics', 'Cultural programs', 'Debates & quizzes', 'Annual functions'],
                color: 'border-l-4 border-l-red-400'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`card ${item.color}`}
              >
                <div className="mb-4">
                  <span className="text-xs font-semibold text-[#c8a415] uppercase tracking-wider">{item.classes}</span>
                  <h3 className="text-xl font-bold text-[#1a2a5e] mt-1">{item.level}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{item.description}</p>
                <ul className="space-y-2">
                  {item.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-sm text-gray-700">
                      <svg className="w-4 h-4 text-[#c8a415] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#c8a415] font-semibold text-sm uppercase tracking-wider mb-2">Curriculum</p>
            <h2 className="section-title">Subjects Offered</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'English', 'Bengali', 'Hindi', 'Mathematics',
              'Physics', 'Chemistry', 'Biology', 'Computer Science',
              'History', 'Geography', 'Political Science', 'Economics',
              'Accountancy', 'Business Studies', 'Environmental Science', 'Physical Education'
            ].map((subject, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow"
              >
                <p className="font-medium text-[#1a2a5e] text-sm">{subject}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Methodology */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[#c8a415] font-semibold text-sm uppercase tracking-wider mb-2">Our Approach</p>
              <h2 className="text-3xl font-bold text-[#1a2a5e] mb-6">Teaching Methodology</h2>
              <div className="space-y-4">
                {[
                  { title: 'Interactive Learning', desc: 'Classroom sessions designed to encourage participation and critical thinking' },
                  { title: 'Regular Assessments', desc: 'Continuous evaluation through tests, projects, and practical examinations' },
                  { title: 'Individual Attention', desc: 'Small class sizes ensuring personalized guidance for every student' },
                  { title: 'Technology Integration', desc: 'Smart classrooms and digital resources enhancing the learning experience' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-[#1a2a5e] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#c8a415] text-sm font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1a2a5e]">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#1a2a5e]/5 to-[#c8a415]/5 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-[#1a2a5e] mb-6">Academic Calendar Highlights</h3>
              <div className="space-y-4">
                {[
                  { month: 'June', event: 'New Academic Session Begins' },
                  { month: 'July', event: 'Unit Tests & Parent-Teacher Meeting' },
                  { month: 'September', event: 'Mid-Term Examinations' },
                  { month: 'October', event: 'Durga Puja Vacation & Cultural Programs' },
                  { month: 'December', event: 'Annual Examination (Classes I-X)' },
                  { month: 'January', event: 'Madhyamik & HS Preparation' },
                  { month: 'February', event: 'Annual Sports Day' },
                  { month: 'March', event: 'Board Examinations (X & XII)' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white p-3 rounded-lg">
                    <span className="text-xs font-bold text-[#c8a415] bg-[#c8a415]/10 px-2 py-1 rounded">{item.month}</span>
                    <span className="text-sm text-gray-700">{item.event}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#1a2a5e] to-[#0f1b3d]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Interested in Our Academics?</h2>
            <p className="text-gray-300 mb-8">Learn more about our admission process and how to enroll your child.</p>
            <Link to="/admissions" className="btn-secondary">
              Admission Information
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
