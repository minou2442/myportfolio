import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Get In <span className="text-red-500">Touch</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="bg-red-500 p-4 rounded-full">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Email</h3>
                <p className="text-gray-300">contact@example.com</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-red-500 p-4 rounded-full">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Phone</h3>
                <p className="text-gray-300">+213 XXX XXX XXX</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-red-500 p-4 rounded-full">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Location</h3>
                <p className="text-gray-300">El-Milia, Jijel, Algeria</p>
              </div>
            </div>
          </div>
          
          <form className="space-y-6">
            <div>
              <input 
                type="text" 
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div>
              <textarea 
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              ></textarea>
            </div>
            <button 
              type="submit"
              className="bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 transition-colors w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;