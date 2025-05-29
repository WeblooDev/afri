import React from 'react'
import { Media } from '@/components/Media'
import type { AwardsBlock } from '@/payload-types'

export const Awards: React.FC<AwardsBlock> = ({
  topRightTitle,
  topRightText,
  columns,
  backgroundImageSection,
  backgroundImageDiv,
}) => {
  return (
    <section className="relative rounded-4xl p-8 lg:p-12 m-12 min-h-[none] lg:min-h-[600px] ">
      {/* Background Image for Section */}
      <div className="absolute inset-0 w-full h-full z-0 rounded-4xl">
        {backgroundImageSection && (
          <Media
            fill
            priority
            resource={backgroundImageSection}
            imgClassName="w-full h-full rounded-4xl"
          />
        )}
      </div>

      <div className="relative z-10 text-center lg:text-right m-8">
        <h2 className="text-5xl lg:text-8xl text-white">{topRightTitle}</h2>
        <p className="text-5xl lg:text-8xl text-white ">{topRightText}</p>
      </div>

      {/* Background Image for Div */}
      <div className="relative lg:absolute bottom-[10%] -left-[0] m-0 lg:-ml-12 w-full lg:w-2/4 p-6 ">
        {backgroundImageDiv && (
          <Media
            fill
            priority
            resource={backgroundImageDiv}
            imgClassName="w-full h-full absolute inset-0 z-0 rounded-xl lg:rounded-tr-xl lg:rounded-br-xl "
          />
        )}
        <div className="relative z-10  ">
          <div className="grid grid-cols-3 gap-4">
            {columns?.map((col, i) => (
              <div key={i} className="flex flex-col items-center text-sm">
                {col.heading && (
                  <h3 className="font-light text-black text-3xl lg:text-5xl">{col.heading}</h3>
                )}
                {col.text && (
                  <p className="font-light text-black text-xl lg:text-2xl">{col.text}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
