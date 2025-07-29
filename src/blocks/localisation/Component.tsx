import React from 'react'
import { Media } from '@/components/Media'
import type { LocalisationBlock } from '@/payload-types'
import { CTAButton } from '@/components/CTAButton'

export const localisation: React.FC<LocalisationBlock> = ({
  title,
  description,
  buttonText,
  buttonLink,
  mainImage,
}) => {
  return (
    <div className="container mt-[100px] flex flex-col md:flex-row items-center gap-10">
      <div className="w-full md:w-[50%] !rounded-2xl">
        <Media
          resource={mainImage}
          imgClassName="h-[400px] md:h-[700px] w-full object-cover !rounded-2xl"
        />
      </div>

      <div className="flex flex-col gap-4 w-full md:w-[50%]">
        <h2 className="text-4xl lg:text-6xl xl:text-9xl">{title}</h2>
        <p className="text-base lg:text-lg text-start">{description}</p>
        <div className="flex items-start justify-start">
          <CTAButton
            href={buttonLink ?? '#'}
            text={buttonText ?? 'Get Started'}
            arrow={true}
            variant="dark"
            newTab={true}
          />
        </div>
      </div>
    </div>
  )
}
