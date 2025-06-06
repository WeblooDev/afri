import type { GlobalConfig } from 'payload'
import { link } from '@/fields/link'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: { read: () => true },
  fields: [
    {
      name: 'about',
      type: 'group',
      label: 'About Section',
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          label: 'Description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'image',
          label: 'Image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },

    // ✅ Phone Links Row
    {
      name: 'phoneLinks',
      type: 'array',
      label: 'Phone Number Links',
      fields: [
        link({
          overrides: {
            label: 'Phone Link',
          },
          appearances: false,
        }),
      ],
    },

    // ✅ Website Links Grid (2x2)
    {
      name: 'webLinks',
      type: 'array',
      label: 'Website Links',
      fields: [
        link({
          overrides: {
            label: 'Website Link',
          },
          appearances: false,
        }),
      ],
    },

    // 🟡 Optional – Keep if you still use this anywhere
    {
      name: 'linkGroups',
      type: 'array',
      label: 'Link Columns',
      maxRows: 3,
      fields: [
        {
          name: 'title',
          label: 'Group Title',
          type: 'text',
        },
        {
          name: 'links',
          label: 'Links',
          type: 'array',
          fields: [
            link({
              overrides: {
                label: 'Link',
              },
              appearances: false,
            }),
          ],
        },
      ],
    },

    // ✅ Social Links with uploaded icons
    {
      name: 'socialLinks',
      type: 'array',
      label: 'Social Media Links',
      fields: [
        {
          name: 'platform',
          type: 'text',
          label: 'Platform Name (e.g., facebook, instagram)',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          label: 'URL',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Social Icon Image',
          required: true,
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
