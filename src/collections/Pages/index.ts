import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { Archive } from '../../blocks/ArchiveBlock/config'
import { CallToAction } from '../../blocks/CallToAction/config'
import { Content } from '../../blocks/Content/config'
import { FormBlock } from '../../blocks/Form/config'
import { MediaBlock } from '../../blocks/MediaBlock/config'
import { hero } from '@/heros/config'
import { slugField } from '@/fields/slug'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { revalidateDelete, revalidatePage } from './hooks/revalidatePage'
import { Awards } from '@/blocks/awards/config'
import { ImageSectionBlock } from '../../blocks/ImageSection/config'
import { ThreeColumnSectionBlock } from '../../blocks/ThreeColumn/config'
import { ThreeColumnLayout } from '../../blocks/ThreeColumnLayout/config'
import { VideoSectionBlock } from '../../blocks/VideoSection/config'
import { FeatureSectionBlock } from '../../blocks/FeatureSection/config'
import { MultiRowSectionBlock } from '../../blocks/MultiRowSection/config'
import { CTASectionBlock } from '@/blocks/CTASection/config'
import { CarouselBlock } from '@/blocks/carousel/config'
import { HeroBlock } from '@/blocks/Hero/config'
import { descriptionBlock } from '@/blocks/description/config'
import { CarouselFourSlideBlock } from '@/blocks/CarouselFourSlide/config'
import { localisationBlock } from '@/blocks/localisation/config'
import { CenteredSectionBlock } from '@/blocks/CenteredSection/config'
import { ProductsListBlock } from '@/blocks/ProductsList/config'
import { ContactFormBlock } from '@/blocks/ContactFormBlock/config'
import { CarouselThreeSlideBlock } from '@/blocks/CarouselThreeSlide/config'
import { AfriHeader } from '@/blocks/afriHeader/config'
import { CarouselDescriptionBlock } from '@/blocks/carouselDescription/config'
import { ThreeColumnSecondBlock } from '@/blocks/ThreeColumnSecond/config'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

export const Pages: CollectionConfig<'pages'> = {
  slug: 'pages',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  // This config controls what's populated by default when a page is referenced
  // https://payloadcms.com/docs/queries/select#defaultpopulate-collection-config-property
  // Type safe if the collection slug generic is passed to `CollectionConfig` - `CollectionConfig<'pages'>
  defaultPopulate: {
    title: true,
    slug: true,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'pages',
          req,
        })

        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'pages',
        req,
      }),
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          fields: [hero],
          label: 'Hero',
        },
        {
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              blocks: [
                CallToAction,
                Content,
                MediaBlock,
                Archive,
                FormBlock,
                Awards,
                ImageSectionBlock,
                AfriHeader,
                ThreeColumnSectionBlock,
                ThreeColumnSecondBlock,
                ThreeColumnLayout,
                VideoSectionBlock,
                FeatureSectionBlock,
                MultiRowSectionBlock,
                CTASectionBlock,
                CarouselBlock,
                HeroBlock,
                descriptionBlock,
                CarouselFourSlideBlock,
                CarouselThreeSlideBlock,
                CarouselDescriptionBlock,
                localisationBlock,
                CenteredSectionBlock,
                ProductsListBlock,
                ContactFormBlock,
              ],
              required: true,
              admin: {
                initCollapsed: true,
              },
            },
          ],
          label: 'Content',
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
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    ...slugField(),
  ],
  hooks: {
    afterChange: [revalidatePage],
    beforeChange: [populatePublishedAt],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
}
