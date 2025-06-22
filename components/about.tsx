"use client"

import { useEffect, useRef, useState } from "react"

export default function About() {
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

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              With over a decade in the banking and financial services industry, I help organizations bridge the gap
              between vision and execution—aligning business strategy with smart technology solutions. I'm passionate
              about turning complex challenges into simple, scalable, and high-impact outcomes.
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-amber-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">My Values</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-purple-700 mb-2">Innovation</h4>
                <p className="text-gray-600">Embracing new technologies and methodologies to drive meaningful change</p>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-purple-700 mb-2">Collaboration</h4>
                <p className="text-gray-600">Building strong partnerships with stakeholders to achieve shared goals</p>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-purple-700 mb-2">Excellence</h4>
                <p className="text-gray-600">Delivering high-quality solutions that exceed expectations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
