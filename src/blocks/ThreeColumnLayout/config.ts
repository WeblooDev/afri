import { Block } from 'payload'

export const ThreeColumnLayout: Block = {
  slug: 'threeColumnLayout',
  interfaceName: 'ThreeColumnLayoutBlock',
  labels: {
    singular: 'Three Column Layout',
    plural: 'Three Column Layouts',
  },
  fields: [
    {
      name: 'columnOne',
      label: 'First Column',
      type: 'group',
      fields: [
        { name: 'topText', type: 'textarea', label: 'Top Text' },
        { name: 'image', type: 'upload', relationTo: 'media', label: 'Image' },
        { name: 'title', type: 'text', label: 'Title' },
        { name: 'bottomText', type: 'textarea', label: 'Bottom Text' },
      ],
    },
    {
      name: 'columnTwo',
      label: 'Second Column',
      type: 'group',
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media', label: 'Image' },
        { name: 'title', type: 'text', label: 'Title' },
        { name: 'bottomText', type: 'textarea', label: 'Bottom Text' },
      ],
    },
    {
      name: 'columnThree',
      label: 'Third Column',
      type: 'group',
      fields: [
        { name: 'image', type: 'upload', relationTo: 'media', label: 'Image' },
        { name: 'title', type: 'text', label: 'Title' },
        { name: 'bottomText', type: 'textarea', label: 'Bottom Text' },
        { name: 'buttonText', type: 'text', label: 'Button Text', defaultValue: 'Learn More' },
        {
          name: 'linkUrl',
          label: 'Link URL',
          type: 'text',
          defaultValue: '#',
        },
      ],
    },
  ],
}
