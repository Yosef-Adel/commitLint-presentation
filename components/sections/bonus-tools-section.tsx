import { forwardRef } from "react"

const BonusToolsSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          Complementary Tools for <span className="text-cyan-400">Enhanced Git Workflow</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
            <span className="text-4xl block mb-3">🔗</span>
            <h3 className="text-xl font-bold mb-2 text-purple-400">Husky</h3>
            <p className="text-gray-400">runs Commitlint on commit</p>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
            <span className="text-4xl block mb-3">🛠️</span>
            <h3 className="text-xl font-bold mb-2 text-cyan-400">Lint-Staged</h3>
            <p className="text-gray-400">pre-commit file checks</p>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
            <span className="text-4xl block mb-3">🔄</span>
            <h3 className="text-xl font-bold mb-2 text-green-400">Semantic Release</h3>
            <p className="text-gray-400">automate versioning & changelogs</p>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
            <span className="text-4xl block mb-3">💡</span>
            <h3 className="text-xl font-bold mb-2 text-yellow-400">Gitmoji</h3>
            <p className="text-gray-400">fun + structure</p>
          </div>
        </div>
      </div>
    </section>
  )
})

export default BonusToolsSection
