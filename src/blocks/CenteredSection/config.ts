import { Block } from 'payload'

export const CenteredSectionBlock: Block = {
  slug: 'centeredSection',
  interfaceName: 'CenteredSectionBlock',
  labels: {
    singular: 'Centered Section',
    plural: 'Centered Sections',
  },
  fields: [
    {
      name: 'miniTitleTop',
      type: 'text',
      required: true,
    },
    {
      name: 'mainLinkText',
      type: 'text',
      required: true,
    },
    {
      name: 'mainLinkUrl',
      type: 'text',
      required: true,
    },
    {
      name: 'miniTitleBottom',
      type: 'text',
    },
    {
      name: 'shortText',
      type: 'textarea',
    },
    {
      name: 'longText',
      type: 'textarea',
    },
  ],
}
