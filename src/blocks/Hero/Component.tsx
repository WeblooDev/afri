'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, Heart, Star } from 'lucide-react'

import { Media } from '@/components/Media'
import type { HeroBlock } from '@/payload-types'
import { CTAButton } from '@/components/CTAButton'
import titledArrow from '@/../public/icons/titledArrow.svg'
import filledTitleArrow from '@/../public/icons/filledTitleArrow.svg'

import Image from 'next/image'

export const Hero: React.FC<HeroBlock> = ({
  title,
  description,
  buttonText,
  buttonLink,
  mainImage,
  mainImageLink,
  smallImage1,
  smallImage2,
}) => {
  return (
    <section className="mt-[100px] lg:mt-0 ml-6">
      <div className="w-full container px-4 md:px-6 ">
        <div className="flex flex-col lg:flex-row gap-8 justify-between">
          {/* Column 1 */}
          <div className="flex flex-col gap-10 justify-center w-auto lg:w-[40%] items-start">
            <div className="flex flex-col gap-6 ">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">{title}</h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl">{description}</p>

              <div className="flex items-start justify-start">
                <CTAButton
                  href={buttonLink ?? '#'}
                  text={buttonText ?? 'Get Started'}
                  arrow={false}
                  variant="dark"
                />
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex gap-4 w-auto lg:w-[60%] justify-end">
            <div className="relative w-full overflow-hidden rounded-lg h-full">
              <Media
                resource={mainImage}
                imgClassName="max-h-[400px] h-full w-full object-cover rounded-3xl lg:rounded-none lg:max-h-none"
              />
              <div className="absolute bottom-4 right-4 flex items-center  px-3 py-2 text-white">
                <Link
                  href={mainImageLink?.url || '#'}
                  className="flex items-center text-sm font-medium hover:underline"
                >
                  {mainImageLink?.label || 'Learn More'}
                  <Image src={titledArrow} alt="titledArrow" width={56} height={56} />
                </Link>
              </div>
            </div>

            <div className="flex flex-col justify-end gap-4 ">
              <div className="group relative  overflow-hidden rounded-lg">
                <Media resource={smallImage1} className="h-full w-full object-cover" />
                <a href="/produits">
                  <div className="absolute right-3 top-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="rounded-full bg-white/90 p-2 shadow-sm">
                      <Image src={filledTitleArrow} alt="titledArrow" width={36} height={36} />
                    </div>
                  </div>
                </a>
              </div>
              <div className="group relative overflow-hidden rounded-lg">
                <Media resource={smallImage2} className="h-full w-full object-cover" />
                <a href="/produits">
                  <div className="absolute right-3 top-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="rounded-full bg-white/90 p-2 shadow-sm">
                      <Image src={filledTitleArrow} alt="titledArrow" width={36} height={36} />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
