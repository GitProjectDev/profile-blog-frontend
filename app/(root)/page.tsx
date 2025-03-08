'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFadingOut, setIsFadingOut] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const images = ['/hero-img-1.jpg', '/hero-img-2.jpg', '/hero-img-3.jpg']

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFadingOut(true)
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
        setIsFadingOut(false)
      }, 1000)
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length])

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services')
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // const nextImageIndex = (currentImageIndex + 1) % images.length

  return (
    <main className="bg-white font-outfit">
      <section className="relative min-h-screen flex items-center border-t-[107px] md:border-0 border-transparent">
        <div
          className="container mx-auto px-6 md:px-10 md:py-[107px] lg:px-20 bg-white"
          aria-live="polite"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 w-full">
            <div className="text-center md:text-left">
              <h1 className="text-[#222] text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-8">
                Transforming Lives Through{' '}
                <span className="border-b-4 border-secondary">
                  Collaborative Care
                </span>
              </h1>
              <p className="font-light text-base lg:text-[22px] tracking-wide text-gray-700 mb-8 text-justify">
                At Empower Healthcare, we believe in revolutionizing healthcare
                by putting you at the center of your health journey. Experience
                personalized care, and compassionate service designed to empower
                your health decisions, enhance your well-being, and enrich your
                life. Join us in redefining what healthcare can be.
              </p>
              <button onClick={scrollToServices} className="btn">
                Start your Journey
              </button>
            </div>
            <div className="rounded-3xl overflow-hidden relative shadow-sm mt-6 md:mt-0 z-10">
              <Image
                src={images[currentImageIndex]}
                alt="hero image"
                width={500}
                height={300}
                className={`object-cover w-full h-auto transition-opacity duration-1000 ${
                  isFadingOut ? 'opacity-0' : 'opacity-100'
                }`}
              />
              {/* <Image
                src={images[nextImageIndex]}
                alt="Next healthcare worker assisting patient"
                width={500}
                height={300}
                className="w-full h-auto object-cover absolute inset-0 opacity-100"
              /> */}
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="py-12">
        <div className="bg-white">
          <div className="relative flex items-center overflow-hidden">
            <div
              className="absolute min-h-screen inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0 md:bg-fixed md:block hidden"
              style={{
                backgroundImage: `url('/info-sect.jpg')`,
                ...(scrollY > 0 && {
                  backgroundPosition: `center ${-scrollY * 0.3}px`,
                  transform: `translateY(${scrollY * 0}px)`,
                }),
              }}
            />
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat md:hidden block"
              style={{ backgroundImage: `url('/info-sect.jpg')` }}
            />
            <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
            <div className="container mx-auto px-6 py-16 md:px-10 lg:px-20 relative z-20 flex flex-col items-center md:flex-none md:items-start gap-6 w-full">
              <p className="font-light text-white pb-6 text-base lg:text-[22px] md:w-5/6 tracking-wide text-justify">
                At Empower Healthcare, we believe in making healthcare
                accessible, effective, and patient-focused. Whether it’s through
                preventive care, chronic disease management, or rehabilitation
                services, our mission is to support you every step of the way.
              </p>
              <Link href="/about" className="btn mt-6 inline-block">
                About Us
              </Link>
            </div>
          </div>
        </div>
        <div className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-10 lg:px-20">
            <div className="lg:flex">
              <h2 className="text-[#222] lg:w-3/4 text-3xl md:text-5xl text-center lg:text-left font-semibold mb-8">
                Our Services
              </h2>
              <p className="font-bold text-gray-700 md:text-lg">
                At Empower Healthcare, we offer tailored NDIS support and Social
                Services, daily living assistance and much more to help you
                achieve independence with ease and compassion.
              </p>
            </div>
            <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
              <div className="bg-secondary p-6 rounded-lg flex flex-col justify-between h-full hover:shadow-xl transition duration-300">
                <h3 className="text-center text-2xl font-medium mb-4">
                  NDIS Support
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Social and Community Participation</li>
                  <li>House Cleaning and Yard Maintenance</li>
                  <li>Personal Care and Domestic Assistance</li>
                  <li>Support Coordination</li>
                  <li>Respite Care</li>
                </ul>
                <div className="mt-6 text-center">
                  <Link href="/service-pages/ndis-service" className="btn-alt">
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="bg-secondary p-6 rounded-lg flex flex-col justify-between h-full hover:shadow-xl transition duration-300">
                <h3 className="text-center text-2xl font-medium mb-4">
                  Social Worker Services
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Help with NDIS Applications</li>
                  <li>Connecting to Appropriate Community Services</li>
                  <li>Assistance with Accessing Centrelink Services</li>
                </ul>
                <div className="mt-6 text-center">
                  <Link
                    href="/service-pages/social-service"
                    className="btn-alt"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              {/* <div className="bg-secondary p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-medium mb-4">Nursing Services</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Nurse Practioner Services</li>
                  <li>Depot Administration Assistance</li>
                  <li>CTO Follow-Up</li>
                  <li>Inpatient Leave Facilitation</li>
                </ul>
              </div> */}
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
