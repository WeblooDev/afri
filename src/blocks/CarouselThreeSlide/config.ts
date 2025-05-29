import { Block } from 'payload'

export const CarouselThreeSlideBlock: Block = {
  slug: 'carouselThreeSlide',
  interfaceName: 'CarouselThreeSlideBlock',
  labels: {
    singular: '3-Item Carousel',
    plural: '3-Item Carousels',
  },
  fields: [
    {
      name: 'carouselItems',
      type: 'array',
      label: 'Carousel Items',
      required: true,
      minRows: 4,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Image',
          required: true,
        },
        {
          name: 'imgAlt',
          type: 'text',
          label: 'Alt Text',
          required: true,
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
