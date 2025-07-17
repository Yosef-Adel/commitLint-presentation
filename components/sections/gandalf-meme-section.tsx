import { forwardRef } from "react"

const GandalfMemeSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-4xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          <span className="text-purple-400">Commitlint: Preventing Non-Compliant Commits</span>
        </h2>
        <div className="flex items-center justify-center space-x-6 md:space-x-12 text-lg md:text-xl flex-wrap gap-6">
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
            <span className="text-4xl block mb-2">👤</span>
            <p className="text-gray-400">You</p>
          </div>
          <span className="text-2xl text-gray-500">➝</span>
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
            <span className="text-4xl block mb-2">💬</span>
            <p className="text-gray-400">Commit: "Stuff"</p>
          </div>
          <span className="text-2xl text-gray-500">➝</span>
          <div className="bg-purple-900/30 border-2 border-purple-500 rounded-xl p-6 text-center flex flex-col items-center justify-center">
            <span className="text-4xl block mb-2">🛑</span>
            <p className="text-purple-400 font-bold">Commitlint</p>
          </div>
        </div>
        <div className="w-full">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Ffacebook%2F000%2F002%2F144%2FYou_Shall_Not_Pass!_0-1_screenshot.jpg&f=1&nofb=1&ipt=f162ed37b424ff65d31fbdbd0f578475f10f162f0446194c20fb71d1d09a9110"
            alt="Gandalf saying You Shall Not Pass"
            className="w-30 h-auto mx-auto mt-4 rounded-lg shadow-lg"
          />
        </div>
        <p className="text-lg mt-8 text-gray-400">"This commit message does not meet the established guidelines."</p>
      </div>
    </section>
  )
})

export default GandalfMemeSection
