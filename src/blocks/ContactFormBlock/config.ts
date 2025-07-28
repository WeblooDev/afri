import { Block } from 'payload'

export const ContactFormBlock: Block = {
  slug: 'contactFormBlock',
  interfaceName: 'ContactFormBlock',
  labels: {
    singular: 'Contact Form',
    plural: 'Contact Forms',
  },
  fields: [
    {
      name: 'title',
      label: 'Top Title',
      type: 'text',
      required: false,
    },
    {
      name: 'description',
      label: 'Description (Below Form)',
      type: 'textarea',
      required: false,
    },
    {
      name: 'submit',
      label: 'submit',
      type: 'text',
      required: false,
    },
    {
      name: 'mainImages',
      label: 'Main Images (Auto-scroll)',
      type: 'array',
      fields: [
        {
          name: 'image',
          label: 'Main Image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'imageAlt',
          label: 'Alt Text for Main Image',
          type: 'text',
          required: false,
        },
        {
          name: 'smallImages',
          label: 'Small Images',
          type: 'array',
          maxRows: 2,
          fields: [
            {
              name: 'image',
              label: 'Small Image',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'imageAlt',
              label: 'Alt Text for Small Image',
              type: 'text',
              required: false,
            },
          ],
        },
      ],
      maxRows: 4,
      minRows: 1,
    },
    {
      name: 'autoScrollSpeed',
      label: 'Auto-scroll Speed (seconds)',
      type: 'number',
      defaultValue: 3,
      min: 1,
      max: 10,
    },
  ],
}
