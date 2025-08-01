import { getCachedGlobal } from '@/utilities/getGlobals'
import type { Footer as FooterType } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'

export async function Footer() {
  const footerData = (await getCachedGlobal('footer', 1)()) as FooterType
  const {
    about,
    linkGroups = [],
    socialLinks = [],
    phoneLinks = [],
    webLinks = [],
  } = footerData || {}

  return (
    <footer className="w-full py-12 text-gray-600 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
          {/* Column 1: About Section */}
          <div className="md:w-[40%] flex flex-col-reverse lg:flex-col gap-6 lg:gap-12">
            {about?.description && (
              <p className="text-xl lg:text-2xl text-center lg:text-start">{about.description}</p>
            )}
            {about?.image &&
              typeof about.image === 'object' &&
              'url' in about.image &&
              about.image.url && (
                <Image
                  src={about.image.url}
                  alt="About"
                  width={300}
                  height={120}
                  className="rounded-md w-auto"
                />
              )}
          </div>

          {/* Column 2: Contact + Internal Links */}
          <div className="flex flex-col gap-4 items-center lg:items-start">
            {/* Phone Links */}
            <div className="flex flex-col gap-4 mb-8">
              {(phoneLinks ?? []).map((item, i) => (
                <div key={i}>
                  <Link
                    href={item.link?.url || '#'}
                    className="flex items-center lg:items-start text-xl lg:text-2xl hover:underline"
                  >
                    {item.link?.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Internal Page Links */}
          <div className="flex flex-col gap-4 items-center lg:items-end">
            <div className="grid grid-cols-2 gap-4">
              <Link
                href="/-propos"
                className="flex justify-center lg:justify-end text-xl lg:text-2xl hover:underline"
              >
                À propos
              </Link>
              <Link
                href="/projets"
                className="flex justify-center lg:justify-end text-xl lg:text-2xl hover:underline"
              >
                Projets
              </Link>
              <Link
                href="/produits"
                className="flex justify-center lg:justify-end text-xl lg:text-2xl hover:underline"
              >
                Produits
              </Link>
              <Link
                href="/contact"
                className="flex justify-center lg:justify-end text-xl lg:text-2xl hover:underline"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
