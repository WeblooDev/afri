'use client'

import React from 'react'
import { CTAButton } from '@/components/CTAButton'
import type { CarouselDescriptionBlock } from '@/payload-types'

export const CarouselDescription: React.FC<CarouselDescriptionBlock> = ({
  titleTop,
  linkUrl,
  buttonText,
}) => {
  return (
    <section className="container w-full p-12 flex flex-col lg:flex-row text-black justify-end items-center lg:items-end gap-8">
      <CTAButton
        href={linkUrl ?? '#'}
        text={buttonText ?? 'Get Started'}
        arrow={true}
        variant="dark"
      />
      <p className="text-lg w-[80%] lg:w-[40%] text-center lg:text-end">{titleTop}</p>
    </section>
  )
}
