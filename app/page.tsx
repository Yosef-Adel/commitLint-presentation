"use client"

import { useEffect, useState, useRef } from "react"

// Import all section components
import GitGraphSection from "@/components/sections/git-graph-section"
import VideoSection from "@/components/sections/video-section"
import DescriptiveTextSection from "@/components/sections/descriptive-text-section"
import ProblemSection from "@/components/sections/problem-section"
import HeroSection from "@/components/sections/hero-section"
import WhatItDoesSection from "@/components/sections/what-it-does-section"
import GandalfMemeSection from "@/components/sections/gandalf-meme-section"
import HowItWorksSection from "@/components/sections/how-it-works-section"
import CiIntegrationSection from "@/components/sections/ci-integration-section"
import DemoSection from "@/components/sections/demo-section"
import WhyItMattersSection from "@/components/sections/why-it-matters-section"
import BeforeAfterSection from "@/components/sections/before-after-section"
import CustomizeSection from "@/components/sections/customize-section"
import BonusToolsSection from "@/components/sections/bonus-tools-section"
import FinalThoughtsSection from "@/components/sections/final-thoughts-section"
import CallToActionSection from "@/components/sections/call-to-action-section"

export default function GitCommitsPresentation() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 15 // Total number of slides
  const sectionRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    // Initialize refs array with nulls for all slides
    sectionRefs.current = sectionRefs.current.slice(0, totalSlides)

    const handleScroll = () => {
      const scrollPosition = window.scrollY
      let closestSlideIndex = 0
      let minDiff = Number.POSITIVE_INFINITY

      sectionRefs.current.forEach((ref, index) => {
        if (ref) {
          const diff = Math.abs(scrollPosition - ref.offsetTop)
          if (diff < minDiff) {
            minDiff = diff
            closestSlideIndex = index
          }
        }
      })
      setCurrentSlide(closestSlideIndex)
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowRight":
        case "ArrowDown":
          event.preventDefault()
          if (currentSlide < totalSlides - 1) {
            scrollToSlide(currentSlide + 1)
          }
          break
        case "ArrowLeft":
        case "ArrowUp":
          event.preventDefault()
          if (currentSlide > 0) {
            scrollToSlide(currentSlide - 1)
          }
          break
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [currentSlide, totalSlides])

  const scrollToSlide = (index: number) => {
    if (sectionRefs.current[index]) {
      window.scrollTo({
        top: sectionRefs.current[index]!.offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="relative bg-[#0a0a0a] text-white">
      {/* Geometric background pattern */}
      <div className="fixed inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(45deg, transparent 40%, rgba(139, 92, 246, 0.1) 50%, transparent 60%),
                           linear-gradient(-45deg, transparent 40%, rgba(6, 182, 212, 0.1) 50%, transparent 60%)`,
            backgroundSize: "100px 100px",
          }}
        />
      </div>
      {/* Navigation Dots */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 flex space-x-2 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSlide(index)}
            className={`w-6 h-6 rounded-full transition-all duration-300 text-xs font-medium ${currentSlide === index
                ? "bg-purple-500 text-white shadow-lg shadow-purple-500/50"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
              }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Render each section, passing a ref */}
      <GitGraphSection ref={(el) => (sectionRefs.current[0] = el)} />
      <VideoSection ref={(el) => (sectionRefs.current[1] = el)} />
      {/* <DescriptiveTextSection ref={(el) => (sectionRefs.current[2] = el)} /> */}
      <ProblemSection ref={(el) => (sectionRefs.current[2] = el)} />
      <HeroSection ref={(el) => (sectionRefs.current[3] = el)} />
      <WhatItDoesSection ref={(el) => (sectionRefs.current[4] = el)} />
      <GandalfMemeSection ref={(el) => (sectionRefs.current[5] = el)} />
      <HowItWorksSection ref={(el) => (sectionRefs.current[6] = el)} />
      <CiIntegrationSection ref={(el) => (sectionRefs.current[7] = el)} />
      <DemoSection ref={(el) => (sectionRefs.current[8] = el)} />
      <WhyItMattersSection ref={(el) => (sectionRefs.current[9] = el)} />
      <BeforeAfterSection ref={(el) => (sectionRefs.current[10] = el)} />
      <CustomizeSection ref={(el) => (sectionRefs.current[11] = el)} />
      <BonusToolsSection ref={(el) => (sectionRefs.current[12] = el)} />
      <FinalThoughtsSection ref={(el) => (sectionRefs.current[13] = el)} />
      <CallToActionSection ref={(el) => (sectionRefs.current[14] = el)} />
    </div>
  )
}
