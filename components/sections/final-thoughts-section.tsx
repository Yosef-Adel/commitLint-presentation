import { forwardRef } from "react"

const FinalThoughtsSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-5xl">
        <div className="text-6xl mb-8">💡</div>
        <blockquote className="text-2xl md:text-4xl font-bold mb-12 italic text-gray-200 leading-relaxed">
          "A good commit message tells a story —<br />
          <span className="text-purple-400">Commitlint</span> makes sure you tell it right."
        </blockquote>
        <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
          Tools like Commitlint are not merely about control; they are instrumental in fostering clarity,
          <br />
          enhancing teamwork, and ensuring the longevity of your projects.
        </p>
      </div>
    </section>
  )
})

export default FinalThoughtsSection
