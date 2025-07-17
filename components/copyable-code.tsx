"use client"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"

interface CopyableCodeProps {
  code: string
  className?: string
  block?: boolean // If true, renders as a pre block with button top-right
}

export function CopyableCode({ code, className, block = false }: CopyableCodeProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000) // Reset after 2 seconds
    })
  }, [code])

  const CodeElement = block ? "pre" : "code"

  return (
    <div className={`relative ${block ? "w-full" : "inline-flex items-center"}`}>
      <CodeElement className={`${className} ${block ? "block p-3 rounded text-left" : ""}`}>{code}</CodeElement>
      <Button
        variant="ghost"
        size="sm"
        onClick={handleCopy}
        className={`absolute ${block ? "top-2 right-2" : "ml-2 -mt-1"} p-1 h-auto w-auto text-gray-400 hover:bg-gray-700 hover:text-white`}
        aria-label={copied ? "Copied" : "Copy code"}
      >
        {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
      </Button>
    </div>
  )
}
