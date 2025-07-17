import { CopyableCode } from "@/components/copyable-code"
import { forwardRef } from "react"

const CustomizeSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          Customizing <span className="text-purple-400">Commitlint</span> for Your Workflow
        </h2>
        <div className="space-y-6">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-left">
            <span className="text-green-400 text-lg">✔️</span>
            <span className="ml-3">Enforce Scopes: </span>
            <span className="text-cyan-300 font-mono">feat(auth): ...</span>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-left">
            <span className="text-blue-400 text-lg">📝</span>
            <span className="ml-3">Validate Subject Casing: lowercase, imperative</span>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-left">
            <span className="text-yellow-400 text-lg">✨</span>
            <span className="ml-3">Incorporate Emojis for Enhanced Readability (Optional)</span>
          </div>
        </div>
        <CopyableCode
          code={`module.exports = {
          extends: ['@commitlint/config-conventional'],
          rules: {
            'type-enum': [2, 'always', ['feat', 'fix', 'chore']],
          },
        };`}
          className="text-green-300 font-mono text-sm overflow-x-auto bg-black/40"
          block
        />
      </div>
    </section>
  )
})

export default CustomizeSection
