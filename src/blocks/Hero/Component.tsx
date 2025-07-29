'use client'

import React, { useState, useEffect } from 'react'
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
  mainImageLink,
  images,
  autoScrollSpeed = 3,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Auto-scroll effect
  useEffect(() => {
    if (!images || images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, (autoScrollSpeed || 3) * 1000)

    return () => clearInterval(interval)
  }, [images, autoScrollSpeed])

  const currentImage = images?.[currentImageIndex]

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
            {currentImage && (
              <>
                <div className="relative w-full overflow-hidden rounded-lg h-full">
                  <Media
                    resource={currentImage.mainImage}
                    imgClassName="max-h-[400px] h-full w-full object-cover rounded-3xl lg:rounded-none lg:max-h-none"
                  />
                  <div className="absolute bottom-4 right-4 flex items-center px-3 py-2 text-white">
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
                  <div className="group relative overflow-hidden rounded-lg">
                    <Media resource={currentImage.smallImage1} className="h-full w-full object-cover" />
                    <Link href="/produits" className="absolute inset-0">
                      <div className="absolute right-3 top-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="rounded-full bg-white/90 p-2 shadow-sm">
                          <Image src={filledTitleArrow} alt="titledArrow" width={36} height={36} />
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="group relative overflow-hidden rounded-lg">
                    <Media resource={currentImage.smallImage2} className="h-full w-full object-cover" />
                    <Link href="/produits" className="absolute inset-0">
                      <div className="absolute right-3 top-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <div className="rounded-full bg-white/90 p-2 shadow-sm">
                          <Image src={filledTitleArrow} alt="titledArrow" width={36} height={36} />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </>
            )}

            {/* Image Navigation Dots */}
            {images && images.length > 1 && (
              <div className="absolute bottom-4 left-4 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-white scale-125' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
