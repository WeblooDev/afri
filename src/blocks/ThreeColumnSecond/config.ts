import { Block } from 'payload'

export const ThreeColumnSecondBlock: Block = {
  slug: 'threeColumnSecondSection',
  interfaceName: 'ThreeColumnSecondBlock', // ✅ This must match the imported type name
  labels: {
    singular: 'Three Column Second Section',
    plural: 'Three Column Sections',
  },
  fields: [
    {
      name: 'imageLeft',
      type: 'upload',
      relationTo: 'media',
      label: 'Left Column Image',
      required: true,
    },
    {
      name: 'centerText',
      type: 'textarea',
      label: 'Center Column Text',
      required: true,
    },
    {
      name: 'imageCenter',
      type: 'upload',
      relationTo: 'media',
      label: 'Center Column Image',
      required: false,
    },
    {
      name: 'bottomText',
      type: 'textarea',
      label: 'Right Column Bottom Text',
      required: true,
    },
  ],
}
