'use client'

import React from 'react'
import type { ThreeColumnSectionBlock } from '@/payload-types'
import { Media } from '@/components/Media'
import { CTAButton } from '@/components/CTAButton'

export const ThreeColumnSection: React.FC<ThreeColumnSectionBlock> = ({
  imageLeft,
  imageCenter,
  centerText,
  bottomText,
  linkUrl,
  buttonText,
}) => {
  return (
    <section className="p-12">
      <div className="container grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
        {/* First column - Full height image */}
        <div className="relative h-full min-h-[400px] md:min-h-[500px] rounded-3xl">
          <Media
            resource={imageLeft}
            fill
            priority
            imgClassName=" w-full h-full rounded-3xl object-cover"
          />
        </div>

        {/* Second column - Text in middle with image */}
        <div className="flex flex-col items-center justify-center space-y-6 text-start">
          {centerText && <p className="text-xl	text-black">{centerText}</p>}
          {imageCenter && (
            <div className="relative w-full h-[250px] rounded-3xl">
              <Media
                resource={imageCenter}
                fill
                priority
                imgClassName=" w-full h-full rounded-3xl object-cover"
              />
            </div>
          )}
        </div>

        {/* Third column - Text at bottom */}
        <div className="flex flex-col justify-end items-end gap-8 lg:gap-16 min-h-none lg:min-h-[500px]">
          <CTAButton
            href={linkUrl ?? '#'}
            text={buttonText ?? 'View All Projects'}
            arrow={true}
            variant="dark"
            className="px-8"
          />
          {bottomText && <p className="text-end text-black">{bottomText}</p>}
        </div>
      </div>
    </section>
  )
}
