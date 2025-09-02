'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Media } from '@/components/Media'
import { ChevronDown, ChevronUp } from 'lucide-react'
import type { Header } from '@/payload-types'
import { HeaderNav } from './Nav'

export const HeaderClient: React.FC<{ data: Header }> = ({ data }) => {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    setLastScrollY(window.scrollY)
  }, [pathname])

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setIsVisible(currentY < lastScrollY)
      setLastScrollY(currentY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full bg-white/90 transition-transform duration-300 ${
        isVisible ? 'translate-y-0 mt-4' : '-translate-y-full'
      }`}
    >
      <div className="p-4 flex items-center text-black">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            {data.logo && (
              <Media resource={data.logo} priority className="h-10 !w-auto object-contain" />
            )}
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:block flex-1 flex justify-center">
          <HeaderNav items={data.navItems || []} />
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden p-2 rounded-full hover:bg-gray-100 ml-auto"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white px-6 pb-6 pt-4 border-t border-gray-200">
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-xl text-black hover:underline"
              onClick={() => setMobileMenuOpen(false)}
            >
              Accueil
            </Link>

            <Link
              href="/-propos"
              className="text-xl text-black hover:underline"
              onClick={() => setMobileMenuOpen(false)}
            >
              À propos
            </Link>

            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <Link
                  href="/produits"
                  className="text-xl text-black hover:underline"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Produit
                </Link>
                <button
                  onClick={() => setOpenDropdownIndex(openDropdownIndex === 0 ? null : 0)}
                  className="ml-2"
                >
                  {openDropdownIndex === 0 ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
              </div>

              {openDropdownIndex === 0 && (
                <div className="mt-2 flex flex-col gap-4 pl-4">
                  <Link
                    href="/produits/Marble"
                    className="text-base text-black hover:underline"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Marble
                  </Link>
                  <Link
                    href="/produits/Quartzites"
                    className="text-base text-black hover:underline"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Quartzite
                  </Link>
                  <Link
                    href="/produits/Pierre"
                    className="text-base text-black hover:underline"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Pierre
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/projets"
              className="text-xl text-black hover:underline"
              onClick={() => setMobileMenuOpen(false)}
            >
              Projets
            </Link>

            <Link
              href="/contact"
              className="text-xl text-black hover:underline"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
