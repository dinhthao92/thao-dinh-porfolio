"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      const el = document.getElementById(sectionId)
      if (el) el.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  const navigationLinks = [
    { label: "Welcome", sectionId: "home" },
    { label: "My Story", sectionId: "about" },
    { label: "What I Do", sectionId: "skills" },
    { label: "Highlight", sectionId: "projects" },
    { label: "Journey", sectionId: "experience" },
    { label: "Learning", sectionId: "education" },
    { label: "Resume", sectionId: "resume" },
    { label: "Let's Connect", sectionId: "contact" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold text-purple-900 cursor-pointer" onClick={() => scrollToSection("home")}>
            Thao Dinh
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex space-x-8">
            {navigationLinks.map((link) => (
              <button
                key={link.sectionId}
                onClick={() => scrollToSection(link.sectionId)}
                className="text-gray-700 hover:text-purple-700 transition-colors duration-200 font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile menu toggle */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile links */}
        {isOpen && (
          <div className="md:hidden bg-white border-t">
            {navigationLinks.map((link) => (
              <button
                key={link.sectionId}
                onClick={() => scrollToSection(link.sectionId)}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-purple-700 transition-colors duration-200"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
