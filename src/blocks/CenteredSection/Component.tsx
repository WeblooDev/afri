import React from 'react'
import type { CenteredSectionBlock } from '@/payload-types'

export const CenteredSection: React.FC<CenteredSectionBlock> = ({
  miniTitleTop,
  mainLinkText,
  mainLinkUrl,
  miniTitleBottom,
  shortText,
  longText,
}) => {
  return (
    <section className="w-full container my-12  ">
      <div className="p-12  bg-[#F2F2F2] rounded-3xl">
        <div className="flex flex-col items-center text-center gap-8 max-w-6xl mx-auto">
          {miniTitleTop && <p className="text-lg">{miniTitleTop}</p>}

          {mainLinkText && mainLinkUrl && (
            <a href={mainLinkUrl} className="text-3xl md:text-4xl lg:text-6xl  hover:underline">
              {mainLinkText}
            </a>
          )}

          {miniTitleBottom && <h3 className="text-lg">{miniTitleBottom}</h3>}

          <a
            target="_blank"
            href="https://www.google.com/maps/search/261+Boulevard+Allal+Ben+Abdellah+Hay+Al+Andalousse+Temara,+12040+Morocco./@33.9366581,-6.9215724,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDYwMi4wIKXMDSoASAFQAw%3D%3D"
          >
            {' '}
            {shortText && <p className="text-3xl">{shortText}</p>}
          </a>
          {longText && <p className="text-base	max-w-[60%]">{longText}</p>}
        </div>
      </div>
    </section>
  )
}
