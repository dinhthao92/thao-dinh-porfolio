"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
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

  const experiences = [
    {
      title: "Senior Solution Consultant",
      company: "CMC Technology & Solution (CMC TS)",
      period: "01/2024 – Present",
      description:
        "Consulting BFSI clients on digital banking, AML, LOS, and AI-powered solutions. Delivered 10B+ VND in contracts and led 10–20 opportunities monthly across both CMC-developed and international platforms.",
    },
    {
      title: "BA Mentor (Part-time)",
      company: "VTI Academy for Enterprise",
      period: "03/2025 – Present",
      description:
        "Designed and delivered BA training programs for professionals. Mentored 20+ learners per course; developed case studies adopted across the curriculum.",
    },
    {
      title: "Business Analyst Lead – ABBANK Digital Banking Project",
      company: "CMC TS",
      period: "11/2022 – 12/2023",
      description:
        "Led a 3-member BA team in Backbase implementation. Delivered onboarding, payroll, and billing modules; supported go-live for 5 pilot clients.",
    },
    {
      title: "Senior Product Development Specialist",
      company: "VMG Media JSC",
      period: "01/2021 – 10/2022",
      description:
        "Managed full product lifecycle for fintech solutions. Launched 30+ products, including AI-powered credit scoring and digital lending. Received multiple awards for innovation and performance.",
    },
    {
      title: "Business Analyst",
      company: "Maritime Bank (MSB)",
      period: "08/2018 – 12/2021",
      description:
        "Maintained and enhanced internal risk systems. Collected and analyzed requirements, led UAT, and drove system improvements for scoring, approval, and reporting platforms.",
    },
    {
      title: "Corporate & Industry Analyst",
      company: "Bao Viet Securities (BVSC)",
      period: "08/2014 – 05/2017",
      description:
        "Produced stock research and industry reports. Built data models and stakeholder networks; published high-impact investment insights.",
    },
  ]

  return (
    <section id="experience" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A decade of progressive leadership in business analysis, solution consulting, and product development
              across the banking and financial services industry.
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((job, index) => (
              <Card
                key={index}
                className={`transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0">
                    <div>
                      <CardTitle className="text-xl text-gray-900">{job.title}</CardTitle>
                      <p className="text-lg font-medium text-purple-700">{job.company}</p>
                    </div>
                    <Badge
                      variant="outline"
                      className="self-start md:self-center bg-purple-50 text-purple-700 border-purple-200"
                    >
                      {job.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{job.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
