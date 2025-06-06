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
    <section>
      <div className="w-full container mt-[120px] lg:mt-0">
        <div className="flex flex-col lg:flex-row gap-12 justify-between">
          {/* Column 1 */}
          <div className="flex flex-col gap-10 justify-center w-auto lg:w-[40%] items-start">
            <div className="flex flex-col gap-6 items-center lg:items-start">
              <h2 className="text-4xl  lg:text-6xl xl:text-9xl">{title}</h2>
              <p className="text-base lg:text-lg text-center lg:text-start">{description}</p>
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

          {/* Column 2 */}
          <div className="flex gap-4 w-auto lg:w-[50%] justify-center lg:justify-end">
            <div className="relative  w-full">
              <Media
                resource={mainImage}
                imgClassName="h-full w-full object-cover max-h-[300px] md:max-h-[500px] lg:max-h-[840px] rounded-tr-[2rem] lg:rounded-tr-[0] rounded-tl-[2rem] lg:rounded-tl-[0] rounded-bl-[2rem] rounded-br-[2rem] "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
