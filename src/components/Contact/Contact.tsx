import React, { useState } from 'react';
import { SectionHeading } from '../UI/SectionHeading';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log(formData);
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-navy-light">
      <div className="section-container">
        <SectionHeading number="04" title="Contact" />
        
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Get In Touch</h3>
          
          <p className="text-gray-300 mb-8">
            I'm currently looking for new opportunities, especially frontend internships. Whether you 
            have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a href="#" className="social-icon" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:example@example.com" className="social-icon" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </div>
          
          <form onSubmit={handleSubmit} className="text-left">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-navy border border-teal/20 rounded-md p-3 text-white focus:border-teal focus:outline-none"
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-navy border border-teal/20 rounded-md p-3 text-white focus:border-teal focus:outline-none"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full bg-navy border border-teal/20 rounded-md p-3 text-white focus:border-teal focus:outline-none"
              ></textarea>
            </div>
            
            <button type="submit" className="btn-primary">
              Say Hello
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};