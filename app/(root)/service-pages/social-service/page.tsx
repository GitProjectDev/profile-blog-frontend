'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const SocialService = () => {
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
                src="/hero-back.jpg"
                alt="hero image"
                width={500}
                height={300}
                className="rounded-3xl shadow-sm object-cover w-full h-auto"
              />
            </div>
            <div className="md:w-1/2 z-10 text-center md:text-left">
              <h1 className="text-[#222] text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-8">
                Expert NDIS Social Worker Services
              </h1>
              <p className="font-light text-base lg:text-[22px] tracking-wide text-gray-700 mb-8 text-justify">
                Our social worker services are designed to support you and your
                family in accessing vital resources and assistance through the
                NDIS. We are committed to promoting your independence while
                helping you work towards achieving your personal aspirations and
                life goals.
              </p>
              <Link href="" className="btn">
                Make Enquiry
              </Link>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0 z-10 md:hidden">
              <Image
                src="/hero-back.jpg"
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
                backgroundImage: `url('/social-back.png')`,
                ...(scrollY > 0 && {
                  backgroundPosition: `center ${-scrollY * 0.3}px`,
                  transform: `translateY(${scrollY * 0}px)`,
                }),
              }}
            />
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat md:hidden block"
              style={{ backgroundImage: `url('/social-back.png')` }}
            />
            <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
            <div className="container mx-auto px-6 py-16 md:px-10 lg:px-20 relative z-20 flex flex-col items-center md:flex-none md:items-start gap-6 w-full">
              <h2 className="text-white font-medium text-4xl">
                Social Worker Services
              </h2>
              <p className="font-light text-white pb-6 text-base lg:text-[22px] tracking-wide text-justify">
                Through the NDIS and other support systems, our Social Workers
                help you access essential services, coordinate care, and connect
                with community programs that enhance your overall well-being.
                Whether you need help understanding your NDIS plan, addressing
                mental health concerns, building independence, or setting and
                achieving life goals, we are committed to being by your side
                every step of the way.
              </p>
              <p className="font-light text-white pb-6 text-base lg:text-[22px] tracking-wide text-justify">
                By focusing on your strengths, rights, and aspirations, our
                Social Worker services empower you to make informed decisions,
                overcome challenges, and live a fulfilling, dignified life with
                the support you deserve.
              </p>
            </div>
          </div>
        </div>
        <div className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-10 lg:px-20">
            <div className="lg:flex md:grid grid-cols-2">
              <h2 className="text-[#222] lg:w-3/4 text-3xl md:text-5xl text-center lg:text-left font-semibold mb-8">
                Why Choose Us?
              </h2>
              <p className="font-bold text-gray-700 md:text-lg text-justify md:text-left">
                At Empower Healthcare, our vision is to build a world where
                every person with a disability is supported to lead a meaningful
                and independent life, with dignity, choice, and access to
                exceptional care.
              </p>
            </div>
            <div className="pt-6 grid grid-cols-1 gap-8 text-white">
              <div className="bg-secondary p-6 rounded-lg flex items-center gap-6">
                <div className="w-1/3 hidden md:block">
                  <Image
                    src="/social-1.png"
                    alt="social worker assistance"
                    width={300}
                    height={200}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-center md:text-left text-2xl md:text-3xl lg:text-5xl font-semibold mb-4">
                    NDIS Application Support
                  </h3>
                  <Image
                    src="/social-1.png"
                    alt="social worker assistance"
                    width={300}
                    height={200}
                    className="rounded-lg object-cover w-full h-full md:hidden"
                  />
                  <ul className="space-y-3 text-justify pt-4">
                    <li>
                      <span className="font-medium text-xl">
                        Application Assistance: <br />
                      </span>
                      <span className="text-base md:text-lg">
                        We provide step-by-step guidance to help you complete
                        and submit your NDIS application with confidence.
                      </span>
                    </li>
                    <li>
                      <span className="font-medium text-xl">
                        Plan Review Support: <br />
                      </span>
                      <span className="text-base md:text-lg">
                        Our team offers expert advice to help you review and
                        update your NDIS plan, ensuring it continues to reflect
                        your changing goals and needs.
                      </span>
                    </li>
                    <li>
                      <span className="font-medium text-xl">
                        Documentation Support: <br />
                      </span>
                      <span className="text-base md:text-lg">
                        We assist you in collecting, organizing, and preparing
                        all required documents to strengthen your NDIS
                        application or plan review process.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-secondary p-6 rounded-lg flex items-center gap-6">
                <div className="w-full md:w-2/3">
                  <h3 className="text-center md:text-left text-2xl md:text-3xl lg:text-5xl font-semibold mb-4">
                    Connecting to Community Services
                  </h3>
                  <Image
                    src="/social-2.png"
                    alt="social worker assistance"
                    width={300}
                    height={200}
                    className="rounded-lg object-cover w-full h-full md:hidden"
                  />
                  <ul className="space-y-3 text-justify pt-4">
                    <li>
                      <span className="font-medium text-xl">
                        Service Matching: <br />
                      </span>
                      <span className="text-base md:text-lg">
                        We help you find and connect with local services that
                        best meet your individual needs and preferences.
                      </span>
                    </li>
                    <li>
                      <span className="font-medium text-xl">
                        Network Building: <br />
                      </span>
                      <span className="text-base md:text-lg">
                        Our team supports you in creating meaningful connections
                        and developing a strong support network within your
                        community.
                      </span>
                    </li>
                    <li>
                      <span className="font-medium text-xl">
                        Resource Guidance: <br />
                      </span>
                      <span className="text-base md:text-lg">
                        We provide clear information on available community
                        resources and guide you on how to access the support and
                        opportunities they offer.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="w-1/3 hidden md:block">
                  <Image
                    src="/social-2.png"
                    alt="social worker assistance"
                    width={300}
                    height={200}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="bg-secondary p-6 rounded-lg flex items-center gap-6">
                <div className="w-1/3 hidden md:block">
                  <Image
                    src="/social-3.png"
                    alt="social worker assistance"
                    width={300}
                    height={200}
                    className="rounded-lg object-cover w-full h-full"
                  />
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-center md:text-left text-2xl md:text-3xl lg:text-5xl font-semibold mb-4">
                    Support with Accessing Centrelink Services
                  </h3>
                  <Image
                    src="/social-3.png"
                    alt="social worker assistance"
                    width={300}
                    height={200}
                    className="rounded-lg object-cover w-full h-full md:hidden"
                  />
                  <ul className="space-y-3 text-justify pt-4">
                    <li>
                      <span className="font-medium text-xl">
                        Centrelink Navigation: <br />
                      </span>
                      <span className="text-base md:text-lg">
                        We assist you in understanding and accessing a range of
                        Centrelink services, such as the Disability Support
                        Pension (DSP), JobSeeker, Youth Allowance, and Aged Care
                        Pension.
                      </span>
                    </li>
                    <li>
                      <span className="font-medium text-xl">
                        Eligibilty Guidance: <br />
                      </span>
                      <span className="text-base md:text-lg">
                        Our team provides clear advice on eligibility criteria
                        and helps you prepare the required documentation to
                        support your application.
                      </span>
                    </li>
                    <li>
                      <span className="font-medium text-xl">
                        Ongoing Assistance: <br />
                      </span>
                      <span className="text-base md:text-lg">
                        We offer continuous support to help you manage, update,
                        and maintain your Centrelink benefits as your
                        circumstances change.
                      </span>
                    </li>
                  </ul>
                </div>
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

export default SocialService
