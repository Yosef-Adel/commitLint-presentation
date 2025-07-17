import { Zap, Users, Package } from "lucide-react"
import { forwardRef } from "react"

const WhyItMattersSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          Key Benefits of Implementing <span className="text-cyan-400">Commitlint</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 space-y-6">
            <div className="flex items-center space-x-4">
              <span className="text-3xl">🎯</span>
              <span className="text-lg">Enhanced Git History Clarity</span>
            </div>
            <div className="flex items-center space-x-4">
              <Package className="w-8 h-8 text-purple-400" />
              <span className="text-lg">Streamlined Release Management</span>
            </div>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 space-y-6">
            <div className="flex items-center space-x-4">
              <Users className="w-8 h-8 text-cyan-400" />
              <span className="text-lg">Improved Team Collaboration</span>
            </div>
            <div className="flex items-center space-x-4">
              <Zap className="w-8 h-8 text-yellow-400" />
              <span className="text-lg">Increased CI/CD Reliability</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

export default WhyItMattersSection
