import { CollectionConfig } from 'payload'
import { CTASectionBlock } from '@/blocks/CTASection/config'
import { VideoSectionBlock } from '@/blocks/VideoSection/config'
import { CarouselThreeSlideBlock } from '@/blocks/CarouselThreeSlide/config'
import { CarouselBlock } from '@/blocks/carousel/config'
import { AfriHeader } from '@/blocks/afriHeader/config'
// import { HeaderDescriptionBlock } from '@/blocks/afriHeader copy/config'

export const Products: CollectionConfig = {
  slug: 'products',
  labels: {
    singular: 'products detail',
    plural: 'products Reviews',
  },
  admin: {
    useAsTitle: 'category',
  },
  fields: [
    {
      name: 'category',
      type: 'text',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          name: 'content',
          label: 'Content',
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              blocks: [
                CarouselThreeSlideBlock,
                AfriHeader,
                CTASectionBlock,
                VideoSectionBlock,
                CarouselBlock,
                // HeaderDescriptionBlock,
              ],
              required: false,
              admin: {
                initCollapsed: true,
              },
            },
          ],
        },
        {
          name: 'data',
          label: 'Product Data',
          fields: [
            {
              name: 'slug',
              type: 'text',
              required: true,
              unique: true,
              admin: {
                position: 'sidebar',
              },
            },
            {
              name: 'categoryDescription',
              type: 'textarea',
              required: true,
            },
            {
              name: 'images',
              type: 'array',
              required: true,
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
