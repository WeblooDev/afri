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
      name: 'image',
      label: 'Image (Right Column)',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'imageAlt',
      label: 'Alt Text for Image',
      type: 'text',
      required: false,
    },
  ],
}
