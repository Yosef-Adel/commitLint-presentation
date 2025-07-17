import { CheckCircle, XCircle } from "lucide-react"
import { forwardRef } from "react"

const HeroSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-5xl">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          Introducing <span className="text-purple-400">Commitlint</span>
        </h2>
        <p className="text-xl md:text-2xl mb-12 text-gray-400">
          A tool designed to ensure the consistency and clarity of your commit messages.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 space-y-4">
            <div className="flex items-center space-x-4 bg-green-900/20 border border-green-800/30 p-4 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <code className="text-green-300 font-mono">feat: add login page</code>
            </div>
            <div className="flex items-center space-x-4 bg-green-900/20 border border-green-800/30 p-4 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <code className="text-green-300 font-mono">fix: crash on load</code>
            </div>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 space-y-4">
            <div className="flex items-center space-x-4 bg-red-900/20 border border-red-800/30 p-4 rounded-lg">
              <XCircle className="w-5 h-5 text-red-400" />
              <code className="text-red-300 font-mono">asdfasdf</code>
            </div>
            <div className="flex items-center space-x-4 bg-red-900/20 border border-red-800/30 p-4 rounded-lg">
              <XCircle className="w-5 h-5 text-red-400" />
              <code className="text-red-300 font-mono">commit</code>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

export default HeroSection
