// src/app/(frontend)/produits/[slug]/page.tsx

import { getPayload } from 'payload'
import config from '@/payload.config'
import { notFound } from 'next/navigation'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import Image from 'next/image'
import { generateMeta } from '@/utilities/generateMeta'
import type { Metadata } from 'next'
import configPromise from '@payload-config'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import Head from 'next/head'

export default async function ProductPage({ params }: any) {
  const { slug } = await params

  const payload = await getPayload({ config })

  const result = await payload.find({
    collection: 'products',
    depth: 2,
    limit: 1,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  const product = result.docs?.[0]

  if (!product) return notFound()

  return (
    <>
      <div className="py-16 mt-[120px]">
        <div className="w-full container flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
          <div className="h-[2px] w-full bg-black" />
          <h1 className="text-6xl lg:text-9xl mb-6">{product.category}</h1>
        </div>

        <p className="container mb-8 text-lg text-center lg:text-start">
          {product.data?.categoryDescription}
        </p>

        <div className="container grid gap-10 grid-cols-2 lg:grid-cols-3 mb-8">
          {product.data?.images?.map((img: any, i: number) => (
            <div className="flex flex-col items-center gap-6 " key={i}>
              {img.image?.url && (
                <Image
                  src={img.image.url}
                  alt={img.title}
                  width={400}
                  height={300}
                  className="rounded-2xl shadow h-full max-h-[400px]"
                />
              )}
              <p className="text-center text-lg mt-2 font">{img.title}</p>
            </div>
          ))}
        </div>

        {product.content?.layout && <RenderBlocks blocks={product.content.layout} />}
      </div>
    </>
  )
}
