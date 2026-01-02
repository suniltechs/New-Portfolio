import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Rocket,
  Trophy,
  Calendar,
  ChevronRight,
  Sparkles,
  ExternalLink,
} from "lucide-react";

const experiences = [
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
];

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 0.5,
      },
    },
  };

  const glowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="experience" className="py-20 dark:bg-dark-bg bg-white">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold dark:text-dark-text relative inline-block">
            Professional <span className="text-orange-primary">Experience</span>
            <motion.span
              className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-16 h-1 bg-orange-primary"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
          </h2>
          <p className="mt-8 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            My path through innovation and technology
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div ref={ref} className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={cardVariants}
                className="relative group lg:pl-8 lg:border-l-2 lg:border-gray-200 lg:dark:border-gray-700"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-1/2 -translate-y-1/2 hidden lg:block">
                  <div className="w-4 h-4 rounded-full bg-orange-primary border-4 border-white dark:border-dark-bg shadow-sm" />
                </div>

                {/* Main Card */}
                <motion.div
                  whileHover={{
                    y: -8,
                    boxShadow:
                      "0 20px 25px -5px rgba(255, 107, 0, 0.1), 0 10px 10px -5px rgba(255, 107, 0, 0.04)",
                  }}
                  className="bg-white dark:bg-dark-card rounded-xl border border-orange-primary/10 hover:border-orange-primary/30 transition-all duration-300 overflow-hidden shadow-lg p-6 lg:p-8"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-orange-primary shadow-lg">
                        {exp.icon}
                      </div>
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

                    <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-primary text-white text-xs font-medium">
                      {exp.role}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="text-xs bg-orange-primary/10 text-orange-primary px-3 py-1 rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>          
        </div>
      </div>
    </section>
  );
};

export default Experience;
