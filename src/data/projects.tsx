import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "handtracker",
    category: "Computer Vision & 3D",
    title: "Virtual Hand Tracker",
    src: "/assets/projects-screenshots/nikunj/project-handtracker.png",
    screenshots: ["project-handtracker.png"],
    live: "https://handtracker1087.netlify.app/",
    github: "https://github.com/kirito1087/hand-tracker",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.spline],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            A real-time, gesture-based neon drawing and 3D interaction platform running entirely in the browser using pure JavaScript hand tracking and Spline.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[`${BASE_PATH}/nikunj/project-handtracker.png`]} />
        </div>
      );
    },
  },
  {
    id: "fer",
    category: "AI/ML",
    title: "Facial Emotion Recognition",
    src: "/assets/projects-screenshots/nikunj/project-fer.png",
    screenshots: ["project-fer.png"],
    live: "https://facial-emotion-recognition10.netlify.app/",
    github: "https://github.com/kirito1087/facial-emotion-recognition",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.python],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Real-time facial emotion detection entirely in the browser using face-api.js. Built with a zero-backend architecture for immediate web accessibility.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[`${BASE_PATH}/nikunj/project-fer.png`]} />
        </div>
      );
    },
  },
  {
    id: "signlang",
    category: "Computer Vision",
    title: "Sign Language Translator",
    src: "/assets/projects-screenshots/nikunj/project-signlang.png",
    screenshots: ["project-signlang.png"],
    live: "https://github.com/kirito1087/sign_language_translator",
    github: "https://github.com/kirito1087/sign_language_translator",
    skills: {
      frontend: [PROJECT_SKILLS.python],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Engineered a custom machine learning model integrating MediaPipe for live hand landmarking and ASL to text translation.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[`${BASE_PATH}/nikunj/project-signlang.png`]} />
        </div>
      );
    },
  },
  {
    id: "videochat",
    category: "WebRTC",
    title: "Video Chat Pro",
    src: "/assets/projects-screenshots/nikunj/project-videochat.png",
    screenshots: ["project-videochat.png"],
    live: "https://github.com/kirito1087/videochat-pro",
    github: "https://github.com/kirito1087/videochat-pro",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind, PROJECT_SKILLS.sockerio],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Developed a real-time, low-latency video conferencing dynamic application powered by WebRTC and Socket.io.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[`${BASE_PATH}/nikunj/project-videochat.png`]} />
        </div>
      );
    },
  },
  {
    id: "culturalclub",
    category: "Frontend",
    title: "Vedam Cultural Club",
    src: "/assets/projects-screenshots/nikunj/project-culturalclub.png",
    screenshots: ["project-culturalclub.png"],
    live: "https://github.com/kirito1087/vedam-cultural-club",
    github: "https://github.com/kirito1087/vedam-cultural-club",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono">
            Built a comprehensive full-stack platform for the Vedam Cultural Club, substantially upgrading their digital footprint and event engagement.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow images={[`${BASE_PATH}/nikunj/project-culturalclub.png`]} />
        </div>
      );
    },
  },
];
export default projects;
