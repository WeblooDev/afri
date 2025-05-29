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

          {shortText && <p className="text-3xl">{shortText}</p>}

          {longText && <p className="text-base	max-w-[60%]">{longText}</p>}
        </div>
      </div>
    </section>
  )
}
