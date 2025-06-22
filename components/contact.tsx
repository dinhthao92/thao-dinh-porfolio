"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Linkedin, MessageCircle, ArrowRight } from "lucide-react"

export default function Contact() {
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

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "Thao Dinh",
      action: "Send Email",
      href: "mailto:thaodtt.works@gmail.com",
      color: "bg-purple-100 text-purple-700",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Connect with me professionally",
      action: "View Profile",
      href: "https://www.linkedin.com/in/homeythaodinh/",
      color: "bg-purple-100 text-purple-700",
    },
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Let's Connect</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I'm always interested in discussing new opportunities, collaborations, or sharing insights about business
              analysis and financial technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card
                key={method.title}
                className={`transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-lg ${method.color}`}>
                      <method.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{method.title}</h3>
                      <p className="text-gray-600 text-sm">{method.description}</p>
                    </div>
                  </div>
                  <Button asChild className="w-full bg-purple-700 hover:bg-purple-800 text-white">
                    <a href={method.href} target="_blank" rel="noopener noreferrer">
                      {method.action}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-purple-50 rounded-2xl p-8 text-center">
            <MessageCircle className="h-12 w-12 text-purple-700 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to Start a Conversation?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Whether you're looking for a business analyst, solution consultant, or just want to discuss the latest
              trends in financial technology, I'd love to hear from you.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <a href="mailto:thaodtt.works@email.com">
                Get In Touch
                <Mail className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-gray-200">
        <div className="text-center text-gray-500">
          <p>© 2025 Thao Dinh. All rights reserved.</p>
        </div>
      </footer>
    </section>
  )
}
