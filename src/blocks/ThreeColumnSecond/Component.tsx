import React from 'react'
import type { ThreeColumnSecondBlock } from '@/payload-types'
import { Media } from '@/components/Media'
import { CTAButton } from '@/components/CTAButton'

export const ThreeColumnSecondSection: React.FC<ThreeColumnSecondBlock> = ({
  imageLeft,
  imageCenter,
  centerText,
  bottomText,
}) => {
  return (
    <section className="p-12">
      <div className="container grid grid-cols-1 gap-8 lg:grid-cols-3 md:gap-12">
        {/* Center Column */}
        <div className="flex flex-col items-center justify-center space-y-6 text-start">
          {centerText && <p className="text-xl text-black">{centerText}</p>}
          {imageCenter && (
            <div className="relative w-full h-[250px] rounded-3xl">
              <Media
                resource={imageCenter}
                fill
                priority
                imgClassName="w-full h-full object-cover rounded-3xl"
              />
            </div>
          )}
        </div>

        {/* Left Column */}
        <div className="relative h-full min-h-[400px] md:min-h-[500px] rounded-3xl">
          {imageLeft && (
            <Media
              resource={imageLeft}
              fill
              priority
              imgClassName="w-full h-full object-cover rounded-3xl"
            />
          )}
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-end items-end gap-16 min-h-[none] lg:min-h-[500px]">
          {bottomText && <p className="text-end text-black">{bottomText}</p>}
        </div>
      </div>
    </section>
  )
}
