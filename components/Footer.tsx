'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-secondary text-[#fff] pt-10 pb-5 font-outfit">
      <div className="container mx-auto mt-6 px-20 flex flex-col">
        <div className="mt-6 md:mt-0 gap-6 inline-flex mx-auto">
          <Link
            href="https://www.facebook.com/tilakraj.bhandari.5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/facebook.png" alt="facebook" width={40} height={40} />
          </Link>
          <Link
            href="https://www.instagram.com/motilak.bh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/instagram.png"
              alt="instagram"
              width={40}
              height={40}
            />
          </Link>
          <Link
            href="https://x.com/Tilakraj331"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/x.png" alt="X" width={40} height={40} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/tilak-raj-bhhandari-b5049334b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/linkedin.png" alt="X" width={40} height={40} />
          </Link>
        </div>
      </div>
      <p className="mt-10 text-center text-sm">
        &copy; 2025 Profile Blog. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
