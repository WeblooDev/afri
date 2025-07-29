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
      name: 'images',
      label: 'Images (Auto-scroll)',
      type: 'array',
      fields: [
        {
          name: 'mainImage',
          type: 'upload',
          relationTo: 'media',
          required: true,
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
      minRows: 1,
    },
    {
      name: 'autoScrollSpeed',
      label: 'Auto-scroll Speed (seconds)',
      type: 'number',
      defaultValue: 3,
      min: 1,
      max: 10,
    },
  ],
}
