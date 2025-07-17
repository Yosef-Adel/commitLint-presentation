import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import { forwardRef } from "react"

const CallToActionSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          Embracing <span className="text-green-400">Structured Commit Practices</span>
        </h2>
        <div className="space-y-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
              <span className="text-4xl block mb-3">🚀</span>
              <p className="text-lg">Integrate into your project today</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
              <span className="text-4xl block mb-3">👥</span>
              <p className="text-lg">Recommend to your team</p>
            </div>
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
              <span className="text-4xl block mb-3">📈</span>
              <p className="text-lg">Benefit from improved project maintainability</p>
            </div>
          </div>
          <div className="space-y-4">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 border border-purple-500 text-white px-8 py-4 text-lg rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <Github className="w-5 h-5 mr-2" />
              commitlint.js.org
            </Button>
            <p className="text-gray-400">Begin your journey with Commitlint for enhanced commit discipline!</p>
          </div>
        </div>
      </div>
    </section>
  )
})

export default CallToActionSection
