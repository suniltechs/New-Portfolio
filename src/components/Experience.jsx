import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef } from "react";
import {
  Rocket,
  Trophy,
  Calendar,
} from "lucide-react";

const experiences = [
  {
    id: 2,
    company: "ScalingWolf AI",
    role: "Full Stack Developer | Internship",
    period: "Dec 2025 - Present",
    description:
      "Working on the development of full-stack web applications by building responsive user interfaces, developing backend APIs, and integrating databases for scalable, AI-driven solutions.",
    icon: <Rocket className="w-5 h-5 text-white" />,
    skills: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "Swagger UI",
      "Golang",
      "PostgreSQL",
      "REST APIs",
      "Git",
      "LLMs",
    ],
    link: "#",
  },
  {
    id: 1,
    company: "Technohacks",
    role: "Website Developer | Internship",
    period: "Nov 2023 - Dec 2023",
    description:
      "Developed responsive websites using modern frontend technologies, implemented UI components, and collaborated with team members on web development projects.",
    icon: <Trophy className="w-5 h-5 text-white" />,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Responsive Design",
    ],
    link: "#",
  },
];

const Experience = () => {
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="py-12 lg:py-16 dark:bg-dark-bg bg-cream-lighter overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold dark:text-dark-text relative inline-block">
            Professional <span className="text-orange-primary">Experience</span>
            <motion.span
              className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-24 h-1 bg-orange-primary rounded-full"
              initial={{ scaleX: 0 }}
              animate={headerInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
          </h2>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            My path through innovation and technology
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative max-w-5xl mx-auto py-4">
          
          {/* Static Background Line */}
          <div className="absolute left-[20px] lg:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-700 to-transparent lg:-translate-x-1/2" />
          
          {/* Animated Scroll Progress Line */}
          <div className="absolute left-[20px] lg:left-1/2 top-0 bottom-0 w-[2px] lg:-translate-x-1/2 overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-transparent via-orange-primary/80 to-orange-primary shadow-[0_0_15px_rgba(255,155,81,0.8)]"
              style={{ height: lineHeight }} 
            />
          </div>

          {/* Experience Cards */}
          <div className="space-y-12 lg:space-y-16">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col lg:flex-row w-full items-center ${
                    isEven ? "lg:justify-end" : "lg:justify-start"
                  }`}
                >
                  {/* Icon marking the position on timeline */}
                  <div className="absolute left-[20px] lg:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-orange-primary flex items-center justify-center text-white border-4 border-cream-lighter dark:border-dark-bg z-10 shadow-md">
                    {exp.icon}
                  </div>

                  {/* Card wrapper */}
                  <div className={`w-full lg:w-1/2 pl-16 lg:pl-0 ${isEven ? "lg:pl-10" : "lg:pr-10"}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                      whileHover={{
                        y: -5,
                        boxShadow:
                          "0 15px 25px -5px rgba(255, 155, 81, 0.1), 0 8px 10px -5px rgba(255, 155, 81, 0.04)",
                      }}
                      className="bg-white dark:bg-dark-card rounded-2xl border border-orange-primary/10 hover:border-orange-primary/30 transition-all duration-300 shadow-md p-5 lg:p-6 relative group"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
                        <div className="flex items-center gap-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                              {exp.company}
                            </h3>
                            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.period}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-orange-primary/10 text-orange-primary text-xs font-bold">
                          {exp.role}
                        </span>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 text-sm">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {exp.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="text-[11px] bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2.5 py-1 rounded-full font-medium border border-gray-100 dark:border-gray-700"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
