import { Block } from 'payload'

export const descriptionBlock: Block = {
  slug: 'description',
  interfaceName: 'DescriptionBlock', // ✅ Required for your import to work
  labels: {
    singular: 'Description Block',
    plural: 'Description Blocks',
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
