import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message. We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
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
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 text-lg max-w-2xl mx-auto"
          >
            We'd love to hear from you. Reach out to us for any queries or visit our campus.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 -mt-12 relative z-10">
            {[
              {
                title: 'Visit Us',
                details: ['40/1, Benaras Road', 'Salkia, Howrah', 'West Bengal 711106, India'],
                icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z'
              },
              {
                title: 'Call Us',
                details: ['+91 93309 93319', 'Monday - Saturday', '6:30 AM - 5:00 PM'],
                icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
              },
              {
                title: 'School Hours',
                details: ['Monday - Saturday', '6:30 AM - 5:00 PM', 'Sunday: Closed'],
                icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-[#1a2a5e] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-7 h-7 text-[#c8a415]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={card.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-[#1a2a5e] text-lg mb-2">{card.title}</h3>
                {card.details.map((detail, dIndex) => (
                  <p key={dIndex} className="text-gray-600 text-sm">{detail}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[#c8a415] font-semibold text-sm uppercase tracking-wider mb-2">Get in Touch</p>
              <h2 className="text-3xl font-bold text-[#1a2a5e] mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1a2a5e] focus:ring-1 focus:ring-[#1a2a5e] outline-none transition-colors bg-white"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1a2a5e] focus:ring-1 focus:ring-[#1a2a5e] outline-none transition-colors bg-white"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1a2a5e] focus:ring-1 focus:ring-[#1a2a5e] outline-none transition-colors bg-white"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1a2a5e] focus:ring-1 focus:ring-[#1a2a5e] outline-none transition-colors bg-white"
                    >
                      <option value="">Select Subject</option>
                      <option value="admission">Admission Enquiry</option>
                      <option value="academic">Academic Query</option>
                      <option value="fee">Fee Related</option>
                      <option value="general">General Enquiry</option>
                      <option value="complaint">Feedback/Complaint</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#1a2a5e] focus:ring-1 focus:ring-[#1a2a5e] outline-none transition-colors resize-none bg-white"
                    placeholder="Write your message here..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[#c8a415] font-semibold text-sm uppercase tracking-wider mb-2">Location</p>
              <h2 className="text-3xl font-bold text-[#1a2a5e] mb-6">Find Us Here</h2>
              
              <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.5!2d88.3!3d22.58!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSalkia%2C+Howrah!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="School Location"
                  className="w-full"
                />
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-bold text-[#1a2a5e] mb-4">How to Reach</h3>
                <div className="space-y-3">
                  {[
                    { mode: 'By Bus', desc: 'Several bus routes connect to Salkia area. Get down at Benaras Road stop.' },
                    { mode: 'By Train', desc: 'Howrah Junction is the nearest major railway station (approx. 3 km).' },
                    { mode: 'By Auto/Taxi', desc: 'Easily accessible from Howrah Maidan via Benaras Road.' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-[#1a2a5e]/5 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-[#1a2a5e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
                      </div>
                      <div>
                        <p className="font-medium text-[#1a2a5e] text-sm">{item.mode}</p>
                        <p className="text-gray-600 text-xs">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-[#c8a415] font-semibold text-sm uppercase tracking-wider mb-2">FAQ</p>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-4">
            {[
              { q: 'What classes does the school offer?', a: 'We offer classes from Nursery to Class XII (Higher Secondary) in English medium.' },
              { q: 'What are the school timings?', a: 'The school operates from Monday to Saturday, 6:30 AM to 5:00 PM. Sunday is a holiday.' },
              { q: 'How can I apply for admission?', a: 'You can visit the school office to collect the admission form or fill the online enquiry form on our Admissions page.' },
              { q: 'Is the school co-educational?', a: 'Yes, R.K. Academic Point is a co-educational institution welcoming both boys and girls.' },
              { q: 'What is the medium of instruction?', a: 'English is the primary medium of instruction for all classes.' },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-5"
              >
                <h4 className="font-semibold text-[#1a2a5e] mb-2">{faq.q}</h4>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
