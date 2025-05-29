import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
// import { Awards } from '@/blocks/awards/Component'
import { ImageSection } from '@/blocks/ImageSection/Component'
import { ThreeColumnSection } from '@/blocks/ThreeColumn/Component'
import { ThreeColumnSecondSection } from './ThreeColumnSecond/Component'
import { ThreeColumnLayout } from '@/blocks/ThreeColumnLayout/Component'
import { VideoSection } from '@/blocks/VideoSection/Component'
import { FeatureSection } from '@/blocks/FeatureSection/Component'
import { MultiRowSection } from '@/blocks/MultiRowSection/Component'
import { CTASection } from '@/blocks/CTASection/Component'
import { Carousel } from '@/blocks/carousel/Component'
import { Hero } from '@/blocks/Hero/Component'
import { CarouselFourSlide } from '@/blocks/CarouselFourSlide/Component'
import { localisation } from './localisation/Component'
import { CenteredSection } from './CenteredSection/Component'
import { ProductsListBlockComponent } from '@/blocks/ProductsList/Component'
import { ContactForm } from './ContactFormBlock/Component'
import { CarouselThreeSlide } from './CarouselThreeSlide/Component'
import AfriHeader from './afriHeader/Component'
import { Description } from './description/Component'
import { CarouselDescription } from './carouselDescription/Component'
import { Awards } from './awards/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  AwardsBlock: Awards, // ✅ Added block type match from Payload
  imageSectionBlock: ImageSection,
  afriHeader: AfriHeader,
  threeColumnSection: ThreeColumnSection,
  threeColumnSecondSection: ThreeColumnSecondSection,
  threeColumnLayout: ThreeColumnLayout,
  videoSection: VideoSection,
  featureSection: FeatureSection,
  multiRowSection: MultiRowSection,
  ctaSection: CTASection,
  carouselBlock: Carousel,
  hero: Hero,
  description: Description,
  carouselFourSlide: CarouselFourSlide,
  carouselThreeSlide: CarouselThreeSlide,
  carouselDescription: CarouselDescription,
  localisation: localisation,
  centeredSection: CenteredSection,
  contactFormBlock: ContactForm,
  // headerDescription: HeaderDescription,
  productsList: ProductsListBlockComponent,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
