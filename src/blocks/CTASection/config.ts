import { Block } from 'payload'

export const CTASectionBlock: Block = {
  slug: 'ctaSection',
  interfaceName: 'CTASectionBlock',
  labels: {
    singular: 'CTA Section',
    plural: 'CTA Sections',
  },
  fields: [
    {
      name: 'headline',
      label: 'Headline',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      required: true,
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
    {
      name: 'backgroundImage',
      label: 'Background Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
