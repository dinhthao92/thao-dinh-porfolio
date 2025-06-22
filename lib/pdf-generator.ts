import jsPDF from "jspdf"

export interface ResumeData {
  personalInfo: {
    name: string
    title: string
    email: string
    phone: string
    linkedin: string
    address: string
    birthDate: string
  }
  overview: string
  workExperience: Array<{
    title: string
    company: string
    location: string
    period: string
    responsibilities: string[]
    achievements?: string[]
  }>
  education: Array<{
    degree: string
    institution: string
    period: string
    gpa?: string
    achievements?: string[]
  }>
  certifications: string[]
  skills: {
    languages: string[]
    methodologies: string[]
    tools: string[]
    productSkills: string[]
    softSkills: string[]
  }
}

export const resumeData: ResumeData = {
  personalInfo: {
    name: "Thao Dinh Thi Thu",
    title: "SENIOR BUSINESS ANALYST | SOLUTION CONSULTANT",
    email: "thaodtt.works@gmail.com",
    phone: "+84 944 883 528",
    linkedin: "LinkedIn",
    address: "Linh Dam, Hoang Mai, Hanoi",
    birthDate: "31 December, 1992",
  },
  overview:
    "I am a seasoned Senior Business Analyst and Solution Consultant with over 10 years of experience in the Banking and Finance sector. I specialize in leading digital transformation initiatives across diverse methodologies and possess deep expertise in Digital Banking systems, including Omni-channel, Core Banking, AML, LOS, and so on. Recognized for my strategic thinking, creative problem-solving, and strong analytical capabilities, I have a proven track record of delivering impactful, efficient solutions. Certified in multiple industry-leading programs, I consistently drive business growth through product innovation, stakeholder alignment, and successful contract execution. I am passionate about enhancing product value and user experience in forward-thinking organizations.",
  workExperience: [
    {
      title: "BA Mentor (Part-time)",
      company: "VTI Academy for Enterprise",
      location: "Hanoi",
      period: "03/2025 - present",
      responsibilities: [
        "Deliver BA training based on BABOK® v3 for working professionals",
        "Mentor 20+ learners per course on BA fundamentals, stakeholder analysis, and elicitation",
        "Designed case studies and rubrics now used across the program",
        "Conducted 10+ sessions, receiving positive feedback for clarity and relevance",
      ],
    },
    {
      title: "Senior Business Consultant",
      company: "BFSI Solution Consulting Center, CMC Technology and Solution (CMC TS)",
      location: "Hanoi",
      period: "01/2024 - present",
      responsibilities: [
        "Consulted on ~10 - 20 opportunities/month for BFSI clients, covering both international solutions (Core Banking, LOS, AML, Digital Banking, etc.) and CMC-developed products (OCR, C-Contract, chatbot, voicebot, RPA, etc.)",
        "Led solution design, POC, and bid processes",
        "Recognized by clients and internal teams for consulting quality and impact",
        "Earned multiple industry certifications (Oracle GenAI, Tibco EBX, Newgen)",
        "Contributed to expanding CMC's BFSI solution portfolio and client base",
      ],
    },
    {
      title: "Business Analyst Lead",
      company: "BFSI Solution Consulting Center, CMC Technology & Solution (CMC TS)",
      location: "Hanoi",
      period: "11/2022 - 12/2023",
      responsibilities: [
        "Project: An Binh Bank – Digital Banking Implementation (Backbase, Agile)",
        "Led a 3-member BA team; managed requirements, groomed user stories, supported UAT, and advised on Backbase utilization",
        "Delivered key features for internal and online banking apps (onboarding, payroll, billing)",
        "Supported go-live for 5 pilot clients",
      ],
    },
    {
      title: "Senior Product Development Specialist",
      company: "DataTechCenter, VMG Media JSC (VMG)",
      location: "Hanoi",
      period: "01/2021 - 10/2022",
      responsibilities: [
        "Managed full product lifecycle and customization for FI clients",
        "Delivered training, sales toolkits, and product consultancy",
      ],
      achievements: ["Top new employee 2021, 9× Creative Idea Award, Best Employee 2Q2022"],
    },
    {
      title: "Business Analyst",
      company: "Modelling and Datamart Center, Risk Division, HO, Maritime Bank (MSB)",
      location: "Hanoi",
      period: "08/2018 - 12/2021",
      responsibilities: [
        "Led Digital Lending & AI-Credit Scoring System projects",
        "Built 10+ data sources and launched 30+ products in 1 year",
        "Managed 3 internal systems (Scoring, Approval, Reporting)",
        "Gathered and documented requirements, led UAT, supported users, and enhanced systems based on evolving needs",
      ],
    },
    {
      title: "Corporate and Industry Analyst",
      company: "Analysis Center, Bao Viet Securities (BVSC)",
      location: "Hanoi",
      period: "08/2014 - 05/2017",
      responsibilities: [
        "Produced stock and industry reports, provided investment advice, and maintained a research database",
        "Built strong stakeholder network and published 2 well-received stock reports",
      ],
    },
  ],
  education: [
    {
      degree: "Master of Banking and Finance",
      institution: "Banking Academy",
      period: "2015-2018",
      gpa: "Very Good, GPA: 8.09/10 (Top 3)",
    },
    {
      degree: "Bachelor of Banking and Finance",
      institution: "National Economics University",
      period: "2010-2014",
      gpa: "Very Good, GPA: 8.76/10 (Top 10)",
      achievements: [
        "Certificate of the best students in whole 2010-2014 issued by NEU (2014)",
        "Scholarships in 6/7 semesters for top 10 students of class, scholarship of Banking Faculty for top 3 students",
      ],
    },
    {
      degree: "High School Student in Math",
      institution:
        "Major in Mathematics, Hanoi for Gifted Students, Hanoi University of Science, Hanoi National University",
      period: "2007-2010",
      gpa: "GPA: 9.45/10",
      achievements: [
        "Being class monitor, Certificate of the best students in the whole course (2007 – 2010) issued by Hanoi National University (2010)",
      ],
    },
  ],
  certifications: [
    "AI Agents Fundamentals by Hugging Face (2025)",
    "ISTQB® Certified Tester - Foundation Level by Udemy (2024)",
    "Oracle Cloud Infrastructure 2024 Generative AI Professional by Oracle (2024)",
    "Business Analysis Professional™ (CBAP®) Specialization by Starweaver (2024)",
    "IBM AI Product Manager Specialization by IBM (2024)",
    "IBM Product Manager Specialization by IBM (2024)",
    "Chinese for Beginners by Peking University (2024)",
    "Google Data Analytics by Google (2024)",
    "Google Digital Marketing & E-commerce by Google (2024)",
    "Google Project Management by Google (2023)",
    "Google UX Design by Google (2023)",
  ],
  skills: {
    languages: ["Vietnamese (native)", "English (intermediate)", "Chinese (beginner)", "German (beginner)"],
    methodologies: ["Agile", "Waterfall", "Hybrid"],
    tools: [
      "Project & Collaboration: Jira, Confluence, MS Office, Notion, Trello",
      "Database & Data Tool: SQL, Excel, Google Sheets",
      "Business Analysis & Modeling: Flowchart, BPMN, UML (Use Case, Activity, Sequence, Class), ERD",
      "Design & Prototyping: Figma, Draw.io, Canva, PlantUML, Mermaid",
      "Version Control and Deployment: Github, Netlify, Vercel",
      "AI & Automation Tools: ChatGPT, Gemini, Notion AI, Framer AI, Builder.io, Microsoft Copilot",
    ],
    productSkills: [
      "Product lifecycle management",
      "Requirement elicitation & documentation",
      "Stakeholder management",
      "UAT coordination and support",
      "Solution consulting",
    ],
    softSkills: [
      "Logical thinking & structured analysis",
      "Creative problem solving",
      "Strong writing & communication skills",
      "Adaptability, teamwork & independence",
      "High accountability & ability to work under pressure",
      "Mentoring and coaching junior BAs",
    ],
  },
}

export function generatePDF(): void {
  const doc = new jsPDF()
  const pageWidth = doc.internal.pageSize.getWidth()
  const pageHeight = doc.internal.pageSize.getHeight()
  const margin = 20
  let yPosition = margin

  // Helper function to add text with word wrapping
  const addText = (text: string, fontSize = 10, isBold = false, color = "#000000") => {
    doc.setFontSize(fontSize)
    doc.setFont("helvetica", isBold ? "bold" : "normal")
    doc.setTextColor(color)

    const lines = doc.splitTextToSize(text, pageWidth - 2 * margin)

    // Check if we need a new page
    if (yPosition + lines.length * fontSize * 0.4 > pageHeight - margin) {
      doc.addPage()
      yPosition = margin
    }

    doc.text(lines, margin, yPosition)
    yPosition += lines.length * fontSize * 0.4 + 5
  }

  const addSection = (title: string) => {
    yPosition += 10
    addText(title, 14, true, "#7c3aed")
    yPosition += 5
  }

  // Header
  addText(resumeData.personalInfo.name, 20, true, "#7c3aed")
  addText(resumeData.personalInfo.title, 12, true)

  // Contact Info
  addText(`Email: ${resumeData.personalInfo.email}`)
  addText(`Phone: ${resumeData.personalInfo.phone}`)
  addText(`Address: ${resumeData.personalInfo.address}`)
  addText(`Birth Date: ${resumeData.personalInfo.birthDate}`)

  // Overview
  addSection("OVERVIEW")
  addText(resumeData.overview)

  // Work Experience
  addSection("WORK EXPERIENCE")
  resumeData.workExperience.forEach((job) => {
    addText(`${job.title}`, 12, true)
    addText(`${job.company}, ${job.location}`)
    addText(`${job.period}`, 10, false, "#666666")

    job.responsibilities.forEach((resp) => {
      addText(`• ${resp}`)
    })

    if (job.achievements) {
      job.achievements.forEach((achievement) => {
        addText(`★ ${achievement}`, 10, false, "#7c3aed")
      })
    }
    yPosition += 10
  })

  // Education
  addSection("EDUCATION")
  resumeData.education.forEach((edu) => {
    addText(`${edu.degree}`, 12, true)
    addText(`${edu.institution} (${edu.period})`)
    if (edu.gpa) {
      addText(`${edu.gpa}`)
    }
    if (edu.achievements) {
      edu.achievements.forEach((achievement) => {
        addText(`• ${achievement}`)
      })
    }
    yPosition += 5
  })

  // Certifications
  addSection("CERTIFICATIONS")
  resumeData.certifications.forEach((cert) => {
    addText(`• ${cert}`)
  })

  // Skills
  addSection("SKILLS")
  addText("Languages:", 11, true)
  resumeData.skills.languages.forEach((lang) => {
    addText(`• ${lang}`)
  })

  addText("Methodologies:", 11, true)
  resumeData.skills.methodologies.forEach((method) => {
    addText(`• ${method}`)
  })

  addText("Tools:", 11, true)
  resumeData.skills.tools.forEach((tool) => {
    addText(`• ${tool}`)
  })

  addText("Product Skills:", 11, true)
  resumeData.skills.productSkills.forEach((skill) => {
    addText(`• ${skill}`)
  })

  addText("Soft Skills:", 11, true)
  resumeData.skills.softSkills.forEach((skill) => {
    addText(`• ${skill}`)
  })

  // Save the PDF
  doc.save("Thao-Dinh-Resume.pdf")
}
