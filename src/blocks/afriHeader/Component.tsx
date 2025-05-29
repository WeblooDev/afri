import React from 'react'
import type { AfriHeaderBlock } from '@/payload-types'

const AfriHeader: React.FC<AfriHeaderBlock> = ({ titleTop, titleBottom, reverseLayout }) => {
  return (
    <section
      className={`container p-12 flex flex-col-reverse lg:flex-row text-black items-center ${reverseLayout ? 'flex-row-reverse gap-4 lg:gap-16' : 'flex-row gap-4 lg:gap-16'}`}
    >
      {titleTop && (
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          <span className="whitespace-nowrap">{titleTop}</span>
        </h1>
      )}
      <div className="h-[2px] w-full bg-black" />
      {titleBottom && (
        <h1 className="text-3xl md:text-5xl lg:text-8xl">
          <span className="whitespace-nowrap">{titleBottom}</span>
        </h1>
      )}
    </section>
  )
}

export default AfriHeader
