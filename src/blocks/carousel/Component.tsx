'use client'

import React, { useCallback } from 'react'
import { Media } from '@/components/Media'
import useEmblaCarousel from 'embla-carousel-react'
import Previous from '@/../public/icons/previous.svg'
import Next from '@/../public/icons/next.svg'
import Image from 'next/image'

interface CarouselProps {
  carouselItems: Array<{ image: string; imgAlt: string }>
}

export const Carousel: React.FC<CarouselProps> = ({ carouselItems }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    slidesToScroll: 1,
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
    <section className="relative">
      <div className="flex justify-start ">
        <button
          onClick={scrollPrev}
          className="p-4 transition-transform duration-300 hover:scale-110"
        >
          <Image src={Previous} alt="Settings" width={36} height={36} />
        </button>
      </div>

      <div className="embla embla-center">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {carouselItems.map((item, index) => (
              <div key={index} className="embla__slide rounded-3xl w-full sm:w-1/2">
                <Media
                  resource={item.image}
                  alt={item.imgAlt}
                  imgClassName="w-full h-[300px] lg:h-[500px] rounded-3xl max-h-[500px] object-cover p-0 lg:p-4 overflow-hidden"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-end ">
        <button
          onClick={scrollNext}
          className="p-4 transition-transform duration-300 hover:scale-110"
        >
          <Image src={Next} alt="Settings" width={36} height={36} />
        </button>
      </div>
    </section>
  )
}
