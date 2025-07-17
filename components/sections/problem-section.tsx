import { forwardRef } from "react"

const ProblemSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-5xl">
        <h2 className="text-4xl md:text-6xl font-bold mb-12">
          The Consequences of <span className="text-red-400">Unstructured Commits</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 space-y-4">
            <div className="flex items-center space-x-4">
              <span className="text-3xl">🔍</span>
              <span className="text-lg">Lack of Clarity on Changes</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-3xl">🤝</span>
              <span className="text-lg">Impeded Team Collaboration</span>
            </div>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 space-y-4">
            <div className="flex items-center space-x-4">
              <span className="text-3xl">⚙️</span>
              <span className="text-lg">Challenges in Automation</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-3xl">📜</span>
              <span className="text-lg">Degraded Git History Readability</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

export default ProblemSection
