'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // const scrollToServices = () => {
  //   const servicesSection = document.getElementById('services')
  //   if (servicesSection) {
  //     servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
  //   }
  // }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main className="bg-white font-outfit">
      <section className="relative min-h-screen flex">
        <div className="absolute inset-0">
          <Image
            src="/tilak-back.jpg"
            alt="profile page image"
            fill
            objectFit="cover"
            className="z-0 h-screen opacity-100"
          />
        </div>
        {/* <button onClick={scrollToServices} className="">
          <Image
            src="/caret.svg"
            alt="scroll to"
            width={50}
            height={50}
            className="filter invert rotate-180"
          />
        </button> */}
      </section>
      <section id="services" className="py-12">
        <div className="bg-white">
          <div className="container mx-auto px-6 py-16 md:px-10 lg:px-20 gap-6 flex flex-col items-center lg:flex-row overflow-hidden">
            <div className="lg:w-1/4">
              <Image
                src="/tilak.jpg"
                alt="profile pic"
                width={300}
                height={300}
                className="rounded-full"
              />
            </div>
            <div className="lg:w-3/4 w-full">
              <h1 className="font-semibold text-2xl md:text-3xl text-center lg:text-start">
                Tilak Raj Bhandari
              </h1>
              <p className="font-light text-base lg:text-xl tracking-wide text-justify">
                Tilak Raj Bhandari is a dedicated communist leader and central
                committee member of the Nepal Communist Party (Maoist Centre),
                with a remarkable journey from a modest farming background to a
                prominent political figure. Overcoming early hardships through
                labor work to fund his education, he earned a Master’s in
                political science and an LLB, becoming a lawyer. His political
                career began in student activism, evolving into a key role in
                Nepal’s underground People’s War and the establishment of a
                federal democratic republic. Alongside his political work,
                Bhandari runs Everest Associates, a law firm, and Research for
                Nepal, advocating for education, self-reliance, and dynamic
                leadership to address modern societal challenges. Known for his
                integrity and simplicity, he remains a respected and
                approachable leader.
              </p>
              <Link href="/about" className="btn mt-6 inline-block ">
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div className="border-2 border-secondary mx-6 md:mx-10 lg:mx-20" />
        <div className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-10 lg:px-20">
            <div className="lg:flex">
              <h2 className="text-[#222] text-3xl md:text-5xl text-center lg:text-left font-semibold mb-8">
                Recent Activity
              </h2>
            </div>
            <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
              <div className="bg-secondary mx-auto p-6 rounded-lg hover:shadow-xl transition duration-300">
                <Link
                  href="https://www.facebook.com/profile.php?id=100083340757292"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/activity-1.jpg"
                    alt="activity 1"
                    width={300}
                    height={300}
                  />
                </Link>
              </div>
              <div className="bg-secondary mx-auto p-6 rounded-lg hover:shadow-xl transition duration-300">
                <Link
                  href="https://www.pearlsoftech.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/activity-2.jpg"
                    alt="activity 2"
                    width={300}
                    height={300}
                  />
                </Link>
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
