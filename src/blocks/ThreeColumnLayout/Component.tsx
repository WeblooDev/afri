'use client'

import React from 'react'
import Image from 'next/image'
import type { ThreeColumnLayoutBlock } from '@/payload-types'
import { CTAButton } from '@/components/CTAButton'

export const ThreeColumnLayout: React.FC<ThreeColumnLayoutBlock> = ({
  columnOne,
  columnTwo,
  columnThree,
}) => {
  return (
    <section className="w-full p-12 md:py-24 text-black">
      <div className=" px-4 md:px-6">
        <div className="container grid gap-16 grid-cols-1 lg:grid-cols-3">
          {/* First Column */}
          <div className="flex flex-col justify-between gap-6">
            <div>
              <p className="text-lg	 ">{columnOne?.topText}</p>
            </div>
            <div>
              {typeof columnOne?.image === 'object' && columnOne.image?.url && (
                <div className="mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={columnOne.image.url}
                    alt={columnOne.image.alt || 'Column 1 image'}
                    width={400}
                    height={200}
                    className=" h-auto w-full max-h-[325px] rounded-3xl object-cover"
                  />
                </div>
              )}

              <h3 className="mb-2 text-3xl	">{columnOne?.title}</h3>
              <p className="text-lg	">{columnOne?.bottomText}</p>
            </div>
          </div>

          {/* Second Column */}
          <div className="flex flex-col gap-8">
            {typeof columnTwo?.image === 'object' && columnTwo.image?.url && (
              <div className="overflow-hidden rounded-3xl">
                <Image
                  src={columnTwo.image.url}
                  alt={columnTwo.image.alt || 'Column 2 image'}
                  width={400}
                  height={400}
                  className="w-full h-[400px] lg:h-[400px] rounded-3xl object-cover"
                />
              </div>
            )}

            <div>
              <h3 className="text-3xl ">{columnTwo?.title}</h3>
              <p className="text-lg	">{columnTwo?.bottomText}</p>
            </div>
          </div>

          {/* Third Column */}
          <div className="flex flex-col gap-8 justify-center ">
            {typeof columnThree?.image === 'object' && columnThree.image?.url && (
              <div className="overflow-hidden">
                <Image
                  src={columnThree.image.url}
                  alt={columnThree.image.alt || 'Column 3 image'}
                  width={400}
                  height={250}
                  className="h-auto w-full rounded-3xl object-cover"
                />
              </div>
            )}

            <div className="flex flex-col items-start gap-4">
              <h3 className="text-3xl ">{columnThree?.title}</h3>
              <p className="text-lg	">{columnThree?.bottomText}</p>
              <div className="flex self-end justify-end mt-4">
                <CTAButton
                  href={columnThree?.linkUrl ?? '#'}
                  text={columnThree?.buttonText ?? 'Get Started'}
                  arrow={true}
                  variant="dark"
                  className="px-4 py-6 border-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
