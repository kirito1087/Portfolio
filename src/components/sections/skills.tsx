import SectionWrapper from "../ui/section-wrapper";
import { SectionHeader } from "./section-header";
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiAngular, SiTailwindcss, 
  SiFirebase, SiPython, SiDjango, SiMysql, SiMongodb, 
  SiGithub, SiNetlify
} from "react-icons/si";
import { FaMobileAlt, FaPenNib, FaServer, FaInfinity, FaCode, FaDesktop, FaDatabase, FaTools, FaLaptopCode, FaRobot, FaNodeJs, FaJava } from "react-icons/fa";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <FaLaptopCode size={24} className="text-black dark:text-white" />,
    skills: [
      { name: "HTML5", icon: <SiHtml5 color="#E34F26" size={16} /> },
      { name: "CSS3", icon: <SiCss3 color="#1572B6" size={16} /> },
      { name: "JavaScript (ES6+)", icon: <SiJavascript color="#F7DF1E" size={16} /> },
      { name: "React.js", icon: <SiReact color="#61DAFB" size={16} /> },
      { name: "Angular", icon: <SiAngular color="#DD0031" size={16} /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" size={16} /> },
      { name: "Responsive Design", icon: <FaMobileAlt size={16} /> },
      { name: "UI/UX Principles", icon: <FaPenNib size={16} /> },
    ]
  },
  {
    title: "Backend & Database",
    icon: <FaDatabase size={24} className="text-black dark:text-white" />,
    skills: [
      { name: "Node.js", icon: <FaNodeJs color="#339933" size={16} /> },
      { name: "Python", icon: <SiPython color="#3776AB" size={16} /> },
      { name: "Java", icon: <FaJava color="#5382a1" size={16} /> },
      { name: "Firebase / Firestore", icon: <SiFirebase color="#FFCA28" size={16} /> },
      { name: "Django", icon: <SiDjango color="#092E20" size={16} /> },
      { name: "REST APIs", icon: <FaServer size={16} /> },
      { name: "MySQL", icon: <SiMysql color="#4479A1" size={16} /> },
      { name: "MongoDB", icon: <SiMongodb color="#47A248" size={16} /> },
    ]
  },
  {
    title: "Tools & DevOps",
    icon: <FaTools size={24} className="text-black dark:text-white" />,
    skills: [
      { name: "Git / GitHub", icon: <SiGithub size={16} /> },
      { name: "Netlify", icon: <SiNetlify color="#00C7B7" size={16} /> },
      { name: "CI/CD Pipelines", icon: <FaInfinity size={16} /> },
      { name: "VS Code", icon: <FaCode color="#007ACC" size={16} /> },
      { name: "Gemini AI API", icon: <FaRobot color="#4285F4" size={16} /> },
      { name: "Piston API", icon: <FaCode size={16} /> },
      { name: "Monaco Editor", icon: <FaDesktop size={16} /> },
    ]
  }
];

const SkillsSection = () => {
  return (
    <>
      <SectionWrapper id="skills" className="w-full h-screen md:h-[120dvh] pointer-events-none flex flex-col justify-start">
        <SectionHeader id='skills' title="Tech Stack" desc="(hint: press a key)" />
      </SectionWrapper>
      
      {/* Explicit Grid Section directly below */}
      <section className="w-full max-w-7xl mx-auto px-4 py-20 z-[99] relative pointer-events-auto mt-[-50vh] md:mt-[-80vh] mb-[20vh]">
         {/* Using negative margin to pull the grid up over the empty space of the 3D canvas so users scrolling don't experience dead space */}
         <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-800 dark:text-white tracking-widest uppercase">
           Skills & Expertise
         </h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
           {skillCategories.map((category, i) => (
             <div key={i} className="flex flex-col bg-zinc-100/40 dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-2xl transition hover:border-black/20 dark:hover:border-white/20">
               <div className="flex items-center gap-4 mb-8">
                 <div className="p-3 bg-black/5 dark:bg-white/5 rounded-xl border border-black/10 dark:border-white/10">
                   {category.icon}
                 </div>
                 <h3 className="text-xl md:text-2xl font-semibold text-slate-800 dark:text-white">
                   {category.title}
                 </h3>
               </div>
               
               <div className="flex flex-wrap gap-3">
                 {category.skills.map((skill, j) => (
                   <div key={j} className="flex items-center gap-2 bg-white border border-black/5 dark:bg-white/5 dark:border-white/5 rounded-xl px-4 py-2 hover:bg-black/5 dark:hover:bg-white/10 transition cursor-default">
                     <span className="text-slate-700 dark:text-gray-200">
                       {skill.icon}
                     </span>
                     <span className="text-sm md:text-md text-slate-700 dark:text-gray-200 font-medium tracking-wide">
                       {skill.name}
                     </span>
                   </div>
                 ))}
               </div>
             </div>
           ))}
         </div>
      </section>
    </>
  );
};

export default SkillsSection;
