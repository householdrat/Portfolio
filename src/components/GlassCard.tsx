'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/utils/classNames'
import { hoverGlow } from '@/utils/animations'

interface GlassCardProps {
  children: ReactNode
  className?: string
  isHoverable?: boolean
}

export function GlassCard({
  children,
  className = '',
  isHoverable = true,
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        'relative backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-6 sm:p-8',
        'shadow-glass hover:shadow-glass-lg transition-shadow duration-300',
        isHoverable && 'cursor-pointer',
        className,
      )}
      {...(isHoverable && hoverGlow)}
    >
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}
