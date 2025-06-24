import React from 'react';
import { User, Target, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Get to know more about my background, interests, and what drives me
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-1 rounded-2xl">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <User className="text-blue-600 mr-3" size={24} />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Personal Profile</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I'm a dedicated engineering student with a passion for technology and innovation. 
                  My journey in software development began with curiosity and has evolved into a 
                  deep commitment to creating solutions that make a difference.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-1 rounded-2xl">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <Target className="text-purple-600 mr-3" size={24} />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Goals & Vision</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I aim to leverage technology to solve real-world problems and contribute to 
                  meaningful projects. Currently seeking internship opportunities to apply my 
                  skills and learn from experienced professionals.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-r from-green-500 to-teal-500 p-1 rounded-2xl">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <Award className="text-green-600 mr-3" size={24} />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Key Highlights</h3>
                </div>
                <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">1</span>
                    <span>Strong foundation in computer science and software engineering principles</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">2</span>
                    <span>Experience with modern development frameworks and technologies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">3</span>
                    <span>Passionate about continuous learning and professional growth</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">4</span>
                    <span>Strong problem-solving skills and attention to detail</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">10+</div>
                <div className="text-gray-600 dark:text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">5+</div>
                <div className="text-gray-600 dark:text-gray-300">Technologies Mastered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;