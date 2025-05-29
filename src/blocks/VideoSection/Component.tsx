'use client'

import { useRef, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { Button } from '@/components/ui/button'
import { Play, Pause, ChevronDown } from 'lucide-react'
import { Media } from '@/components/Media'

interface VideoSectionProps {
  videoFile: string
  description: { text: string; title: string; id?: string }[]
}

export const VideoSection: React.FC<VideoSectionProps> = ({ videoFile, description }) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [videoEl, setVideoEl] = useState<HTMLVideoElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(true)

  const autoplay = useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
    }),
  )

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      axis: 'y',
      loop: true,
      align: 'start',
    },
    [autoplay.current],
  )

  const scrollNext = () => {
    if (!emblaApi) {
      console.warn('Embla API not ready')
      return
    }
    emblaApi.scrollNext()
  }

  useEffect(() => {
    if (containerRef.current) {
      const videoTag = containerRef.current.querySelector('video')
      if (videoTag) {
        setVideoEl(videoTag)
        setIsPlaying(!videoTag.paused)

        const handlePlay = () => setIsPlaying(true)
        const handlePause = () => setIsPlaying(false)

        videoTag.addEventListener('play', handlePlay)
        videoTag.addEventListener('pause', handlePause)

        return () => {
          videoTag.removeEventListener('play', handlePlay)
          videoTag.removeEventListener('pause', handlePause)
        }
      }
    }

    // Add this line to satisfy ESLint when no cleanup is returned
    return undefined
  }, [videoFile])

  const togglePlay = () => {
    if (!videoEl) return

    if (videoEl.paused) {
      videoEl.play()
    } else {
      videoEl.pause()
    }
  }

  return (
    <section className="w-full ">
      <div className="h-full container">
        <div className="flex flex-col lg:flex-row h-full gap-8">
          {/* Carousel Section */}
          <div className="relative rounded-3xl flex-1 flex items-center justify-center bg-[#F6F3EC] min-h-[400px] md:min-h-[600px]">
            {/* Styled circular button with ChevronDown */}
            <button
              onClick={scrollNext}
              className="absolute top-4 right-4 z-10	 bg-white text-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition shadow"
            >
              <ChevronDown className="w-5 h-5" />
            </button>

            <div ref={emblaRef} className="overflow-hidden w-full max-w-md  h-[400px] md:h-[340px]">
              <div className="embla-y__container">
                {Array.isArray(description) &&
                  description.map((item, i) => (
                    <div
                      key={item.id || i}
                      className="embla-y__slide flex flex-col gap-8 items-start justify-center px-4 md:text-left"
                    >
                      <p className="text-black text-sm md:text-lg">{item.text}</p>
                      <p className="text-black text-sm  md:text-lg">{item.title}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div
            ref={containerRef}
            className="relative flex-1 min-h-[400px] md:min-h-[600px] flex items-center justify-center bg-muted overflow-hidden rounded-3xl md:rounded-tl-3xl md:rounded-bl-3xl"
          >
            <Media
              resource={videoFile}
              videoClassName=" md absolute top-0 left-0 w-full h-full object-cover "
            />

            <Button
              onClick={togglePlay}
              className="absolute z-10 bottom-6 left-6 bg-white text-black hover:bg-black hover:text-white rounded-full p-3 shadow-lg transition-colors duration-200"
              variant="ghost"
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
