'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#2e2e2e] text-[#fff] pt-10 pb-5 font-outfit">
      <div className="container mx-auto mt-6 px-20 flex flex-col md:flex-row justify-between">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <Image
            src="/logo.png"
            alt="logo"
            width={150}
            height={150}
            className="inline-block"
          />
        </div>
        <div className="flex flex-row justify-stretch gap-20">
          <nav className="flex flex-col gap-4 mt-6 md:mt-0 w-fit">
            <h3 className="underline font-medium text-lg">Links</h3>
            <Link href="/" className="hover:text-gray-400">
              Home
            </Link>
            <Link href="/about" className="hover:text-gray-400">
              About
            </Link>
            <Link href="/enquiry" className="hover:text-gray-400">
              Contact
            </Link>
          </nav>
          <nav className="flex flex-col gap-4 mt-6 md:mt-0 w-fit">
            <h3 className="underline font-medium text-lg">Services</h3>
            <Link
              href="/service-pages/ndis-service"
              className="hover:text-gray-400"
            >
              NDIS Support
            </Link>
            <Link
              href="/service-pages/social-service"
              className="hover:text-gray-400"
            >
              Social Worker Services
            </Link>
          </nav>
        </div>
        <div className="mt-6 md:mt-0 gap-6 inline-flex mx-auto md:mx-0">
          <Link
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/facebook.svg"
              alt="facebook"
              width={30}
              height={30}
              className="filter invert brightness-200 hover:brightness-0"
            />
          </Link>
          <Link
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/instagram.svg"
              alt="instagram"
              width={30}
              height={30}
              className="filter invert brightness-200 hover:brightness-0"
            />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/twitter.svg"
              alt="twitter"
              width={30}
              height={30}
              className="filter invert brightness-200 hover:brightness-0"
            />
          </Link>
        </div>
      </div>
      <p className="mt-10 text-center text-sm">
        &copy; 2025 Empower Healthcare Australia. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
