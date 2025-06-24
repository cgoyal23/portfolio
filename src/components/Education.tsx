import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "XYZ University",
      period: "2021 - 2025",
      gpa: "8.5/10",
      description: "Focusing on software engineering, data structures, algorithms, and modern web technologies.",
      courses: ["Data Structures & Algorithms", "Software Engineering", "Database Systems", "Web Development", "Machine Learning", "Computer Networks"]
    },
    {
      degree: "Higher Secondary Education (Science)",
      institution: "ABC School",
      period: "2019 - 2021",
      gpa: "92%",
      description: "Specialized in Mathematics, Physics, and Computer Science with excellent academic performance.",
      courses: ["Mathematics", "Physics", "Chemistry", "Computer Science", "English"]
    }
  ];

  const certifications = [
    {
      name: "Full Stack Web Development",
      issuer: "FreeCodeCamp",
      date: "2023",
      credential: "#"
    },
    {
      name: "React Developer Certification",
      issuer: "Meta",
      date: "2023",
      credential: "#"
    },
    {
      name: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2022",
      credential: "#"
    },
    {
      name: "JavaScript Algorithms and Data Structures",
      issuer: "FreeCodeCamp",
      date: "2022",
      credential: "#"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Certifications
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My academic background and professional certifications in technology and software development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="text-blue-600 mr-3" size={32} />
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Education</h3>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 shadow-lg">
                  <div className="mb-4">
                    <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h4>
                    <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-300 mb-2">
                      <span className="font-semibold text-blue-600 dark:text-blue-400">
                        {edu.institution}
                      </span>
                      <span>•</span>
                      <span>{edu.period}</span>
                      <span>•</span>
                      <span className="font-semibold">GPA: {edu.gpa}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {edu.description}
                  </p>
                  
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Key Courses:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, courseIndex) => (
                        <span
                          key={courseIndex}
                          className="bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-200 dark:border-gray-600"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center mb-8">
              <Award className="text-purple-600 mr-3" size={32} />
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white">Certifications</h3>
            </div>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {cert.name}
                      </h4>
                      <div className="flex items-center text-gray-600 dark:text-gray-300 mb-2">
                        <BookOpen size={16} className="mr-2" />
                        <span className="font-semibold">{cert.issuer}</span>
                        <span className="mx-2">•</span>
                        <span>{cert.date}</span>
                      </div>
                    </div>
                    <a
                      href={cert.credential}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-300 ml-4"
                    >
                      View Credential
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Learning */}
            <div className="mt-12 bg-gradient-to-r from-green-50 to-teal-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 shadow-lg">
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Continuous Learning
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I believe in continuous learning and staying updated with the latest technologies. 
                Currently exploring cloud computing, DevOps practices, and advanced JavaScript frameworks.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">
                  Cloud Computing
                </span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">
                  DevOps
                </span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">
                  Machine Learning
                </span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">
                  Blockchain
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;