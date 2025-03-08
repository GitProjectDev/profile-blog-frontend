'use client'
import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <main className="font-outfit">
      <section className="bg-white border-transparent">
        <div className="container mx-auto px-6 md:px-10 md:py-[107px] lg:px-20 relative min-h-screen flex items-center bg-white">
          <div className="z-10 items-center gap-6 w-full">
            <div className="text-center">
              <h1 className="text-[#222] text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
                Empower HeathCare Australia
              </h1>
              <p className="text-[#222] text-lg md:text-xl lg:text-2xl">
                Empowering health. Enriching Lives
              </p>
            </div>
          </div>
        </div>
        <div className="absolute inset-0">
          <Image
            src="/about-back.jpg"
            alt="about page image"
            fill
            objectFit="cover"
            className="z-0 h-screen opacity-15 md:opacity-100"
          />
          <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-secondary via-secondary to-transparent via-50% to-100% opacity-50"></div>
        </div>
      </section>
      <section>
        <div className="container mx-auto px-6 md:px-10 lg:px-20 py-16 bg-white">
          <div className="lg:flex">
            <h2 className="lg:w-1/4 xl:w-1/4 text-4xl md:text-5xl text-center lg:text-left font-semibold mb-8">
              Empowering Independence
            </h2>
            <p className="lg:w-3/4 md:text-lg text-justify">
              Empower Healthcare is a values-driven organisation led by
              dedicated allied health professionals and registered nurses who
              are committed to supporting individuals to live meaningful,
              independent, and connected lives. Guided by the social model of
              health, we prioritise the removal of barriers—whether physical,
              social, or systemic—that impact wellbeing, ensuring our clients
              have every opportunity to participate fully in their communities
              and achieve their personal goals.
            </p>
          </div>
          <div className="pt-8 md:text-lg text-justify">
            <p>
              With our clients’ best interests at the centre of everything we
              do, we work alongside individuals, families, and support networks
              to co-design care plans that reflect each person’s unique
              aspirations, strengths, and needs. Whether delivering
              rehabilitation, aged care, community health, or wellness services,
              our multidisciplinary team focuses on empowering people—not just
              to manage their health, but to thrive within their environments.
            </p>
            <p className="pt-8">
              We understand that true health and recovery extend beyond clinical
              outcomes. That’s why our approach is deeply collaborative and
              holistic, supporting people to overcome challenges, build
              independence, and actively engage in the life they choose. By
              integrating professional expertise with compassion and respect,
              Empower Healthcare is creating a future where health is not
              defined by limitations but by possibilities.
            </p>
          </div>
          <div className="mt-20 lg:flex text-center">
            <div className="lg:w-1/2 md:px-20 pb-8 lg:pb-0">
              <h3 className="font-medium text-3xl md:text-4xl">Our Mission</h3>
              <p className="text-justify md:text-lg">
                Our mission is to support and uplift individuals with
                disabilities by delivering tailored, high-quality care that
                honors their dignity, promotes independence, and improves their
                overall quality of life.
              </p>
            </div>
            <div className="border-2 border-secondary" />
            <div className="lg:w-1/2 md:px-20 pt-8 lg:pt-0">
              <h3 className="font-medium text-3xl md:text-4xl">Our Vision</h3>
              <p className="text-justify md:text-lg">
                We aspire to create a world where people with disabilities are
                empowered to live with freedom, respect, and access to the
                resources they need to thrive and reach their highest potential.
              </p>
            </div>
          </div>
        </div>
      </section>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-secondary text-white p-2 rounded-full hover:bg-tertiary transition duration-300 shadow-md z-50 ${
          isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } transition-opacity duration-300`}
        aria-label="Scroll to top"
      >
        <Image
          src="/up-arrow.svg"
          alt="Scroll to top"
          width={24}
          height={24}
          className="w-6 h-6 filter invert"
        />
      </button>
    </main>
  )
}

export default About
