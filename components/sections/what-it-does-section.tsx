import { Github } from "lucide-react"
import { forwardRef } from "react"

const WhatItDoesSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          Commitlint: Enforcing Standards for Commit Messages
          <br />
          <span className="text-cyan-400">Prior to Integration</span>
        </h2>
        <div className="flex items-center justify-center space-x-6 md:space-x-12 text-lg md:text-xl flex-wrap gap-6">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
            <span className="text-4xl block mb-2">👤</span>
            <p className="text-gray-400">You</p>
          </div>
          <span className="text-2xl text-gray-500">➝</span>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
            <span className="text-4xl block mb-2">💬</span>
            <p className="text-gray-400">Commit</p>
          </div>
          <span className="text-2xl text-gray-500">➝</span>
          <div className="bg-purple-900/30 border-2 border-purple-500 rounded-xl p-6 text-center">
            <span className="text-4xl block mb-2">🛑</span>
            <p className="text-purple-400 font-bold">Commitlint</p>
          </div>
          <span className="text-2xl text-gray-500">➝</span>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
            <Github className="w-10 h-10 mx-auto mb-2 text-gray-400" />
            <p className="text-gray-400">Git</p>
          </div>
        </div>
      </div>
    </section>
  )
})

export default WhatItDoesSection
