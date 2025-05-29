import React from 'react'
import type { DescriptionBlock } from '@/payload-types'
import { CTAButton } from '@/components/CTAButton'

export const Description: React.FC<DescriptionBlock> = ({ titleTop, linkUrl, buttonText }) => {
  return (
    <section className="container w-full p-12 flex flex-col lg:flex-row text-black items-center justify-between gap-8">
      <p className="text-lg w-[60%] text-center lg:text-start">{titleTop}</p>

      <CTAButton
        href={linkUrl ?? '#'}
        text={buttonText ?? 'Get Started'}
        arrow={true}
        variant="dark"
      />
    </section>
  )
}
