import { Block } from 'payload'

export const FeatureSectionBlock: Block = {
  slug: 'featureSection',
  interfaceName: 'FeatureSectionBlock',
  labels: {
    singular: 'Feature Section',
    plural: 'Feature Sections',
  },
  fields: [
    {
      name: 'title',
      label: 'Section Title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Section Description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'imageLeftSrc',
      label: 'Left Column Image',
      type: 'upload',
      relationTo: 'media', // Assumes images are stored in the 'media' collection
      required: true,
    },
    {
      name: 'imageRightSrc',
      label: 'Right Column Image',
      type: 'upload',
      relationTo: 'media', // Assumes images are stored in the 'media' collection
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
      label: 'Link URL',
      type: 'text',
      defaultValue: '#',
    },
  ],
}
