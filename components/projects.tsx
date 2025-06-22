"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smartphone, Brain, Users, TrendingUp } from "lucide-react"

export default function Projects() {
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

  const projects = [
    {
      category: "Digital Transformation",
      title: "Digital Banking Transformation",
      description:
        "Led the implementation of a Backbase-based digital banking platform, optimizing onboarding, payroll, and billing processes for a mid-sized bank.",
      impact: "40% reduction in onboarding time; enabled go-live for 5 pilot customers.",
      technologies: ["Backbase", "Mobile Banking", "Process Design", "UAT Coordination", "Agile Delivery"],
      categoryColor: "bg-blue-100 text-blue-800",
      icon: Smartphone,
    },
    {
      category: "AI & Risk Analytics",
      title: "AI-Powered Credit Scoring (AICSS)",
      description:
        "Delivered an AI-driven internal credit scoring solution to automate and improve the risk assessment process for unsecured loans.",
      impact: "Improved risk scoring accuracy; reduced processing time by 50% for unsecured loans.",
      technologies: ["Credit Scoring", "Data Modeling", "Risk Analytics", "AI Consulting"],
      categoryColor: "bg-purple-100 text-purple-800",
      icon: Brain,
    },
    {
      category: "Compliance & Risk Management",
      title: "AML Advisory for Regulatory Compliance",
      description:
        "Provided consulting for AML system setup, covering blacklist integration, rule configuration, risk scoring, and compliance reporting aligned with regulations.",
      impact: "Enhanced detection of suspicious activities; reduced manual compliance effort by 90%.",
      technologies: [
        "AML Systems",
        "Compliance Rules",
        "Risk Scoring",
        "Blacklist Integration",
        "Regulatory Frameworks",
      ],
      categoryColor: "bg-red-100 text-red-800",
      icon: TrendingUp,
    },
    {
      category: "Mentoring & Training",
      title: "BA Mentorship Program (VTI Academy)",
      description:
        "Designed and delivered BA training for professionals, guiding 20+ learners per cohort through BABOK-aligned practices and real-world case studies.",
      impact: "Delivered 10+ sessions; enabled learners to apply BA skills with confidence and clarity.",
      technologies: ["BABOK", "Mentoring", "Stakeholder Analysis", "Training Design", "Case Study Evaluation"],
      categoryColor: "bg-green-100 text-green-800",
      icon: Users,
    },
  ]

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Showcasing key initiatives that demonstrate my expertise in driving digital transformation, risk
              management, and operational excellence across the banking and financial services sector.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className={`transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-purple-100 rounded-lg">
                      <project.icon className="h-6 w-6 text-purple-700" />
                    </div>
                    <Badge variant="secondary" className={project.categoryColor}>
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-purple-700 mb-2">Key Impact:</h4>
                    <p className="text-sm text-gray-700 bg-green-50 p-3 rounded-lg border-l-4 border-green-400">
                      {project.impact}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Technologies & Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
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
