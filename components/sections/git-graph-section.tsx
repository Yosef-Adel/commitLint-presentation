"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { templateExtend, TemplateName } from "@gitgraph/core";
import { Gitgraph } from "@gitgraph/react";
import { forwardRef, useCallback, useState, useRef } from "react";

const BRANCH_COLORS = ["#3b82f6", "#ec4899", "#10b981", "#f97316", "#a855f7"]; // blue, pink, green, orange, purple

const customTemplate = templateExtend(TemplateName.Metro, {
  colors: BRANCH_COLORS,
  commit: {
    spacing: 80,
    dot: {
      size: 12,
    },
    message: {
      display: true,
      font: "normal 12pt monospace",
      color: "white",
      displayAuthor: false,
    },
  },
  branch: {
    spacing: 50,
    lineWidth: 4,
  },
});

const GitGraphSection = forwardRef<HTMLElement>((props, ref) => {
  const [commitMessage, setCommitMessage] = useState("");
  const [currentBranch, setCurrentBranch] = useState("main");
  const [branchCount, setBranchCount] = useState(1);
  const gitgraphRef = useRef<any>(null);

  const handleAddCommit = useCallback(() => {
    if (commitMessage.trim() && gitgraphRef.current) {
      const branch = gitgraphRef.current.branch(currentBranch);
      branch.commit(commitMessage.trim());
      setCommitMessage("");
    }
  }, [commitMessage, currentBranch]);

  const handleNewBranch = useCallback(() => {
    if (gitgraphRef.current) {
      const newBranchName = `branch-${branchCount}`;
      gitgraphRef.current.branch(newBranchName);
      setCurrentBranch(newBranchName);
      setBranchCount((prev) => prev + 1);
    }
  }, [branchCount]);

  const handleMergeToMain = useCallback(() => {
    if (gitgraphRef.current && currentBranch !== "main") {
      const mainBranch = gitgraphRef.current.branch("main");
      mainBranch.merge(currentBranch, "Merged to main");
      setCurrentBranch("main");
    }
  }, [currentBranch]);

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-between relative overflow-hidden px-6 py-12"
    >
      <div className="text-center z-10 max-w-5xl w-full flex-grow flex flex-col">
        <h1 className="text-5xl md:text-7xl font-bold mb-12">
          Interactive Git History Exploration
        </h1>

        {/* Git Graph - Fixed height with scrolling */}
        <div className="bg-gray-900/30 border border-gray-700 rounded-lg max-w-full p-4 mb-8 h-96 overflow-auto">
          <Gitgraph
            options={{
              template: customTemplate,
            }}
          >
            {(gitgraph) => {
              // Store the gitgraph instance for button handlers
              gitgraphRef.current = gitgraph;

              // Initialize main branch
              const main = gitgraph.branch("main");
              main.commit("Initial commit");

              return null;
            }}
          </Gitgraph>
        </div>

        {/* Controls - Moved to bottom */}
        <div className="z-10 w-full max-w-3xl mx-auto bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <Input
              type="text"
              placeholder="Enter your commit message..."
              value={commitMessage}
              onChange={(e) => setCommitMessage(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleAddCommit();
                }
              }}
              className="w-full md:w-auto flex-grow bg-gray-800 border-gray-700 text-white placeholder-gray-500"
            />
            <div className="flex space-x-2 w-full md:w-auto">
              <Button
                onClick={handleAddCommit}
                className="bg-purple-600 hover:bg-purple-700 flex-grow"
              >
                Add Commit
              </Button>
              <Button
                onClick={handleNewBranch}
                variant="outline"
                className="border-cyan-500 text-cyan-400 hover:text-cyan-400 hover:bg-transparent flex-grow bg-transparent"
              >
                New Branch
              </Button>
              <Button
                onClick={handleMergeToMain}
                variant="outline"
                className="border-green-500 text-green-400 hover:text-green-400 hover:bg-transparent  flex-grow bg-transparent"
              >
                Merge to Main
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default GitGraphSection;
