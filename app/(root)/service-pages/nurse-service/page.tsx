'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const NurseService = () => {
  return (
    <main className="font-outfit">
      <section className="bg-primary-100 border-t-[107px] md:border-0 border-transparent">
        <div className="container mx-auto px-6 md:px-10 md:py-[107px] lg:px-20 relative min-h-screen flex items-center bg-primary-100">
          <div className="flex flex-col md:flex-row items-center gap-6 w-full">
            <div className="md:w-1/2 z-10 text-center md:text-left">
              <h1 className="text-[#222] text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-8">
                Nursing Services
              </h1>
              <p className="font-light text-base lg:text-[22px] tracking-wide text-gray-700 mb-8 text-justify">
                Our expert team provides Nursing Services tailored to your
                individual needs, ensuring you receive the highest quality
                support throughout your health journey.
              </p>
              <Link href="" className="btn">
                Make Enquiry
              </Link>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0 z-10">
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
        <div className="bg-white py-16">
          <div className="container mx-auto px-6 md:px-10 lg:px-20">
            <p className="font-light text-gray-700 pb-6 md:w-3/4 text-base lg:text-[22px] tracking-wide">
              At Empower Healthcare, we believe in making healthcare accessible,
              effective, and patient-focused. Whether it’s through preventive
              care, chronic disease management, or rehabilitation services, our
              mission is to support you every step of the way.
            </p>
            <Link href="/about" className="btn mt-6">
              About Us
            </Link>
          </div>
        </div>
        <div className="py-16 bg-primary-100">
          <div className="container mx-auto px-6 md:px-10 lg:px-20">
            <div className="lg:flex">
              <h2 className="text-[#222] lg:w-3/4 text-3xl md:text-5xl text-center lg:text-left font-semibold mb-8">
                Our Services
              </h2>
              <p className="font-bold text-gray-700 md:text-lg">
                At Empower Healthcare, we offer tailored NDIS support
                coordination, mental health and nursing care, daily living
                assistance and much more to help you achieve independence with
                ease and compassion.
              </p>
            </div>
            <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text text-2xl font-medium mb-4">
                  Support Coordination
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Recovery Coaching</li>
                  <li>Community Engagement</li>
                  <li>Daily Living Assistance</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-medium mb-4">
                  Social Worker Services
                </h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Help with NDIS Applications</li>
                  <li>Connecting to Appropriate Community Services</li>
                  <li>Assistance with Accessing Centrelink Services</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-medium mb-4">Nursing Services</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Nurse Practioner Services</li>
                  <li>Depot Administration Assistance</li>
                  <li>CTO Follow-Up</li>
                  <li>Inpatient Leave Facilitation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default NurseService
