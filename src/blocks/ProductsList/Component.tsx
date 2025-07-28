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
  let products: any[] = []

  try {
    const payload = await getPayload({ config })

    const { docs } = await payload.find({
      collection: 'products',
      depth: 2,
      pagination: false,
    })

    products = docs || []
  } catch (error) {
    console.error('Error fetching products:', error)
    products = []
  }

  // Shuffle products array
  const shuffledProducts = [...products].sort(() => Math.random() - 0.5)

  // Clean light colors for some items
  const lightColors = ['bg-white', 'bg-gray-50', 'bg-slate-50']

  return (
    <section className="mt-[120px] ">
      <div className="container flex flex-col justify-start items-start gap-8 mb-8">
        <h2 className="text-4xl md:text-6xl lg:text-9xl">{title}</h2>
        <p className=" w-auto md:w-[60%] lg:w-[40%] mb-4 text-lg">
          Découvrez une gamme complète de matériaux nobles sélectionnés pour s&#39;adapter à vos
          projets.
        </p>
      </div>
      <div className="w-full flex flex-col container">
        {shuffledProducts.map((product: any, productIndex: number) => (
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
              <p className="w-auto text-center lg:text-start  mb-4 text-base lg:text-lg">
                {product.data.categoryDescription}
              </p>
            )}

            <div className="grid gap-10 grid-cols-2 lg:grid-cols-3 mb-8">
              {product.data?.images?.slice(0, 6).map((img: any, i: number) => {
                // Apply lighter colors to some items (every 2nd and 3rd item)
                const shouldUseLightColor = i % 3 === 1 || i % 3 === 2
                const lightColor = lightColors[i % lightColors.length]

                return (
                  <div
                    className={`flex flex-col items-center gap-6 p-4 rounded-2xl transition-all duration-300 hover:shadow-lg ${
                      shouldUseLightColor ? lightColor : ''
                    }`}
                    key={i}
                  >
                    {img.image?.url && (
                      <Image
                        src={img.image.url}
                        alt={img.title || 'Product image'}
                        width={400}
                        height={300}
                        className="rounded-2xl shadow h-full max-h-[400px] object-cover"
                      />
                    )}
                    <p className="text-sm lg:text-xl text-center mt-1 font-medium">{img.title}</p>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
