import { Block } from 'payload'

export const HeroBlock: Block = {
  slug: 'hero',
  interfaceName: 'HeroBlock',
  labels: {
    singular: 'Hero',
    plural: 'Hero Sections',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'buttonText',
      type: 'text',
      required: true,
      defaultValue: 'Get Started',
    },
    {
      name: 'buttonLink',
      type: 'text',
    },
    {
      name: 'mainImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'mainImageLink',
      type: 'group',
      label: 'Main Image Link',
      fields: [
        {
          name: 'url',
          type: 'text',
          required: true,
        },
        {
          name: 'label',
          type: 'text',
        },
      ],
    },
    {
      name: 'smallImage1',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'smallImage2',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
