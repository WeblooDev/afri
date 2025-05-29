import { Block } from 'payload'

export const ProductsListBlock: Block = {
  slug: 'productsList',
  labels: {
    singular: 'Products List',
    plural: 'Products Lists',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
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
  ],
}
