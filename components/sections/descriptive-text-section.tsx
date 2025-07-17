import { forwardRef } from "react"

const DescriptiveTextSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-5xl">
        <p className="text-4xl md:text-6xl font-bold text-gray-200 leading-relaxed">
          Observe the Evolution of Your Commit History,
          <br />
          Including <span className="text-cyan-400">Branches</span> and <span className="text-purple-400">Merges</span>.
        </p>
      </div>
    </section>
  )
})

export default DescriptiveTextSection
