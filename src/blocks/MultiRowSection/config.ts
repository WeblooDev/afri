import { Block } from 'payload'

export const MultiRowSectionBlock: Block = {
  slug: 'multiRowSection',
  interfaceName: 'MultiRowSectionBlock',
  labels: {
    singular: 'Multi Row Section',
    plural: 'Multi Row Sections',
  },
  fields: [
    {
      name: 'label',
      label: 'Small Label (e.g. FEATURED)',
      type: 'text',
      required: true,
    },
    {
      name: 'label2',
      label: 'Small Label2 (e.g. FEATURED)',
      type: 'text',
      required: true,
    },
    {
      name: 'label3',
      label: 'Small Label3 (e.g. FEATURED)',
      type: 'text',
      required: true,
    },
    {
      name: 'heading',
      label: 'Main Heading',
      type: 'text',
      required: true,
    },
    {
      name: 'paragraph',
      label: 'Paragraph Text',
      type: 'textarea',
      required: true,
    },
    {
      name: 'buttonText',
      label: 'Button Text',
      type: 'text',
      defaultValue: 'View All Projects',
    },
    {
      name: 'linkUrl',
      label: 'Button Link URL',
      type: 'text',
      defaultValue: '#',
    },
    {
      name: 'image1',
      label: 'Image Left (small)',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'image2',
      label: 'Image Right (large)',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'image3',
      label: 'Second Row - First Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'image4',
      label: 'Second Row - Middle Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'image5',
      label: 'Second Row - Third Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
