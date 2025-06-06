import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Media } from '@/components/Media'
import { CTAButton } from '@/components/CTAButton'
import type { ImageSectionBlock } from '@/payload-types'

export const ImageSection: React.FC<ImageSectionBlock> = ({
  backgroundImage,
  title,
  secondTitle,
  description,
  buttonText,
  linkText,
  linkUrl,
}) => {
  return (
    <section className="container">
      <div className=" mt-[120px] relative flex flex-col gap-8 lg:gap-16 p-6 md:p-16  text-white rounded-4xl">
        {/* Background image */}
        <div className=" absolute inset-0 z-0 bg-cover bg-center">
          {backgroundImage && (
            <Media
              fill
              priority
              resource={backgroundImage}
              imgClassName="w-full h-full rounded-4xl"
            />
          )}
          {!backgroundImage && (
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: "url('/placeholder.svg?height=800&width=1200')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(0.7)',
              }}
            />
          )}
        </div>

        <div className="relative z-10 flex flex-col">
          <h2 className="text-3xl sm:text-6xl lg:text-9xl">{title}</h2>
          <h2 className="text-3xl mb-12 sm:text-6xl lg:text-9xl">{secondTitle}</h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl">{description}</p>
        </div>

        {/* Bottom div with button and link */}
        <div className="relative z-10 flex flex-col-reverse lg:flex-row gap-8 justify-start lg:justify-between items-start lg:items-center w-full mt-auto pt-12">
          <CTAButton
            href="/produits"
            text={buttonText ?? 'Get Started'}
            arrow={false}
            variant="transparent"
            className="px-4 py-6 border-white"
          />

          <div className="flex items-center space-x-2"></div>
        </div>
      </div>
    </section>
  )
}
