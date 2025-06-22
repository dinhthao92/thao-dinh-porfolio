"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 },
    )

    observer.observe(el)
    return () => observer.unobserve(el)
  }, [])

  const skillCategories = [
    {
      title: "Languages",
      items: ["Vietnamese (native)", "English (intermediate)", "Chinese (beginner)", "German (beginner)"],
      color: "bg-purple-100 text-purple-700",
    },
    {
      title: "Methodologies",
      items: ["Agile", "Waterfall", "Hybrid"],
      color: "bg-blue-100 text-blue-700",
    },
    {
      title: "Business Analysis & Product",
      items: [
        "Requirements elicitation & documentation",
        "Process modeling: BPMN, UML (Use Case, Activity, Sequence, Class), Flowchart, ERD",
        "Stakeholder management",
        "UAT planning & coordination",
        "Product lifecycle ownership",
        "Solution consulting & client workshops",
      ],
      color: "bg-green-100 text-green-700",
    },
    {
      title: "Project & Collaboration Tools",
      items: ["Jira, Confluence, MS Office, Notion, Trello"],
      color: "bg-amber-100 text-amber-700",
    },
    {
      title: "Data & Visualization Tools",
      items: ["SQL, Excel, Google Sheets"],
      color: "bg-indigo-100 text-indigo-700",
    },
    {
      title: "Design & Modeling Tools",
      items: ["Figma, Draw.io, Canva, PlantUML, Mermaid"],
      color: "bg-pink-100 text-pink-700",
    },
    {
      title: "Version Control & Deployment",
      items: ["GitHub, Netlify, Vercel"],
      color: "bg-teal-100 text-teal-700",
    },
    {
      title: "AI & Automation Tools",
      items: ["ChatGPT, Gemini, Notion AI, Framer AI, Builder.io, Microsoft Copilot"],
      color: "bg-violet-100 text-violet-700",
    },
    {
      title: "Soft Skills",
      items: [
        "Analytical & logical thinking",
        "Creative problem solving",
        "Clear writing & communication",
        "High accountability & stress tolerance",
        "Collaborative & independent working style",
        "Mentoring and coaching junior Business Analysts",
      ],
      color: "bg-rose-100 text-rose-700",
    },
  ]

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Core Skills & Expertise</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Technologies I work with and skills I've developed throughout my career in business analysis and solution
              consulting.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={category.title}
                className={`transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${category.color}`}>
                    {category.title}
                  </div>
                  <div className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="text-sm text-gray-600 leading-relaxed">
                        • {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
