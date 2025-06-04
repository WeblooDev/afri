import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { CTAButton } from '@/components/CTAButton'
import { getPayload } from 'payload'
import config from '@/payload.config'

interface ProductsListBlockProps {
  title: string
  disableInnerContainer?: boolean
}

export const ProductsListBlockComponent: React.FC<ProductsListBlockProps> = async ({ title }) => {
  let products = []

  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'products',
    depth: 2,
    pagination: false,
  })

  products = docs

  return (
    <section className="mt-[120px] ">
      <div className="container flex flex-col justify-start items-start gap-8 mb-8">
        <h2 className="text-4xl md:text-6xl lg:text-9xl">{title}</h2>
        <p className=" w-auto md:w-[60%] lg:w-[40%] mb-4 text-lg">
          Découvrez une gamme complète de matériaux nobles sélectionnés pour s’adapter à vos
          projets.
        </p>
        <CTAButton href="Nos projets" text="Nos projets" arrow={true} variant="dark" />
      </div>
      <div className="w-full flex flex-col container">
        {products.map((product: any) => (
          <div key={product.id} className="flex flex-col gap-10 w-full ">
            <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
              <div className="h-[2px] w-full bg-black" />
              <Link href={`/produits/${product.data?.slug}`}>
                <h3 className="text-3xl md:text-5xl lg:text-8xl mb-2 hover:underline cursor-pointer">
                  {product.category}
                </h3>
              </Link>
            </div>

            {product.data?.categoryDescription && (
              <p className="w-auto text-center lg:text-start lg:w-[40%] mb-4 text-base lg:text-lg">
                {product.data.categoryDescription}
              </p>
            )}

            <div className="grid gap-10 grid-cols-2 lg:grid-cols-3 mb-8">
              {product.data?.images?.slice(0, 6).map((img: any, i: number) => (
                <div className="flex flex-col items-center gap-6" key={i}>
                  {img.image?.url && (
                    <Image
                      src={img.image.url}
                      alt={img.title}
                      width={400}
                      height={300}
                      className="rounded-2xl shadow h-full max-h-[400px]"
                    />
                  )}
                  <p className="text-sm lg:text-xl text-center mt-1">{img.title}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
