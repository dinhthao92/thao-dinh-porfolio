"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export default function Education() {
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

  const educationData = [
    {
      degree: "Master of Banking and Finance",
      institution: "Banking Academy, Vietnam",
      period: "2015 – 2018",
      achievement: "GPA 8.09/10 – Top 3 of class",
      color: "bg-purple-50 border-purple-200",
    },
    {
      degree: "Bachelor of Banking and Finance",
      institution: "National Economics University (NEU), Vietnam",
      period: "2010 – 2014",
      achievement: "GPA 8.76/10 – Top 10 of cohort\nReceived 6/7 semester scholarships and Certificate of Excellence",
      color: "bg-blue-50 border-blue-200",
    },
    {
      degree: "High School for Gifted Students in Mathematics",
      institution: "Hanoi University of Science – VNU",
      period: "2007 – 2010",
      achievement: "GPA 9.45/10 – Class monitor, top graduate of cohort",
      color: "bg-green-50 border-green-200",
    },
  ]

  const certifications = [
    "AI Agents Fundamentals – Hugging Face (2025)",
    "ISTQB® Certified Tester – Foundation Level – Udemy (2024)",
    "Oracle Cloud Infrastructure Generative AI Professional – Oracle (2024)",
    "CBAP® – Certified Business Analysis Professional™ Specialization – Starweaver (2024)",
    "AI Product Manager Specialization – IBM (2024)",
    "Product Manager Specialization – IBM (2024)",
    "Chinese for Beginners – Peking University (2024)",
    "Google UX Design – Google (2023)",
    "Google Data Analytics – Google (2024)",
    "Google Digital Marketing & E-commerce – Google (2024)",
    "Google Project Management – Google (2023)",
  ]

  return (
    <section id="education" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Education &amp; Certifications</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Strong academic foundation in banking and finance, complemented by cutting-edge certifications in AI,
              business analysis, and digital product management.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Education</h3>
              <div className="space-y-6">
                {educationData.map((edu, index) => (
                  <Card
                    key={index}
                    className={`transition-all duration-500 hover:shadow-lg hover:-translate-y-1 border-2 ${edu.color} ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{edu.degree}</h4>
                      <p className="text-purple-700 font-medium mb-1">{edu.institution}</p>
                      <p className="text-gray-600 text-sm mb-3">{edu.period}</p>
                      <div className="text-sm text-gray-700 bg-white/50 p-3 rounded-lg">
                        {edu.achievement.split("\n").map((line, i) => (
                          <p key={i} className={i > 0 ? "mt-1" : ""}>
                            {line}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Certifications Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Certifications</h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <Card
                    key={index}
                    className={`transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0"></div>
                        <p className="text-gray-700 text-sm font-medium">{cert}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
