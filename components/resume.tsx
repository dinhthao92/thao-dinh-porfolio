"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, FileText, Award, Briefcase, GraduationCap, ExternalLink } from "lucide-react"

export default function Resume() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)
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

  const handleDownload = () => {
    setIsDownloading(true)

    // Simple direct download approach
    const link = document.createElement("a")
    link.href = "/resume/thao-dinh-resume.pdf"
    link.download = "Thao-Dinh-Resume.pdf"
    link.target = "_blank"

    // Add to DOM temporarily and click
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    setTimeout(() => setIsDownloading(false), 1000)
  }

  const handlePreview = () => {
    window.open("/resume/thao-dinh-resume.pdf", "_blank")
  }

  const highlights = [
    {
      icon: Briefcase,
      title: "10+ Years Experience",
      description: "Banking & Financial Services",
    },
    {
      icon: Award,
      title: "Certified Professional",
      description: "Business Analysis & Project Management",
    },
    {
      icon: GraduationCap,
      title: "Advanced Education",
      description: "MBA in Finance & Technology",
    },
  ]

  return (
    <section id="resume" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Resume</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Download my complete resume to learn more about my professional experience, education, and achievements in
              business analysis and solution consulting.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <Card
                  key={highlight.title}
                  className={`text-center transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <Icon className="h-12 w-12 text-purple-700 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{highlight.title}</h3>
                    <p className="text-gray-600 text-sm">{highlight.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="bg-gradient-to-r from-purple-700 to-purple-800 rounded-2xl p-8 text-center text-white">
            <FileText className="h-16 w-16 mx-auto mb-6 opacity-90" />
            <h3 className="text-2xl font-bold mb-4">Ready to Learn More?</h3>
            <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
              Get the full details of my professional journey, including detailed project descriptions, technical
              skills, certifications, and career progression.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={handleDownload}
                disabled={isDownloading}
                size="lg"
                className="bg-white text-purple-700 hover:bg-gray-100 px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Download className="mr-2 h-5 w-5" />
                {isDownloading ? "Đang tải..." : "Download Resume"}
              </Button>

              <Button
                onClick={handlePreview}
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-purple-700 px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 bg-transparent"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Preview
              </Button>
            </div>

            {/* File info */}
            <div className="mt-6 text-center"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
