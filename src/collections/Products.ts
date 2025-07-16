import { CollectionConfig } from 'payload'
import { CTASectionBlock } from '@/blocks/CTASection/config'
import { VideoSectionBlock } from '@/blocks/VideoSection/config'
import { CarouselThreeSlideBlock } from '@/blocks/CarouselThreeSlide/config'
import { CarouselBlock } from '@/blocks/carousel/config'
import { AfriHeader } from '@/blocks/afriHeader/config'
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { slugField } from '@/fields/slug'
import { revalidatePage } from './Pages/hooks/revalidatePage'
import { populatePublishedAt } from '@/hooks/populatePublishedAt'

export const Products: CollectionConfig = {
  slug: 'products',
  labels: {
    singular: 'products detail',
    plural: 'products Reviews',
  },
  admin: {
    defaultColumns: ['slug', 'updatedAt'],

    useAsTitle: 'category',
  },
  defaultPopulate: {
    title: true,
    slug: true,
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
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    ...slugField(),
  ],
  hooks: {
    afterChange: [revalidatePage],
    beforeChange: [populatePublishedAt],
  },
}
