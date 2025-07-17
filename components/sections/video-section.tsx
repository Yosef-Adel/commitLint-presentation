import { forwardRef } from "react"

const VideoSection = forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-5xl w-full">
        <h2 className="text-4xl md:text-6xl font-bold mb-12">
          The Challenge of <span className="text-red-400">Unstructured Commit History</span>
        </h2>

        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full rounded-lg shadow-lg"
          src="/git-navigation.mov"
          title="Screen recording of searching for a change"
        >
          Your browser does not support the video tag.
        </video>

        <p className="text-xl md:text-2xl mt-8 text-gray-400">
          Without clear commit messages, identifying specific changes becomes a significant challenge.
        </p>
      </div>
    </section>
  )
})

export default VideoSection
