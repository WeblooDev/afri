import { Block } from 'payload'

export const CarouselBlock: Block = {
  slug: 'carouselBlock',
  interfaceName: 'CarouselBlock',
  labels: {
    singular: 'Carousel Block',
    plural: 'Carousel Blocks',
  },
  fields: [
    {
      name: 'carouselItems',
      type: 'array',
      label: 'Carousel Items',
      required: true,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Carousel Image',
          required: true,
        },
        {
          name: 'altText',
          type: 'text',
          label: 'Alt Text',
        },
        {
          name: 'textBelow',
          type: 'text',
          label: 'Text Below Image',
        },
      ],
    },
  ],
}
