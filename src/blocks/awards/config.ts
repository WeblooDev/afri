import { Block } from 'payload'

export const AwardsBlock: Block = {
  slug: 'AwardsBlock',
  interfaceName: 'AwardsBlock',
  labels: {
    singular: 'Awards Section',
    plural: 'Awards Sections',
  },
  fields: [
    {
      name: 'topRightTitle',
      label: 'Top Right Title',
      type: 'text',
      required: true,
    },
    {
      name: 'topRightText',
      label: 'Top Right Text',
      type: 'textarea',
      required: true,
    },
    {
      name: 'columns',
      label: 'Awards Grid Columns',
      type: 'array',
      minRows: 3,
      maxRows: 6,
      fields: [
        {
          name: 'heading',
          label: 'Column Heading',
          type: 'text',
        },
        {
          name: 'text',
          label: 'Column Text',
          type: 'text',
        },
      ],
    },
    {
      name: 'backgroundImageSection',
      label: 'Background Image for Section',
      type: 'upload',
      relationTo: 'media', // Assumes the images are stored in the 'media' collection
    },
    {
      name: 'backgroundImageDiv',
      label: 'Background Image for Div',
      type: 'upload',
      relationTo: 'media', // Assumes the images are stored in the 'media' collection
    },
  ],
}
