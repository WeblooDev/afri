import { Block } from 'payload'

export const VideoSectionBlock: Block = {
  slug: 'videoSection',
  labels: {
    singular: 'Video Section',
    plural: 'Video Sections',
  },
  interfaceName: 'VideoSectionBlock',
  fields: [
    {
      name: 'description',
      label: 'Carousel Items',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Text',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          label: 'title',
          required: true,
        },
      ],
    },
    {
      name: 'videoFile',
      type: 'upload',
      relationTo: 'media',
      label: 'Video File',
      required: true,
    },
  ],
}
