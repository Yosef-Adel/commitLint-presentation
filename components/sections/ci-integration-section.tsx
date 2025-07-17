import { CopyableCode } from "@/components/copyable-code"
import { Cloud } from "lucide-react"
import { forwardRef } from "react"

const CiIntegrationSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          Integrating Commitlint with <span className="text-cyan-400">Continuous Integration (CI)</span>
        </h2>
        <p className="text-xl md:text-2xl mb-8 text-gray-400 leading-relaxed">
          Commitlint can be integrated into your CI pipeline to enforce commit message standards
          <br />
          before code is merged, allowing developers local flexibility.
        </p>
        <div className="space-y-6 text-left">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <p className="text-lg mb-3 text-purple-400 font-semibold">1. Install Commitlint and Conventional Config:</p>
            <CopyableCode
              code={`npm install @commitlint/cli @commitlint/config-conventional`}
              className="text-green-300 font-mono text-sm md:text-base bg-black/30"
              block
            />
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <p className="text-lg mb-3 text-purple-400 font-semibold">
              2. Configure Commitlint (e.g., `commitlint.config.js`):
            </p>
            <CopyableCode
              code={`echo "module.exports = { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js`}
              className="text-green-300 font-mono text-sm md:text-base bg-black/30"
              block
            />
          </div>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6">
            <p className="text-lg mb-3 text-purple-400 font-semibold">
              3. Add a CI step to validate commit messages (example for GitHub Actions):
            </p>
            <CopyableCode
              code={`name: CI

on: [push, pull_request]

jobs:
  commitlint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npx commitlint --from=HEAD~1 --to=HEAD --verbose`}
              className="text-green-300 font-mono text-sm overflow-x-auto bg-black/40"
              block
            />
          </div>
        </div>
        <p className="text-lg mt-8 text-gray-400 flex items-center justify-center">
          <Cloud className="w-5 h-5 mr-2 text-blue-400" />
          This ensures all merged commits adhere to your team's standards.
        </p>
      </div>
    </section>
  )
})

export default CiIntegrationSection
