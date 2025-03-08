'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const NdisService = () => {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
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
      <section className="bg-white border-t-[107px] md:border-0 border-transparent">
        <div className="container mx-auto px-6 md:px-10 md:py-[107px] lg:px-20 relative min-h-screen flex items-center bg-white">
          <div className="flex flex-col md:flex-row items-center gap-8 w-full">
            <div className="md:w-1/2 mt-6 md:mt-0 z-10 hidden md:block">
              <Image
                src="/ndis-back.png"
                alt="hero image"
                width={500}
                height={300}
                className="rounded-3xl shadow-sm object-cover w-full h-auto"
              />
            </div>
            <div className="md:w-1/2 z-10 text-center md:text-left">
              <h1 className="text-[#222] text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-8">
                NDIS Support
              </h1>
              <p className="font-light text-base lg:text-[22px] tracking-wide text-gray-700 mb-8 text-justify">
                At Empower Healthcare, we work closely with you to enhance your
                independence and maximize your NDIS plan, ensuring you achieve
                your personal and life goals.
              </p>
              <Link href="" className="btn">
                Make Enquiry
              </Link>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0 z-10 md:hidden">
              <Image
                src="/ndis-back.png"
                alt="hero image"
                width={500}
                height={300}
                className="rounded-3xl shadow-sm object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="bg-white">
          <div className="relative flex items-center overflow-hidden">
            <div
              className="absolute min-h-screen inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0 md:bg-fixed md:block hidden"
              style={{
                backgroundImage: `url('/ndis-sect.png')`,
                ...(scrollY > 0 && {
                  backgroundPosition: `center ${-scrollY * 0.3}px`,
                  transform: `translateY(${scrollY * 0}px)`,
                }),
              }}
            />
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat md:hidden block"
              style={{ backgroundImage: `url('/ndis-sect.png')` }}
            />
            <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
            <div className="container mx-auto px-6 py-16 md:px-10 lg:px-20 relative z-20 flex flex-col items-center md:flex-none md:items-start gap-6 w-full">
              <h2 className="text-white font-medium text-4xl">
                What we provide
              </h2>
              <p className="font-light text-white pb-6 text-base lg:text-[22px] tracking-wide text-justify">
                Our NDIS services are designed to assist individuals living with
                disabilities by delivering high-quality care and practical
                solutions that promote independence, improve well-being, and
                support everyday living.
              </p>
              <p className="font-light text-white pb-6 text-base lg:text-[22px] tracking-wide text-justify">
                We work closely with participants, families, and caregivers to
                create personalized care plans that align with individual goals,
                needs, and lifestyles. From daily personal care and community
                participation to therapeutic support and skill development, our
                dedicated team ensures that each person receives the right
                services to live life on their own terms.
              </p>
            </div>
          </div>
        </div>
        <div className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-10 lg:px-20">
            <h2 className="text-[#222] text-3xl md:text-5xl text-center lg:text-left font-semibold mb-8">
              Our unique NDIS Support Service
            </h2>
            <div className="pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-white">
              <div className="bg-secondary p-6 rounded-lg shadow-md flex flex-col justify-between h-full">
                <h3 className="text-center text-2xl font-medium mb-4">
                  Social and Community Participation
                </h3>
                <p className="text-justify">
                  We support individuals in staying connected with their
                  community by assisting with social activities, group outings,
                  hobbies, and events, helping you build relationships, develop
                  skills, and actively participate in the life you enjoy.
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-lg shadow-md flex flex-col justify-between h-full">
                <h3 className="text-center text-2xl font-medium mb-4">
                  House Cleaning and Yard Maintenance
                </h3>
                <p className="text-justify">
                  Our reliable team provides household cleaning and yard
                  maintenance services to ensure your living environment remains
                  safe, comfortable, and well-kept, giving you more time and
                  energy to focus on the things that matter most.
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-lg shadow-md flex flex-col justify-between h-full">
                <h3 className="text-center text-2xl font-medium mb-4">
                  Personal Care and Domestic Assistance
                </h3>
                <p className="text-justify">
                  We offer compassionate personal care and daily living support,
                  including help with hygiene, dressing, meal preparation, and
                  household tasks, empowering you to maintain your independence
                  while receiving the care you need.
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-lg shadow-md hidden md:flex lg:hidden flex-col justify-between h-full">
                <h3 className="text-center text-2xl font-medium mb-4">
                  Support Coordination
                </h3>
                <p className="text-justify">
                  Our experienced Support Coordinators work with you to manage
                  your NDIS plan, connect you with the right services, and
                  ensure your supports are delivered effectively to help you
                  reach your goals with confidence and clarity.
                </p>
              </div>
            </div>
            <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
              <div className="bg-secondary p-6 rounded-lg shadow-md flex md:hidden lg:flex flex-col justify-between h-full">
                <h3 className="text-center text-2xl font-medium mb-4">
                  Support Coordination
                </h3>
                <p className="text-justify">
                  Our experienced Support Coordinators work with you to manage
                  your NDIS plan, connect you with the right services, and
                  ensure your supports are delivered effectively to help you
                  reach your goals with confidence and clarity.
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-lg shadow-md flex flex-col justify-between h-full">
                <h3 className="text-center text-2xl font-medium mb-4">
                  Respite Care
                </h3>
                <p className="text-justify">
                  We provide flexible respite care solutions that offer
                  temporary relief for primary caregivers, ensuring your loved
                  one receives attentive, high-quality care while you take the
                  time to rest, recharge, or manage other responsibilities.
                </p>
              </div>
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

export default NdisService
