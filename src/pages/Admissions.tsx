import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Admissions() {
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    phone: '',
    email: '',
    classApplied: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your enquiry. Our admission team will contact you shortly.');
    setFormData({ parentName: '', studentName: '', phone: '', email: '', classApplied: '', message: '' });
  };

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
            Admissions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 text-lg max-w-2xl mx-auto"
          >
            Join our family of learners. Admissions open for the 2025-26 academic session.
          </motion.p>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#c8a415] font-semibold text-sm uppercase tracking-wider mb-2">How to Apply</p>
            <h2 className="section-title">Admission Process</h2>
            <p className="section-subtitle">Simple steps to begin your child's educational journey with us</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Enquiry', desc: 'Visit the school or fill the online enquiry form to express interest' },
              { step: '02', title: 'Application', desc: 'Collect and submit the admission form with required documents' },
              { step: '03', title: 'Interaction', desc: 'Attend an informal interaction session with the student and parents' },
              { step: '04', title: 'Enrollment', desc: 'Complete the admission formalities and fee payment to confirm the seat' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="text-center relative"
              >
                <div className="w-16 h-16 bg-[#1a2a5e] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#c8a415] font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="font-bold text-[#1a2a5e] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#c8a415] to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[#c8a415] font-semibold text-sm uppercase tracking-wider mb-2">Checklist</p>
              <h2 className="text-3xl font-bold text-[#1a2a5e] mb-6">Required Documents</h2>
              <div className="space-y-3">
                {[
                  'Birth Certificate of the student',
                  'Previous School Report Card / Transfer Certificate',
                  'Passport size photographs (4 copies)',
                  'Address Proof (Aadhaar Card / Voter ID)',
                  'Parent\'s Identity Proof',
                  'Caste Certificate (if applicable)',
                  'Medical Fitness Certificate',
                  'Migration Certificate (for out-of-board students)',
                ].map((doc, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm"
                  >
                    <svg className="w-5 h-5 text-[#c8a415] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                    <span className="text-gray-700 text-sm">{doc}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Fee Structure */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[#c8a415] font-semibold text-sm uppercase tracking-wider mb-2">Investment</p>
              <h2 className="text-3xl font-bold text-[#1a2a5e] mb-6">Fee Structure</h2>
              <p className="text-gray-600 mb-6">We believe quality education should be accessible. Our fees are structured to be affordable while maintaining high standards.</p>
              
              <div className="space-y-4">
                {[
                  { level: 'Nursery - UKG', fee: 'Contact School' },
                  { level: 'Class I - V', fee: 'Contact School' },
                  { level: 'Class VI - VIII', fee: 'Contact School' },
                  { level: 'Class IX - X', fee: 'Contact School' },
                  { level: 'Class XI - XII', fee: 'Contact School' },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm">
                    <span className="font-medium text-[#1a2a5e]">{item.level}</span>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{item.fee}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-4">
                * For detailed fee information, please contact the school office at +91 93309 93319
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#c8a415] font-semibold text-sm uppercase tracking-wider mb-2">Get Started</p>
            <h2 className="section-title">Admission Enquiry</h2>
            <p className="section-subtitle">Fill out the form below and our team will get back to you</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-gray-50 rounded-2xl p-8 shadow-sm"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Parent/Guardian Name</label>
                <input
                  type="text"
                  required
                  value={formData.parentName}
                  onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1a2a5e] focus:ring-1 focus:ring-[#1a2a5e] outline-none transition-colors"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Student Name</label>
                <input
                  type="text"
                  required
                  value={formData.studentName}
                  onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1a2a5e] focus:ring-1 focus:ring-[#1a2a5e] outline-none transition-colors"
                  placeholder="Enter student name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1a2a5e] focus:ring-1 focus:ring-[#1a2a5e] outline-none transition-colors"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1a2a5e] focus:ring-1 focus:ring-[#1a2a5e] outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Class Applied For</label>
                <select
                  required
                  value={formData.classApplied}
                  onChange={(e) => setFormData({ ...formData, classApplied: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1a2a5e] focus:ring-1 focus:ring-[#1a2a5e] outline-none transition-colors"
                >
                  <option value="">Select Class</option>
                  <option value="nursery">Nursery</option>
                  <option value="lkg">LKG</option>
                  <option value="ukg">UKG</option>
                  <option value="1">Class I</option>
                  <option value="2">Class II</option>
                  <option value="3">Class III</option>
                  <option value="4">Class IV</option>
                  <option value="5">Class V</option>
                  <option value="6">Class VI</option>
                  <option value="7">Class VII</option>
                  <option value="8">Class VIII</option>
                  <option value="9">Class IX</option>
                  <option value="10">Class X</option>
                  <option value="11">Class XI</option>
                  <option value="12">Class XII</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1a2a5e] focus:ring-1 focus:ring-[#1a2a5e] outline-none transition-colors resize-none"
                  placeholder="Any additional information..."
                />
              </div>
            </div>
            <div className="mt-6 text-center">
              <button type="submit" className="btn-primary">
                Submit Enquiry
              </button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="section-title">Important Dates</h2>
          </motion.div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { date: 'March - May', event: 'Admission Enquiry Period' },
              { date: 'June (First Week)', event: 'New Session Begins' },
              { date: 'Throughout Year', event: 'Transfer Admissions (Subject to Availability)' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm text-center"
              >
                <p className="font-bold text-[#c8a415] mb-1">{item.date}</p>
                <p className="text-gray-700 text-sm">{item.event}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/contact" className="text-[#1a2a5e] font-medium hover:underline">
              Contact us for more details
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
