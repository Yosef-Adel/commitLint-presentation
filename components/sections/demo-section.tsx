import { CopyableCode } from "@/components/copyable-code"
import { forwardRef } from "react"

const DemoSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          Demonstration: Commitlint in <span className="text-purple-400">Practice</span>
        </h2>
        <div className="space-y-8">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-left">
            <p className="text-red-400 mb-4 font-semibold">❌ Bad commit attempt:</p>
            <CopyableCode code={`git commit -m "stuff"`} className="text-white font-mono bg-black/40" block />
            <div className="text-red-400 space-y-1 font-mono text-sm">
              <p>✖ subject may not be empty</p>
              <p>✖ type must be one of [feat, fix, chore, docs...]</p>
            </div>
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-left">
            <p className="text-green-400 mb-4 font-semibold">✅ Good commit:</p>
            <CopyableCode
              code={`git commit -m "fix: prevent crash on submit"`}
              className="text-white font-mono bg-black/40"
              block
            />
            <div className="text-green-400 font-mono text-sm">
              <p>✅ Passed!</p>
            </div>
          </div>
        </div>
        <p className="text-lg mt-8 text-gray-400">
          It fosters consistent commit practices across your team, reducing the need for manual oversight.
        </p>
      </div>
    </section>
  )
})

export default DemoSection
