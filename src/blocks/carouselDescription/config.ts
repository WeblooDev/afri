import { Block } from 'payload'

export const CarouselDescriptionBlock: Block = {
  slug: 'carouselDescription',
  interfaceName: 'CarouselDescriptionBlock', 
  labels: {
    singular: 'Carousel Description',
    plural: 'Carousel Descriptions',
  },
  fields: [
    {
      name: 'titleTop',
      label: 'Top Title',
      type: 'text',
      required: false,
    },
    {
      name: 'buttonText',
      label: 'Button Text',
      type: 'text',
      defaultValue: 'Get Started',
    },
    {
      name: 'linkUrl',
      label: 'Button Link URL',
      type: 'text',
      defaultValue: '#',
    },
  ],
}
