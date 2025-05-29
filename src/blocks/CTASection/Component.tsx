import React from 'react'
import { CTAButton } from '@/components/CTAButton'
import type { CTASectionBlock } from '@/payload-types'

export const CTASection: React.FC<CTASectionBlock> = ({
  headline,
  description,
  buttonText,
  backgroundImage,
  linkUrl,
}) => {
  const imageUrl = typeof backgroundImage === 'string' ? backgroundImage : backgroundImage?.url

  return (
    <section className="container flex justify-center my-12">
      <div className="relative py-24 px-6 md:py-32 md:px-12 lg:px-24 rounded-3xl">
        <img
          src={imageUrl || ''}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover rounded-3xl"
        />

        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
          <h1 className="text-4xl text-white md:text-5xl lg:text-6xl xl:text-8xl">{headline}</h1>
          <p className="mt-6 text-base lg:text-xl text-white max-w-2xl mx-auto">{description}</p>
          <div className="flex justify-center">
            <CTAButton
              href={linkUrl ?? '#'}
              text={buttonText ?? 'Get Started'}
              arrow={true}
              variant="transparent"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
