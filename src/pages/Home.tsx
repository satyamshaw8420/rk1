import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1920&q=80" 
            alt="School Campus" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2a5e]/95 via-[#0f1b3d]/90 to-[#1a2a5e]/95" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#c8a415] rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#2d4a8c] rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-1.5 bg-[#c8a415]/20 border border-[#c8a415]/30 rounded-full mb-6">
                <span className="text-[#c8a415] text-sm font-medium">Established 1987</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Shaping Futures
                <span className="block text-[#c8a415]">Through Excellence</span>
              </h1>
              <p className="text-lg text-gray-300 mb-8 max-w-lg leading-relaxed">
                R.K. Academic Point High School is a recognised coeducational English medium higher secondary institution dedicated to nurturing young minds from Nursery to Class XII.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/admissions" className="btn-secondary">
                  Apply for Admission
                </Link>
                <Link to="/about" className="px-6 py-3 rounded-lg font-semibold text-white border-2 border-white/30 hover:bg-white/10 transition-all duration-300">
                  Learn More
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-sm border border-white/10 p-8 flex flex-col justify-center">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4 bg-white/5 rounded-xl">
                      <p className="text-3xl font-bold text-[#c8a415]">37+</p>
                      <p className="text-sm text-gray-300 mt-1">Years of Excellence</p>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-xl">
                      <p className="text-3xl font-bold text-[#c8a415]">N-XII</p>
                      <p className="text-sm text-gray-300 mt-1">All Classes Available</p>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-xl">
                      <p className="text-3xl font-bold text-[#c8a415]">1000+</p>
                      <p className="text-sm text-gray-300 mt-1">Happy Students</p>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-xl">
                      <p className="text-3xl font-bold text-[#c8a415]">50+</p>
                      <p className="text-sm text-gray-300 mt-1">Expert Faculty</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={fadeInUp} className="text-[#c8a415] font-semibold text-sm uppercase tracking-wider mb-2">
              Welcome to Our School
            </motion.p>
            <motion.h2 variants={fadeInUp} className="section-title">
              A Legacy of Academic Excellence
            </motion.h2>
            <motion.p variants={fadeInUp} className="section-subtitle">
              Since 1987, we have been committed to providing holistic education that develops intellectual curiosity, moral values, and leadership qualities in every student.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'Quality Education',
                description: 'Comprehensive curriculum from Nursery to Class XII with experienced faculty and modern teaching methodologies.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
                )
              },
              {
                title: 'Holistic Development',
                description: 'Focus on academic, cultural, sports, and extracurricular activities to ensure all-round growth of every student.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
                )
              },
              {
                title: 'Safe Environment',
                description: 'A secure and nurturing campus where students feel valued, supported, and encouraged to reach their full potential.',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                )
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="card text-center group"
              >
                <div className="w-16 h-16 bg-[#1a2a5e]/5 rounded-2xl flex items-center justify-center mx-auto mb-4 text-[#1a2a5e] group-hover:bg-[#1a2a5e] group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1a2a5e] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={fadeInUp} className="text-[#c8a415] font-semibold text-sm uppercase tracking-wider mb-2">
              Why Choose Us
            </motion.p>
            <motion.h2 variants={fadeInUp} className="section-title">
              What Makes Us Different
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: '01', title: 'English Medium', desc: 'Complete English medium education ensuring global readiness' },
              { number: '02', title: 'Experienced Faculty', desc: 'Dedicated and qualified teachers with years of experience' },
              { number: '03', title: 'Modern Curriculum', desc: 'Updated syllabus aligned with current educational standards' },
              { number: '04', title: 'Affordable Fees', desc: 'Quality education at reasonable and accessible fee structure' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl border border-gray-100 hover:border-[#c8a415]/30 hover:shadow-lg transition-all duration-300 group"
              >
                <span className="text-4xl font-bold text-[#c8a415]/20 group-hover:text-[#c8a415]/40 transition-colors">{item.number}</span>
                <h3 className="text-lg font-bold text-[#1a2a5e] mt-2 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1a2a5e] to-[#0f1b3d]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Begin Your Child's Journey to Excellence
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Admissions are now open for the upcoming academic session. Join our family of learners and give your child the foundation for a bright future.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/admissions" className="btn-secondary">
                Admission Enquiry
              </Link>
              <Link to="/contact" className="px-6 py-3 rounded-lg font-semibold text-white border-2 border-white/30 hover:bg-white/10 transition-all duration-300">
                Schedule a Visit
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.p variants={fadeInUp} className="text-[#c8a415] font-semibold text-sm uppercase tracking-wider mb-2">
              Testimonials
            </motion.p>
            <motion.h2 variants={fadeInUp} className="section-title">
              What Parents Say
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Parent of Class X Student',
                text: 'The school has provided excellent academic guidance. The teachers are dedicated and the environment is very conducive to learning.',
                role: 'Parent'
              },
              {
                name: 'Parent of Class V Student',
                text: 'Very reasonable fees with quality education. My child has shown remarkable improvement since joining R.K. Academic Point.',
                role: 'Parent'
              },
              {
                name: 'Alumni - Batch 2020',
                text: 'The values and education I received here prepared me well for higher studies. I am grateful to the faculty for their guidance.',
                role: 'Alumni'
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="card"
              >
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-[#1a2a5e] rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#c8a415]" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.737-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-[#1a2a5e] text-sm">{testimonial.name}</p>
                  <p className="text-gray-500 text-xs">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
