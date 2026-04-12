const config = {
  title: "Nikunj Sachdeva | Full-Stack AI Developer",
  description: {
    long: "Explore the portfolio of Nikunj Sachdeva, a CS & AI student specializing in intelligent systems, full-stack development, and interactive web experiences. Discover my projects ranging from real-time Facial Emotion Recognition to robust WebRTC communication suites. Let's build something amazing together!",
    short:
      "Discover the portfolio of Nikunj Sachdeva, a CS & AI developer building robust real-world systems.",
  },
  keywords: [
    "Nikunj",
    "portfolio",
    "full-stack developer",
    "AI student",
    "machine learning",
    "computer vision",
    "interactive websites",
    "web design",
    "React",
    "Next.js",
    "Python",
    "TensorFlow",
  ],
  author: "Nikunj Sachdeva",
  email: "nikunj.sachdeva10@gmail.com",
  site: "https://nikunj-portfolio10.netlify.app/",

  // for github stars button
  githubUsername: "kirito1087",
  githubRepo: "portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/nikku_1087",
    linkedin: "https://www.linkedin.com/in/nikunj-sachdeva/",
    instagram: "https://www.instagram.com/nikku.ext",
    facebook: "",
    github: "https://github.com/kirito1087",
  },
};
export { config };
