// afriHeader/config.ts
import { Block } from 'payload'

export const AfriHeader: Block = {
  slug: 'afriHeader', // keep lowercase for slug consistency
  interfaceName: 'afriHeaderBlock',
  labels: {
    singular: 'Afri Header',
    plural: 'Afri Headers',
  },
  fields: [
    {
      name: 'titleTop',
      label: 'Top Title',
      type: 'text',
    },
    {
      name: 'titleBottom',
      label: 'Bottom Title',
      type: 'text',
    },
    {
      name: 'reverseLayout',
      label: 'Reverse Layout (row-reverse)',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
}
