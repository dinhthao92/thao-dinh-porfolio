"use client"

import { ArrowRight, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToResume = () => {
    const element = document.getElementById("resume")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-amber-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in-up text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-purple-700">Thao Dinh</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 mb-4 font-medium">Senior Business Analyst &amp; Solution Consultant</p>
            <p className="text-lg sm:text-xl text-gray-600 mb-12 leading-relaxed">
              Empowering financial institutions to innovate through smart technology, actionable insights, and streamlined operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={scrollToResume}
                variant="outline"
                size="lg"
                className="border-purple-700 text-purple-700 hover:bg-purple-50 px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 sm:w-96 sm:h-96 relative overflow-hidden rounded-full shadow-2xl border-8 border-white">
                <Image
                  src="/images/thao-profile.png"
                  alt="Thao Dinh - Business Analyst & Solution Consultant"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-200 rounded-full opacity-60 animate-pulse"></div>
              <div
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-200 rounded-full opacity-40 animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
