'use client'

import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import Previous from '@/../public/icons/previous.svg'
import Next from '@/../public/icons/next.svg'
import { Media } from '@/components/Media'
import { CTAButton } from '@/components/CTAButton'

interface CarouselItem {
  image: string
  imgAlt: string
  textBelow?: string
}

interface CarouselFourSlideProps {
  carouselItems: CarouselItem[]
  titleTop?: string
  buttonText?: string
  linkUrl?: string
}

export const CarouselFourSlide: React.FC<CarouselFourSlideProps> = ({ 
  carouselItems,
  titleTop,
  buttonText,
  linkUrl
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    slidesToScroll: 1, // Always scroll by 1
    containScroll: 'trimSnaps',
    loop: true,
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section className="container w-full p-12 flex flex-col gap-6 -mt-6">
      {/* Top section - Description on the right */}
      {titleTop && (
        <div className="flex flex-col lg:flex-row justify-end items-end gap-8">
          <div className="w-full lg:w-[40%] flex justify-end">
            <p className="text-lg text-center lg:text-end">{titleTop}</p>
          </div>
        </div>
      )}

      {/* Middle section - Carousel */}
      <div className="relative">
        {/* Left navigation button */}
        <button
          onClick={scrollPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 transition-transform duration-300 hover:scale-110"
        >
          <Image src={Previous} alt="Previous" width={36} height={36} />
        </button>

        {/* Carousel wrapper */}
        <div className="overflow-hidden w-[90%] mx-[auto]" ref={emblaRef}>
          <div className="flex">
            {carouselItems.map((item, index) => (
              <div
                key={index}
                className="min-w-[100%] sm:min-w-[50%] md:min-w-[33.33%] lg:min-w-[25%] p-4 flex flex-col items-center text-center gap-6 "
              >
                <Media
                  resource={item.image}
                  alt={item.imgAlt}
                  imgClassName="object-cover rounded-3xl"
                />
                {item.textBelow && <p className="mt-2 text-xl">{item.textBelow}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Right navigation button */}
        <button
          onClick={scrollNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 transition-transform duration-300 hover:scale-110"
        >
          <Image src={Next} alt="Next" width={36} height={36} />
        </button>
      </div>

      {/* Bottom section - Button on the right */}
      {(buttonText || linkUrl) && (
        <div className="flex flex-col lg:flex-row justify-center lg:justify-end items-center lg:items-end gap-8">
          <div className="w-full lg:w-auto flex justify-center lg:justify-end">
            <CTAButton
              href={linkUrl ?? '#'}
              text={buttonText ?? 'Get Started'}
              arrow={true}
              variant="dark"
            />
          </div>
        </div>
      )}
    </section>
  )
}
