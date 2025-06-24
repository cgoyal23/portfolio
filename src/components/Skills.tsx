import React from 'react';
import { Code, Database, Globe, Smartphone, Settings, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={24} />,
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C++", "HTML/CSS"]
    },
    {
      icon: <Globe size={24} />,
      title: "Web Development",
      skills: ["React", "Node.js", "Express", "Next.js", "Vue.js", "Angular"]
    },
    {
      icon: <Database size={24} />,
      title: "Database & Backend",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "GraphQL", "REST APIs"]
    },
    {
      icon: <Smartphone size={24} />,
      title: "Mobile Development",
      skills: ["React Native", "Flutter", "Swift", "Kotlin", "iOS", "Android"]
    },
    {
      icon: <Settings size={24} />,
      title: "Tools & Frameworks",
      skills: ["Docker", "AWS", "Firebase", "Webpack", "Vite", "Jest"]
    },
    {
      icon: <GitBranch size={24} />,
      title: "Version Control & DevOps",
      skills: ["Git", "GitHub", "GitLab", "CI/CD", "Jenkins", "Linux"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and professional capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-lg mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Proficiency Levels
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: "JavaScript/TypeScript", level: 90 },
              { name: "React/Next.js", level: 85 },
              { name: "Node.js/Express", level: 80 },
              { name: "Python", level: 75 },
              { name: "Database Management", level: 70 },
              { name: "Mobile Development", level: 65 }
            ].map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                  <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;