import React from 'react';
import { ExternalLink, Globe, Play, Shield, Users, Zap } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-black to-purple-900/20"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <div className="mb-8">
            <div className="w-24 h-24 mx-auto mb-6 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 rounded-full animate-pulse opacity-20"></div>
              <Zap className="w-24 h-24 text-orange-500 mx-auto relative z-10" />
            </div>
            <h1 className="text-7xl md:text-9xl font-black mb-4 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
              MOZILLA
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 font-light tracking-wide">
              The Internet is for Everyone
            </p>
          </div>
          
          <div className="flex justify-center">
            <a 
              href="#content" 
              className="inline-flex items-center px-8 py-4 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black transition-all duration-300 font-semibold tracking-wider"
            >
              EXPLORE
              <ExternalLink className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section id="content" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="text-center p-8 border border-gray-800 hover:border-orange-500 transition-colors duration-300">
              <Users className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">200M+</h3>
              <p className="text-gray-400">Active Users</p>
            </div>
            <div className="text-center p-8 border border-gray-800 hover:border-orange-500 transition-colors duration-300">
              <Shield className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">25+</h3>
              <p className="text-gray-400">Years of Innovation</p>
            </div>
            <div className="text-center p-8 border border-gray-800 hover:border-orange-500 transition-colors duration-300">
              <Globe className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-2">100+</h3>
              <p className="text-gray-400">Languages Supported</p>
            </div>
          </div>

          {/* Media Grid */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Image Section */}
            <div className="group">
              <div className="relative overflow-hidden bg-gray-900 border border-gray-800">
                <img 
                  src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                  alt="Mozilla Firefox Technology" 
                  className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold mb-2">Firefox Browser</h3>
                  <p className="text-gray-300">Fast, private, and secure browsing experience</p>
                </div>
              </div>
            </div>

            {/* Video Section */}
            <div className="group">
              <div className="relative overflow-hidden bg-gray-900 border border-gray-800">
                <div className="relative">
                  <iframe 
                    width="100%" 
                    height="384" 
                    src="https://www.youtube.com/embed/OTtGNaWmrMY" 
                    title="Mozilla Story" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full"
                  ></iframe>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
                  <p className="text-gray-300">Building a better internet for everyone</p>
                </div>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-12 border border-gray-700 mb-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-5xl font-black mb-12 text-center bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                ABOUT MOZILLA
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div className="border-l-4 border-orange-500 pl-6">
                    <h3 className="text-xl font-bold mb-3 text-orange-400">Our Vision</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Mozilla envisions an internet that truly puts people first, where individuals can shape their own experience and are empowered, safe, and independent.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-orange-500 pl-6">
                    <h3 className="text-xl font-bold mb-3 text-orange-400">Privacy First</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We believe privacy is fundamental to a healthy internet. Firefox blocks thousands of trackers by default, keeping your browsing private.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-orange-500 pl-6">
                    <h3 className="text-xl font-bold mb-3 text-orange-400">Open Source</h3>
                    <p className="text-gray-300 leading-relaxed">
                      As a non-profit organization, Mozilla is committed to keeping the internet open and accessible through open-source innovation and community collaboration.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-orange-500 pl-6">
                    <h3 className="text-xl font-bold mb-3 text-orange-400">Global Impact</h3>
                    <p className="text-gray-300 leading-relaxed">
                      With users in over 90 countries, Mozilla continues to advocate for digital rights and internet health worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-4xl font-black mb-8">Ready to Experience Firefox?</h2>
            <a 
              href="https://mozilla.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-12 py-6 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-xl hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <Zap className="w-8 h-8 mr-3" />
              VISIT MOZILLA
              <ExternalLink className="w-8 h-8 ml-3" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Zap className="w-8 h-8 text-orange-500" />
            <span className="text-2xl font-bold">Mozilla</span>
          </div>
          <p className="text-gray-400 text-lg">
            Internet for people, not profit
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;