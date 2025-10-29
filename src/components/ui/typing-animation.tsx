'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

interface TypingAnimationProps {
  text?: string
  steps?: string[]
  duration?: number
  className?: string
}

export default function TypingAnimation({
  text,
  steps,
  duration = 200,
  className,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>('')
  const [i, setI] = useState<number>(0)

  const targetSteps =
    steps || (text ? text.split('').map((_, i) => text.substring(0, i + 1)) : [])

  useEffect(() => {
    if (targetSteps.length === 0) {
      setDisplayedText(text || '')
      return
    }

    const typingEffect = setInterval(() => {
      if (i < targetSteps.length) {
        setDisplayedText(targetSteps[i])
        setI(i + 1)
      } else {
        clearInterval(typingEffect)
      }
    }, duration)

    return () => {
      clearInterval(typingEffect)
    }
  }, [duration, i, targetSteps])

  return (
    <h1
      className={cn(
        'font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm',
        className,
      )}
    >
      {displayedText ? displayedText : targetSteps[0] || text}
    </h1>
  )
}