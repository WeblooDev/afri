'use client'

import { ChevronDown } from 'lucide-react'
import type { Header } from '@/payload-types'

interface Props {
  items: Header['navItems']
}
import { CMSLink } from '@/components/Link'

export const HeaderNav: React.FC<Props> = ({ items }) => {
  return (
    <nav className="hidden md:flex items-center justify-center">
      {(items || []).map((item, i) => {
        const hasDropdown = Array.isArray(item.subItems) && item.subItems.length > 0

        if (hasDropdown) {
          return (
            <div key={i} className="relative group">
              <CMSLink
                {...item.link}
                className="flex items-center text-lg px-10 hover:underline cursor-pointer"
              >
                <ChevronDown className="h-4 w-4 ml-2" />
              </CMSLink>

              <div
                className="absolute bg-white w-full pt-[150px] pb-4 border border-black rounded-b-[30px] -top-[100px] left-0 mt-[1.3rem] 
                rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 -z-50"
              >
                <div className="py-1 flex flex-col shadow-xs rounded-b-[30px]">
                  {item.subItems?.map((sub: any, j: number) => (
                    <CMSLink
                      key={j}
                      {...sub.link}
                      className="text-lg text-black px-10 py-2 hover:underline cursor-pointer"
                    />
                  ))}
                </div>
              </div>
            </div>
          )
        }

        return item.link ? (
          <CMSLink
            key={i}
            {...item.link}
            className="text-lg px-10 hover:underline cursor-pointer"
          />
        ) : (
          <span key={i} className="text-sm text-black">
            {item.label}
          </span>
        )
      })}
      

    </nav>
  )
}
