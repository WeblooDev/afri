'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Media } from '@/components/Media'
import type { ContactFormBlock } from '@/payload-types'
import { CTAButton } from '@/components/CTAButton'

export const ContactForm: React.FC<ContactFormBlock> = ({ title, description, submit, image }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Track lead conversion with Meta Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      ;(window as any).fbq('track', 'Lead')
    }

    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <section className="w-full pt-[100px] bg-white text-black">
      <div className="w-full container flex flex-col lg:flex-row justify-between items-center gap-14">
        <div className="flex flex-col w-full lg:w-[50%] gap-12 p-12 lg:p-8 pl-12">
          <div>
            <h2 className="text-3xl md:text-7xl">{title}</h2>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <Input
              className="bg-white text-black border-[1.74px] border-black text-[24.36px] rounded-full p-8"
              id="name"
              placeholder="Nom complet"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              required
            />
            <Input
              className="bg-white text-black border-[1.74px] border-black text-[24.36px] rounded-full p-8"
              id="email"
              type="email"
              placeholder="Adresse e-mail"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
            />
            <Input
              className="bg-white text-black border-[1.74px] border-black text-[24.36px] rounded-full p-8"
              id="phone"
              type="tel"
              placeholder="Numéro de téléphone"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
            />
            <Input
              className="bg-white text-black border-[1.74px] border-black text-[24.36px] rounded-full p-8"
              id="message"
              placeholder="Message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              required
            />
            <CTAButton
              className="flex items-center p-12"
              text={submit ?? 'Get Started'}
              arrow={false}
              variant="dark"
            />
          </form>
          <div>
            <p className="text-base">{description}</p>
          </div>
        </div>

        <div className="relative flex items-center justify-center w-full lg:w-[45%] rounded-3xl p-12 lg:p-0 lg:rounded-tl-[1rem] lg:rounded-bl-[1rem]">
          <div className="relative w-full rounded-tl-[1rem] rounded-bl-[1rem]">
            <Media
              resource={image}
              priority
              imgClassName="w-full h-full object-cover max-h-[700px] rounded-tl-[1rem] rounded-bl-[1rem]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
