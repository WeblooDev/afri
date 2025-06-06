'use client'

import React from 'react'
import { Media } from '@/components/Media'
import type { FeatureSectionBlock } from '@/payload-types'
import { CTAButton } from '@/components/CTAButton'

export const FeatureSection: React.FC<FeatureSectionBlock> = ({
  title,
  description,
  imageLeftSrc,
  imageRightSrc,
  linkUrl,
  buttonText,
}) => {
  return (
    <section className="w-full">
      <div className="container ">
        <div className="flex flex-col lg:flex-row gap-12 justify-between mt-[120px] lg:mt-[0]">
          {/* First column: Title, text, and button */}
          <div className="flex flex-col justify-center items-start gap-8 w-[auto] lg:w-[30%]">
            <h2 className="text-black text-3xl md:text-5xl lg:text-7xl xl:text-9xl	">{title}</h2>
            <p className="text-black text-sm md:text-lg">{description}</p>
            <CTAButton
              href={linkUrl ?? '#'}
              text={buttonText ?? 'Get Started'}
              arrow={false}
              variant="dark"
              className="px-4 py-6 border-white"
              
            />
          </div>

          {/* Second column: Image */}
          <div className="flex items-center justify-center lg:items-start lg:justify-start w-[auto] lg:w-[30%]">
            <div className="relative w-full overflow-hidden rounded-lg">
              <Media
                resource={imageLeftSrc}
                imgClassName="object-cover w-full h-full rounded-3xl lg:rounded-none max-h-[500px] lg:max-h-[none]"
              />
            </div>
          </div>

          {/* Third column: Image */}
          <div className="flex items-start justify-start w-[auto] lg:w-[30%]">
            <div className="relative w-full overflow-hidden rounded-lg">
              <Media
                resource={imageRightSrc}
                imgClassName="object-cover w-full h-full rounded-3xl lg:rounded-none max-h-[500px] lg:max-h-[none]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
