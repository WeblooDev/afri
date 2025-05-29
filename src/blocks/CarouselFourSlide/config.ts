import { Block } from 'payload'

export const CarouselFourSlideBlock: Block = {
  slug: 'carouselFourSlide',
  interfaceName: 'CarouselFourSlideBlock',
  labels: {
    singular: '4-Item Carousel',
    plural: '4-Item Carousels',
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
