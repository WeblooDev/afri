'use client'

import React from 'react'
import { Media } from '@/components/Media'
import { CTAButton } from '@/components/CTAButton'
import type { MultiRowSectionBlock } from '@/payload-types'

export const MultiRowSection: React.FC<MultiRowSectionBlock> = ({
  label,
  label2,
  label3,
  paragraph,
  buttonText,
  image1,
  image2,
  image3,
  image4,
  image5,
  linkUrl,
}) => {
  return (
    <section className="container my-12">
      {/* First Row */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12">
        {/* Left Column */}
        <div className="flex flex-col w-full lg:w-[40%] justify-center items-center lg:items-start gap-6">
          <h3 className="text-base lg:text-lg text-center md:text-start">{label}</h3>
          <div className="rounded-lg overflow-hidden">
            <Media resource={image1} className="w-full h-auto block object-cover rounded-4xl" />
          </div>
          <p>{paragraph}</p>
        </div>

        {/* Right Column */}
        <div className="w-[60%] rounded-lg overflow-hidden">
          <Media resource={image2} className="w-full h-auto block object-cover rounded-3xl" />
        </div>
      </div>

      {/* Second Row */}
      <div className=" flex flex-col justify-center items-center lg:items-start lg:grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        {/* Column 1 */}
        <div className="flex flex-col space-y-4">
          <div className="rounded-lg overflow-hidden">
            <Media
              resource={image3}
              imgClassName="w-full h-auto block object-cover rounded-3xl max-h-[500px] lg:max-h-[none]"
            />
          </div>
          <h3 className="text-lg">{label2}</h3>
        </div>

        {/* Column 2 */}
        <div className="rounded-lg overflow-hidden">
          <Media
            resource={image4}
            imgClassName="w-full h-auto block object-cover rounded-3xl max-h-[500px] lg:max-h-[none]"
          />
        </div>

        {/* Column 3 */}
        <div className="flex flex-col space-y-4">
          <div className="rounded-lg overflow-hidden">
            <Media
              resource={image5}
              imgClassName="w-full h-auto block object-cover rounded-3xl max-h-[500px] lg:max-h-[none]"
            />
          </div>
          <h3 className="text-lg text-right">{label3}</h3>
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-end">
        <CTAButton
          href={linkUrl ?? '#'}
          text={buttonText ?? 'View All Projects'}
          arrow={false}
          variant="dark"
          className="px-8"
        />
      </div>
    </section>
  )
}
