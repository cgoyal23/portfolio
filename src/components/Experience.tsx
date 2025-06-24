import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Development Intern",
      company: "Tech Solutions Inc.",
      period: "Summer 2024",
      description: "Worked on developing web applications using React and Node.js. Collaborated with senior developers to implement new features and optimize existing code.",
      achievements: [
        "Improved application performance by 30%",
        "Implemented responsive design for mobile compatibility",
        "Contributed to code reviews and documentation"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "Student Project Team",
      period: "2023 - Present",
      description: "Leading a team of 4 developers in creating a campus management system. Responsible for both frontend and backend development.",
      achievements: [
        "Developed RESTful APIs serving 1000+ users",
        "Implemented authentication and authorization",
        "Created responsive user interface with React"
      ]
    },
    {
      title: "Web Development Freelancer",
      company: "Self-Employed",
      period: "2022 - 2023",
      description: "Provided web development services to small businesses and startups. Created custom websites and web applications.",
      achievements: [
        "Delivered 5+ projects on time and within budget",
        "Maintained 100% client satisfaction rate",
        "Specialized in modern web technologies"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and key accomplishments in software development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                
                {/* Content */}
                <div className="ml-20">
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex items-center text-blue-600 dark:text-blue-400 mb-2">
                          <Briefcase size={18} className="mr-2" />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                        <div className="flex items-center text-gray-500 dark:text-gray-400">
                          <Calendar size={18} className="mr-2" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <span className="bg-green-500 text-white rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;