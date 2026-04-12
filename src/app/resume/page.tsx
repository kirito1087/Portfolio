"use client";
import { config } from "@/data/config";
import projects from "@/data/projects";
import { EXPERIENCE } from "@/data/constants";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-neutral-100 py-10 px-4 print:py-0 print:px-0 print:bg-white flex justify-center">
      <div className="w-full max-w-[850px] bg-white text-black shadow-2xl print:shadow-none p-10 md:p-16 print:p-0">
        <header className="border-b-2 border-slate-800 pb-4 mb-6">
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider text-slate-800">{config.author}</h1>
          <div className="flex flex-wrap gap-2 mt-4 text-sm font-semibold text-slate-700 items-center">
            <span>Pune, Maharashtra, India</span>
            <span className="text-slate-400">|</span>
            <span>9871048032</span>
            <span className="text-slate-400">|</span>
            <a href={`mailto:${config.email}`} className="hover:text-blue-600">
              {config.email}
            </a>
            <span className="text-slate-400">|</span>
            <a href={config.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-blue-600">LinkedIn</a>
            <span className="text-slate-400">|</span>
            <a href={config.social.github} target="_blank" rel="noreferrer" className="hover:text-blue-600">GitHub</a>
            <span className="text-slate-400">|</span>
            <a href={config.site} target="_blank" rel="noreferrer" className="hover:text-blue-600">Portfolio</a>
          </div>
        </header>

        <section className="mb-8 block">
          <h2 className="text-2xl font-bold text-slate-800 uppercase tracking-widest border-b border-slate-300 pb-2 mb-4">Summary</h2>
          <p className="text-slate-700 leading-relaxed font-medium">
            Computer Science and AI student focused on building real-world AI and software systems. 
            Specializing in problem-solving, data structures, and developing scalable applications. 
            Targeting high-impact tech roles with a long-term goal of building intelligent systems that solve real-world problems.
          </p>
        </section>

        <section className="mb-8 block break-inside-avoid">
          <h2 className="text-2xl font-bold text-slate-800 uppercase tracking-widest border-b border-slate-300 pb-2 mb-4">Experience & Education</h2>
          <div className="flex flex-col gap-6">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="flex flex-col break-inside-avoid">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-xl font-bold text-slate-800">{exp.title}</h3>
                  <span className="text-slate-600 font-medium whitespace-nowrap">{exp.startDate} - {exp.endDate}</span>
                </div>
                <div className="text-lg text-slate-700 font-semibold mb-2">{exp.company}</div>
                <ul className="list-disc list-outside ml-5 text-slate-700 space-y-1">
                  {exp.description.map((desc, j) => (
                    <li key={j}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8 block">
          <h2 className="text-2xl font-bold text-slate-800 uppercase tracking-widest border-b border-slate-300 pb-2 mb-4">Selected Projects</h2>
          <div className="flex flex-col gap-6">
            {projects.slice(0, 5).map((project, i) => {
              const summaries: Record<string, string> = {
                "handtracker": "A real-time, gesture-based neon drawing and 3D interaction platform running entirely in the browser using pure JavaScript hand tracking and Spline.",
                "fer": "Real-time facial emotion detection entirely in the browser using face-api.js. Built with a zero-backend architecture for immediate web accessibility.",
                "signlang": "Engineered a custom machine learning model integrating MediaPipe for live hand landmarking and ASL to text translation.",
                "videochat": "Developed a real-time, low-latency video conferencing dynamic application powered by WebRTC and Socket.io.",
                "culturalclub": "Built a comprehensive full-stack platform for the Vedam Cultural Club, substantially upgrading their digital footprint and event engagement."
              };
              return (
              <div key={i} className="flex flex-col break-inside-avoid">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-xl font-bold text-slate-800 flex items-center gap-3">
                    {project.title}
                    {project.live && <a href={project.live} target="_blank" rel="noreferrer" className="text-xs text-blue-600 hover:underline font-normal print:hidden">Live Link</a>}
                    {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="text-xs text-blue-600 hover:underline font-normal print:hidden">GitHub Repo</a>}
                  </h3>
                </div>
                <p className="text-slate-600 italic mb-2 text-sm">Tech Stack: {[...project.skills.frontend, ...project.skills.backend].map((s: any) => s.title).join(", ")}</p>
                <div className="text-slate-700 print:text-sm prose prose-sm max-w-none prose-p:my-1 prose-ul:my-1 text-justify">
                  {summaries[project.id] || "A full stack web application developed as a portfolio showcase."}
                </div>
              </div>
            )})}
          </div>
        </section>

        <section className="block break-inside-avoid">
          <h2 className="text-2xl font-bold text-slate-800 uppercase tracking-widest border-b border-slate-300 pb-2 mb-4">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 print:grid-cols-3">
            <div>
              <h3 className="font-bold text-slate-800 mb-2">Frontend</h3>
              <p className="text-slate-700 leading-tight">HTML5, CSS3, JavaScript (ES6+), React.js, Angular, Tailwind CSS, Responsive Design, UI/UX</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-800 mb-2">Backend & Database</h3>
              <p className="text-slate-700 leading-tight">Python, Java, Node.js, Firebase/Firestore, Django, REST APIs, MySQL, MongoDB</p>
            </div>
            <div>
              <h3 className="font-bold text-slate-800 mb-2">Tools & DevOps</h3>
              <p className="text-slate-700 leading-tight">Git, GitHub, Netlify, CI/CD, VS Code, Gemini API, Piston API</p>
            </div>
          </div>
        </section>

        <div className="mt-12 text-center print:hidden">
          <button onClick={() => window.print()} className="px-6 py-3 bg-slate-800 text-white rounded-lg font-bold hover:bg-slate-700 transition shadow-lg flex items-center gap-2 mx-auto cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>
            Save as PDF / Print
          </button>
        </div>
      </div>
    </div>
  );
}
