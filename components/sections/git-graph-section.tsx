"use client"

import { useState, useCallback, forwardRef } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import type { JSX } from "react/jsx-runtime"

// Constants for graph drawing
const LANE_Y_POSITIONS = [50, 80, 110, 140, 170] // Y positions for lanes
const COMMIT_X_SPACING = 120 // Horizontal spacing between commits (increased for text)
const DOT_RADIUS = 6
const BRANCH_COLORS = ["#3b82f6", "#ec4899", "#10b981", "#f97316", "#a855f7"] // blue, pink, green, orange, purple

interface Commit {
  id: string
  message: string
  lane: number // Which horizontal lane it's on
  color: string
}

const GitGraphSection = forwardRef<HTMLElement>((props, ref) => {
  const [commitMessage, setCommitMessage] = useState("")
  const [commits, setCommits] = useState<Commit[]>([])
  const [currentLane, setCurrentLane] = useState(0) // 0 for main branch

  const handleAddCommit = useCallback(() => {
    if (commitMessage.trim()) {
      const newCommit: Commit = {
        id: `commit-${commits.length}`,
        message: commitMessage.trim(),
        lane: currentLane,
        color: BRANCH_COLORS[currentLane % BRANCH_COLORS.length],
      }
      setCommits((prev) => [newCommit, ...prev]) // Add new commit to the top (visual order)
      setCommitMessage("") // Clear input field
    }
  }, [commitMessage, commits, currentLane])

  const handleNewBranch = useCallback(() => {
    setCurrentLane((prev) => (prev + 1) % LANE_Y_POSITIONS.length) // Cycle through available lanes
  }, [])

  const handleMergeToMain = useCallback(() => {
    // Only create a merge commit if not already on the main branch
    if (currentLane !== 0) {
      const mergeCommit: Commit = {
        id: `commit-${commits.length}`,
        message: "Merged to main", // Specific message for merge
        lane: 0, // Merge commit appears on the main branch lane
        color: BRANCH_COLORS[0], // Merge commit uses the main branch color
      }
      setCommits((prev) => [mergeCommit, ...prev]) // Add the merge commit
    }
    // Then switch to the main branch lane for subsequent commits
    setCurrentLane(0)
  }, [currentLane, commits])

  // SVG drawing logic
  const graphWidth = Math.max(200, commits.length * COMMIT_X_SPACING + 50) // Min width, grows with commits
  const graphHeight = LANE_Y_POSITIONS[LANE_Y_POSITIONS.length - 1] + 50 // Max Y position + padding

  const getCommitPos = useCallback(
    (commit: Commit, index: number) => {
      // Oldest commit (commits[commits.length - 1]) should be at the left (smallest x)
      // Newest commit (commits[0]) should be at the right (largest x)
      const x = (commits.length - 1 - index) * COMMIT_X_SPACING + DOT_RADIUS + 20 // 20 for left padding
      const y = LANE_Y_POSITIONS[commit.lane]
      return { x, y }
    },
    [commits],
  )

  const graphElements: JSX.Element[] = []

  // Draw lines and dots
  for (let i = 0; i < commits.length; i++) {
    const currentCommit = commits[i] // This is the child commit (newer, to the right)
    const { x: childX, y: childY } = getCommitPos(currentCommit, i)

    // Draw line from parent to child
    if (i < commits.length - 1) {
      const parentCommit = commits[i + 1] // This is the parent commit (older, to the left)
      const { x: parentX, y: parentY } = getCommitPos(parentCommit, i + 1)

      if (currentCommit.lane === parentCommit.lane) {
        // Straight line if on same lane
        graphElements.push(
          <line
            key={`line-${currentCommit.id}-${parentCommit.id}`}
            x1={parentX}
            y1={parentY}
            x2={childX}
            y2={childY}
            stroke={currentCommit.color}
            strokeWidth="2"
          />,
        )
      } else {
        // Curved line for branching/merging
        // M parentX parentY C cp1x cp1y, cp2x cp2y, childX childY
        const cp1x = parentX + COMMIT_X_SPACING / 2
        const cp1y = parentY

        const cp2x = childX - COMMIT_X_SPACING / 2
        const cp2y = childY

        graphElements.push(
          <path
            key={`path-${currentCommit.id}-${parentCommit.id}`}
            d={`M ${parentX} ${parentY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${childX} ${childY}`}
            stroke={currentCommit.color}
            strokeWidth="2"
            fill="none"
          />,
        )
      }
    }

    // Draw dot for the commit
    graphElements.push(
      <circle key={`dot-${currentCommit.id}`} cx={childX} cy={childY} r={DOT_RADIUS} fill={currentCommit.color} />,
    )

    // Draw commit message
    graphElements.push(
      <text
        key={`text-${currentCommit.id}`}
        x={childX}
        y={childY - DOT_RADIUS - 5} // Position above the dot
        textAnchor="middle" // Center text horizontally
        fill="white"
        fontSize="10"
        className="font-mono"
      >
        {currentCommit.message.length > 15 ? currentCommit.message.substring(0, 12) + "..." : currentCommit.message}
      </text>,
    )
  }

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-between relative overflow-hidden px-6 py-12"
    >
      <div className="text-center z-10 max-w-5xl w-full flex-grow flex flex-col justify-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-12">Interactive Git History Exploration</h1>
        {/* Git Graph SVG - now directly styled as the main box */}
        <div className="flex-shrink-0 bg-gray-900/30 border border-gray-700 rounded-lg overflow-auto max-w-full p-4">
          <svg width={graphWidth} height={graphHeight} viewBox={`0 0 ${graphWidth} ${graphHeight}`} className="block">
            {graphElements}
          </svg>
        </div>
      </div>

      {/* Input fields and buttons at the bottom */}
      <div className="z-10 w-full max-w-3xl mt-8 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 space-y-4">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
          <Input
            type="text"
            placeholder="Enter your commit message..."
            value={commitMessage}
            onChange={(e) => setCommitMessage(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleAddCommit()
              }
            }}
            className="w-full md:w-auto flex-grow bg-gray-800 border-gray-700 text-white placeholder-gray-500"
          />
          <div className="flex space-x-2 w-full md:w-auto">
            <Button onClick={handleAddCommit} className="bg-purple-600 hover:bg-purple-700 flex-grow">
              Add Commit
            </Button>
            <Button
              onClick={handleNewBranch}
              variant="outline"
              className="border-cyan-500 text-cyan-400 hover:bg-cyan-900/20 flex-grow bg-transparent"
            >
              New Branch
            </Button>
            <Button
              onClick={handleMergeToMain}
              variant="outline"
              className="border-green-500 text-green-400 hover:bg-green-900/20 flex-grow bg-transparent"
            >
              Merge to Main
            </Button>
          </div>
        </div>
      </div>
      <ChevronDown className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-6 h-6 animate-bounce text-gray-500" />
    </section>
  )
})

export default GitGraphSection
