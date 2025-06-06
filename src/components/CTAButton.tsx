'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

type CTAButtonProps = {
  href?: string
  text: string
  arrow?: boolean
  variant?: 'transparent' | 'dark'
  className?: string
  textClassName?: string
  iconClassName?: string
  onClick?: () => void
  newTab?: boolean
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  href,
  text,
  arrow = false,
  variant = 'transparent',
  className = '',
  textClassName = '',
  iconClassName = '',
  onClick,
  newTab = false,
}) => {
  const baseClasses =
    'items-center justify-center gap-2 transition-all duration-300 border rounded-full text-3xl !py-2 !px-6 font-normal'

  const stylesByVariant = {
    transparent: {
      base: 'bg-transparent text-white border-white',
      hover: 'hover:bg-white hover:text-black',
      border: 'border-white',
    },
    dark: {
      base: 'bg-black text-white border-black',
      hover: 'hover:bg-white hover:text-black hover:border-black',
      border: 'border-black',
    },
  }

  const variantClasses = `${stylesByVariant[variant].base} ${stylesByVariant[variant].hover}`

  const content = (
    <span className="flex items-center gap-2">
      <span className={`transition-colors text-xl lg:text-2xl ${textClassName}`}>{text}</span>
      {arrow && <ArrowRight className={`w-4 h-4 ${iconClassName}`} />}
    </span>
  )

  if (href) {
    return (
      <Link
        href={href}
        target={newTab ? '_blank' : undefined}
        rel={newTab ? 'noopener noreferrer' : undefined}
        className={`${baseClasses} ${variantClasses} ${className}`}
        onClick={onClick}
      >
        {content}
      </Link>
    )
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {content}
    </button>
  )
}
