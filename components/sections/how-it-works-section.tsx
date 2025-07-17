import { CopyableCode } from "@/components/copyable-code"
import { forwardRef } from "react"

const HowItWorksSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          Implementation Guide: <span className="text-green-400">(Setting Up Commitlint)</span>
        </h2>
        <div className="space-y-6 text-left">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <p className="text-lg mb-3 text-cyan-400 font-semibold">1. Install Commitlint:</p>
            <CopyableCode
              code={`npm install -D @commitlint/cli @commitlint/config-conventional`}
              className="text-green-300 font-mono text-sm md:text-base bg-black/30"
              block
            />
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <p className="text-lg mb-3 text-cyan-400 font-semibold">2. Create commitlint.config.js</p>
            <CopyableCode
              code={`echo "export default { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js`}
              className="text-green-300 font-mono text-sm md:text-base bg-black/30"
              block
            />
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <p className="text-lg mb-3 text-cyan-400 font-semibold">3. Hook it up with Husky:</p>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm">For Husky v9:</p>
              <CopyableCode code={`npx husky init`} className="text-green-300 font-mono text-sm bg-black/30" block />
              <p className="text-gray-400 text-sm">Add commit message linting to commit-msg hook:</p>
              <CopyableCode
                code={`echo "npx --no -- commitlint --edit \\$1" > .husky/commit-msg`}
                className="text-green-300 font-mono text-sm bg-black/30"
                block
              />
            </div>
          </div>
        </div>
        <p className="text-lg mt-8 text-gray-400">
          Commitlint provides immediate feedback on commit message adherence, ensuring compliance.{" "}
        </p>
      </div>
    </section>
  )
})

export default HowItWorksSection
