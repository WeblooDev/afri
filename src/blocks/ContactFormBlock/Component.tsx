'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Media } from '@/components/Media'
import type { ContactFormBlock } from '@/payload-types'
import { CTAButton } from '@/components/CTAButton'

export const ContactForm: React.FC<ContactFormBlock> = ({ 
  title, 
  description, 
  submit, 
  mainImages, 
  autoScrollSpeed = 3 
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Auto-scroll effect
  useEffect(() => {
    if (!mainImages || mainImages.length <= 1) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === mainImages.length - 1 ? 0 : prevIndex + 1
      )
    }, (autoScrollSpeed || 3) * 1000)

    return () => clearInterval(interval)
  }, [mainImages, autoScrollSpeed])

  const currentMainImage = mainImages?.[currentImageIndex]
  const currentSmallImages = currentMainImage?.smallImages || []

  return (
    <section className="w-full pt-[100px] bg-white text-black">
      <div className="w-full container flex flex-col lg:flex-row justify-between items-center gap-14">
        <div className="flex flex-col w-full lg:w-[50%] gap-12 p-12 lg:p-8 pl-12">
          <div>
            <h2 className="text-3xl md:text-7xl">{title}</h2>
          </div>
          <div className="flex flex-col gap-6">
            <Input
              className="bg-white text-black border-[1.74px] border-black text-[24.36px] rounded-full p-8"
              id="name"
              placeholder="Nom complet"
            />
            <Input
              className="bg-white text-black border-[1.74px] border-black text-[24.36px] rounded-full p-8"
              id="email"
              type="email"
              placeholder="Adresse e-mail"
            />
            <Input
              className="bg-white text-black border-[1.74px] border-black text-[24.36px] rounded-full p-8"
              id="phone1"
              type="tel"
              placeholder="Numéro de téléphone"
            />
            <Input
              className="bg-white text-black border-[1.74px] border-black text-[24.36px] rounded-full p-8"
              id="phone2"
              type="tel"
              placeholder="Message"
            />
            <CTAButton
              className="flex items-center p-12"
              text={submit ?? 'Get Started'}
              arrow={false}
              variant="dark"
            />
          </div>
          <div>
            <p className="text-base">{description}</p>
          </div>
        </div>

        <div className="relative flex items-center justify-center w-full lg:w-[45%] rounded-3xl p-12 lg:p-0 lg:rounded-tl-[1rem] lg:rounded-bl-[1rem]">
          {/* Main Image with Auto-scroll */}
          <div className="relative w-full rounded-tl-[1rem] rounded-bl-[1rem] overflow-hidden">
            {currentMainImage && (
              <div className="relative">
                <Media
                  resource={currentMainImage.image}
                  priority
                  imgClassName="w-full h-full object-cover max-h-[700px] rounded-tl-[1rem] rounded-bl-[1rem] transition-opacity duration-500"
                />
                
                {/* Small Images Overlay */}
                {currentSmallImages.length > 0 && (
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    {currentSmallImages.map((smallImage, index) => (
                      <div 
                        key={index} 
                        className="w-16 h-16 rounded-lg overflow-hidden border-2 border-white shadow-lg"
                      >
                        <Media
                          resource={smallImage.image}
                          imgClassName="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Image Navigation Dots */}
          {mainImages && mainImages.length > 1 && (
            <div className="absolute bottom-4 left-4 flex gap-2">
              {mainImages.map((_, index) => (
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
    </section>
  )
}
