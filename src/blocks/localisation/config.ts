import { Block } from 'payload'

export const localisationBlock: Block = {
  slug: 'localisation',
  interfaceName: 'localisationBlock',
  labels: {
    singular: 'localisation',
    plural: 'localisation Blocks',
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
  ],
}
