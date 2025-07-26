export const code = {
  welcome: `// app/api/welcome/route.js
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Welcome to my portfolio!" }, { status: 200 });
}
`,

  aboutMe: `const superpower = () => "Writing clean, efficient, and user-friendly code!";
console.log(\`My superpower is: \${superpower()}\`);
`,

  skillsTools: `const mySkills = [
  "HTML", "CSS", "JavaScript", "TypeScript", "ReactJS", "NextJS", "Tailwind CSS",
  "shadcn/ui", "NodeJS", "ExpressJS", "MongoDB", "Git", "GitHub", "Vercel", 
  "Postman", "Docker", "Radix UI"
];

const getSkills = () => {
  return mySkills.length > 0 
    ? \`I have skills in: \${mySkills.join(", ")}! 💻🚀\`
    : "Skills not found... Panic!";
};

console.log(getSkills());
`,

  contact: `const contactDetails = {
    name: "Prabodha Jayawardena",
    email: "aghimire074@gmail.com",
    mobile: "+977-9847526298",
    location: "Kathmandu, Nepal",
    linkedIn: "linkedin.com/in/cypherab01",
    github: "github.com/cypherab01",
  };
  
function reachOut() {
  console.log(\`Reach out to me via email at \${contactDetails.email} or connect on LinkedIn: \${contactDetails.linkedIn}\`);
}

reachOut();
`,

  experience: `const experience = [
  {
    role: "Software Engineer",
    company: "Eyepax IT Consulting",
    duration: "Jul. 2022 - Jul. 2024",
    skills: ["Node.js", "GraphQL", "Serverless Architecture", "AWS Lambda", "DynamoDB", "Backend Development"],
  },
  {
    role: "Software Engineer",
    company: "Bukflights",
    duration: "2021 - 2022",
    skills: ["ReactJS", "VueJS", "Node.js", "MongoDB", "Redis", "External APIs", "Amadeus API", "Sabre API"],
  },
  {
    role: "Full Stack Developer",
    company: "Quotro (PVT) LTD",
    duration: "Jan. 2020 - Dec. 2021",
    skills: ["ReactJS", "UI/UX Optimization", "Performance Optimization", "Responsive Design"],
  },
  {
    role: "Web Developer",
    company: "Litmus (PVT) LTD",
    duration: "Jan. 2019 - Mar. 2020",
    skills: ["WordPress", "Custom Themes", "Plugin Integration", "Git", "Responsive Design"],
  },
];

experience.forEach((job) => {
  console.log(\`👨‍💻 \${job.role} at \${job.company} (\${job.duration}) \n🚀 Skills: \${job.skills.join(", ")}\`);
});
`,

  projects: `const projectField = {
  idea: "Overnight hackathon brilliance",
  execution: "Debugging marathons",
  outcome: "Works on my machine... most days!",
};

console.log("Project Field:", projectField);
`,

  educationJourney: `const educationJourney = [
  {
    degree: "Master of information technology (MIT) Reading",
    institution: "University of Colombo school of computing",
    isLatest: true,
  },
  {
    degree: "Bachelor of information technology (BIT)",
    institution: "University of Colombo school of computing",
  },
  {
    degree: "Higher Diploma in information technology (HDIT)",
    institution: "University of Colombo school of computing",
  },
  {
    degree: "Diploma in information technology (DIT)",
    institution: "University of Colombo school of computing",
  },
  {
    degree: "Diploma in Web Engineering (Pearson Assured)",
    institution: "Professional Certification",
  },
  {
    degree: "Diploma in PC Hardware and network Administration (Pearson Assured)",
    institution: "Professional Certification",
  },
  {
    degree: "G.C.E Advanced Level Examination 2013 (Maths Stream)",
    institution: "Mahanama College Colombo 03",
  },
  {
    degree: "G.C.E Ordinary Level Examination 2010",
    institution: "Rajasinghe Central College Hanwella",
  },
];

console.log("🎓 My Educational Journey:");
educationJourney.forEach((edu, index) => {
  const latestBadge = edu.isLatest ? " (Latest)" : "";
  console.log(\`\${index + 1}. \${edu.degree}\${latestBadge}\`);
  console.log(\`   Institution: \${edu.institution}\`);
});
`,
};

export const educationData = [
  {
    id: 1,
    degree: "Master of information technology (MIT) Reading",
    institution: "University of Colombo school of computing",
    isLatest: true,
  },
  {
    id: 2,
    degree: "Bachelor of information technology (BIT)",
    institution: "University of Colombo school of computing",
    isLatest: false,
  },
  {
    id: 3,
    degree: "Higher Diploma in information technology (HDIT)",
    institution: "University of Colombo school of computing",
    isLatest: false,
  },
  {
    id: 4,
    degree: "Diploma in information technology (DIT)",
    institution: "University of Colombo school of computing",
    isLatest: false,
  },
  {
    id: 5,
    degree: "Diploma in Web Engineering (Pearson Assured)",
    institution: "",
    isLatest: false,
  },
  {
    id: 6,
    degree: "Diploma in PC Hardware and network Administration (Pearson Assured)",
    institution: "",
    isLatest: false,
  },
  {
    id: 7,
    degree: "Sat for G.C.E Advanced Level Examination 2013 (Maths Stream)",
    institution: "English medium Mahanama College Colombo 03.",
    isLatest: false,
  },
  {
    id: 8,
    degree: "G.C.E Ordinary Level Examination 2010",
    institution: "English medium Rajasinghe Central College Hanwella.",
    isLatest: false,
  },
];
