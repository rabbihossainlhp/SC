import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from 'lucide-react';
import Button from '../../components/common/Button';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      details: 'support@spycode.com',
      link: 'mailto:support@spycode.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      details: '+1 (234) 567-890',
      link: 'tel:+1234567890'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Us',
      details: '123 Tech Street, Silicon Valley, CA 94000',
      link: '#'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Working Hours',
      details: 'Mon-Fri: 9AM - 6PM PST',
      link: null
    }
  ];

  const faqs = [
    {
      question: 'How quickly do you respond?',
      answer: 'We typically respond within 24 hours on business days.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Yes, we have a 30-day money-back guarantee on all courses.'
    },
    {
      question: 'Can I get technical support?',
      answer: 'Absolutely! Our support team is available to help with any technical issues.'
    }
  ];

  return (
    <div className="min-h-screen bg-cyber-darker">
      {/* Hero Section */}
      <section className="relative bg-cyber-dark border-b border-primary-500/20 py-20 overflow-hidden">
        {/* Cyber Background */}
        <div className="absolute inset-0 bg-cyber-grid bg-grid opacity-5"></div>
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary-500/10 rounded-full blur-[120px] animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-secondary-500/10 rounded-full blur-[120px] animate-pulse-glow"></div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center shadow-neon-green">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-neon via-primary-400 to-secondary-400">
                Get in Touch
              </span>
            </h1>
            <p className="text-xl text-gray-300">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-cyber-dark/50 backdrop-blur-sm border border-primary-500/20 rounded-lg p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Send className="w-6 h-6 text-primary-400" />
                Send us a Message
              </h2>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-accent-neon/10 border border-accent-neon/30 rounded-lg"
                >
                  <p className="text-accent-neon flex items-center gap-2">
                    <span>✓</span> Message sent successfully! We'll get back to you soon.
                  </p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-cyber-darker border border-primary-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white placeholder-gray-500"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-cyber-darker border border-primary-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white placeholder-gray-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-cyber-darker border border-primary-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white placeholder-gray-500"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 bg-cyber-darker border border-primary-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-white placeholder-gray-500 resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  disabled={isSubmitting}
                  icon={<Send className="w-5 h-5" />}
                  className="bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 shadow-neon-green"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8"
            >
              <h3 className="text-xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h3>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-cyber-dark/50 backdrop-blur-sm border border-primary-500/20 rounded-lg p-6 hover:border-primary-500/40 transition-all"
                  >
                    <h4 className="font-semibold text-white mb-2">
                      {faq.question}
                    </h4>
                    <p className="text-gray-400">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Info Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              <div className="bg-cyber-dark/50 backdrop-blur-sm border border-primary-500/20 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg bg-cyber-darker/50 border border-primary-500/10 hover:border-primary-500/30 transition-all"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-lg flex items-center justify-center text-primary-400 border border-primary-500/30">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-white mb-1">
                          {info.title}
                        </h4>
                        {info.link && info.link !== '#' ? (
                          <a
                            href={info.link}
                            className="text-gray-400 hover:text-primary-400 transition-colors"
                          >
                            {info.details}
                          </a>
                        ) : (
                          <p className="text-gray-400">
                            {info.details}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-cyber-dark/50 backdrop-blur-sm border border-primary-500/20 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-3">
                  {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="w-10 h-10 bg-cyber-darker border border-primary-500/30 rounded-lg flex items-center justify-center text-gray-400 hover:bg-primary-500/20 hover:text-primary-400 hover:border-primary-500/50 transition-all"
                      aria-label={platform}
                    >
                      {platform.charAt(0)}
                    </a>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-cyber-dark/50 backdrop-blur-sm border border-primary-500/20 rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  Our Location
                </h3>
                <div className="aspect-video bg-cyber-darker border border-primary-500/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-12 h-12 text-primary-400/50" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
