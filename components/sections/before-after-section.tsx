import { forwardRef } from "react"

const BeforeAfterSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          Impact Assessment: Team Performance <span className="text-red-400">Before</span> and{" "}
          <span className="text-green-400">After</span> Commitlint Adoption
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-red-900/10 border border-red-800/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-red-400">Before Implementation</h3>
            <div className="space-y-4 text-lg text-gray-300">
              <p>Inconsistent "fix" messages</p>
              <p>Vague commit descriptions</p>
              <p>Lack of clear authorship</p>
              <div className="text-6xl mt-6">⚠️</div>
              <p className="text-sm text-gray-500">Challenges in tracking changes</p>
            </div>
          </div>
          <div className="bg-green-900/10 border border-green-800/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-green-400">After Implementation</h3>
            <div className="space-y-4 text-lg text-gray-300">
              <p>"fix: resolve login bug"</p>
              <p>"feat: add user roles"</p>
              <p>Transparent and structured history</p>
              <div className="text-6xl mt-6">✅</div>
              <p className="text-sm text-gray-500">Achieving high standards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

export default BeforeAfterSection
