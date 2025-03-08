'use client'
import React from 'react'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = () => {
    setIsMenuOpen(false)
    setIsServicesDropdownOpen(false)
  }

  const isActive = (path: string | string[]) => {
    if (Array.isArray(path)) {
      return path.some((p) => pathname === p)
    }
    return pathname === path
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isServicesDropdownOpen &&
        event.target instanceof Element &&
        !event.target.closest('.services-dropdown')
      ) {
        setIsServicesDropdownOpen(false)
      }
    }
    if (isServicesDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
  }, [isServicesDropdownOpen])

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 font-outfit transition-all duration-300 ease-in-out ${
        isScrolled || isMenuOpen
          ? 'bg-[#fff] shadow-md'
          : 'bg-transparent shadow-none'
      } `}
    >
      <div className="container mx-auto p-6 md:px-10 lg:px-20 flex justify-between items-center">
        <Link href="/" className="" onClick={handleNavClick}>
          <Image src="/logo.png" alt="logo" width={150} height={150} />
        </Link>
        <nav className="hidden md:flex items-center space-x-8 lg:text-xl font-normal">
          <Link
            href="/"
            className={`${
              isActive('/')
                ? 'text-secondary cursor-default'
                : 'text-black hover:border-b-2 border-secondary'
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`${
              isActive('/about')
                ? 'text-secondary cursor-default'
                : 'text-black hover:border-b-2 border-secondary'
            }`}
          >
            About
          </Link>
          <div className="relative services-dropdown">
            <button
              onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
              className={`flex ${
                isActive([
                  '/service-pages/ndis-service',
                  '/service-pages/social-service',
                  '/service-pages/nurse-service',
                ])
                  ? 'text-secondary hover:border-b-2 border-secondary'
                  : 'text-black hover:border-b-2 border-secondary'
              }`}
            >
              Services
              <Image
                src="/caret.svg"
                alt="dropdown"
                width={28}
                height={28}
                className={`transition-transform duration-300 ${
                  isServicesDropdownOpen ? 'rotate-0' : 'rotate-180'
                }`}
              />
            </button>

            {isServicesDropdownOpen && (
              <div className="absolute -left-20 mt-2 w-48 text-white bg-secondary rounded-md shadow-lg z-50">
                <Link
                  href="/service-pages/ndis-service"
                  onClick={handleNavClick}
                  className="block px-4 py-2  hover:bg-tertiary hover:rounded-t-md border-b-2 border-white"
                >
                  NDIS Services
                </Link>
                <Link
                  href="/service-pages/social-service"
                  onClick={handleNavClick}
                  className="block px-4 py-2  hover:bg-tertiary hover:rounded-b-md"
                >
                  Social Worker Services
                </Link>
                {/* <Link
                  href="/service-pages/nurse-service"
                  onClick={handleNavClick}
                  className="block px-4 py-2  hover:bg-tertiary hover:rounded-b-md"
                >
                  Nursing Services
                </Link> */}
              </div>
            )}
          </div>
          {/* <Link
            href="/contact"
            className={`${
              isActive('/contact')
                ? 'text-secondary cursor-default'
                : 'text-black hover:border-b-2 border-secondary'
            }`}
          >
            Contact
          </Link> */}
          {/* <a
            href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/contact`}
            className="btn"
          >
            Make Enquiry
          </a> */}
          <Link href="/enquiry" className="btn">
            {' '}
            Make Enquiry
          </Link>
        </nav>

        {/* Mobile Dropdown */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            {isMenuOpen ? (
              <Image src="/close.svg" alt="close menu" width={30} height={30} />
            ) : (
              <Image src="/menu.svg" alt="open menu" width={30} height={30} />
            )}
          </button>
        </div>
        <div
          className={`md:hidden fixed top-[95px] left-0 w-full bg-white text-center transition-opacity duration-300 ease-in-out ${
            isMenuOpen
              ? 'opacity-100 shadow-md'
              : 'opacity-0 pointer-events-none'
          }`}
        >
          <nav className="flex flex-col items-center space-y-4 p-4 font-medium">
            <Link
              href="/"
              className={`rounded-lg w-full ${
                isActive('/')
                  ? 'bg-secondary text-white'
                  : 'hover:bg-secondary hover:text-white'
              }`}
              onClick={handleNavClick}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`rounded-lg w-full ${
                isActive('/about')
                  ? 'bg-secondary text-white'
                  : 'hover:bg-secondary hover:text-white'
              }`}
              onClick={handleNavClick}
            >
              About
            </Link>
            <div className="relative services-dropdown w-full">
              <button
                className={`flex items-center justify-center w-full ${
                  isActive([
                    '/service-pages/ndis-service',
                    '/service-pages/social-service',
                    '/service-pages/nurse-service',
                  ])
                    ? 'bg-secondary text-white w-full rounded-lg'
                    : 'hover:bg-secondary hover:text-white w-full rounded-lg'
                }`}
                onClick={() =>
                  setIsServicesDropdownOpen(!isServicesDropdownOpen)
                }
              >
                Services
                <Image
                  src="/caret.svg"
                  alt="dropdown"
                  width={28}
                  height={28}
                  className={`ml-1 transition-transform duration-300 filter hover:invert ${
                    isServicesDropdownOpen ? 'rotate-0' : 'rotate-180'
                  }`}
                />
              </button>
              {isServicesDropdownOpen && (
                <div className="w-full bg-white border-2 rounded-lg shadow-sm z-50">
                  <Link
                    href="/service-pages/ndis-service"
                    onClick={() => {
                      handleNavClick()
                      setIsServicesDropdownOpen(false)
                    }}
                    className={`block px-4 py-1 border-b-2 border-secondary text-gray-800 ${
                      isActive('/service-pages/ndis-service')
                        ? 'bg-secondary text-white w-full rounded-t-lg'
                        : 'hover:bg-secondary hover:text-white w-full'
                    }`}
                  >
                    NDIS Services
                  </Link>
                  <Link
                    href="/service-pages/social-service"
                    onClick={() => {
                      handleNavClick()
                      setIsServicesDropdownOpen(false)
                    }}
                    className={`block px-4 py-1 text-gray-800 ${
                      isActive('/service-pages/social-service')
                        ? 'bg-secondary text-white w-full'
                        : 'hover:bg-secondary hover:text-white w-full'
                    }`}
                  >
                    Social Worker Services
                  </Link>
                  {/* <Link
                    href="/service-pages/nurse-service"
                    onClick={() => {
                      handleNavClick()
                      setIsServicesDropdownOpen(false)
                    }}
                    className={`block px-4 py-1 text-gray-800 ${
                      isActive('/service-pages/nurse-service')
                        ? 'bg-secondary text-white w-full rounded-b-lg'
                        : 'hover:bg-secondary hover:text-white w-full'
                    }`}
                  >
                    Nursing Services
                  </Link> */}
                </div>
              )}
            </div>
            {/* <Link
              href="/contact"
              className={`rounded-lg ${
                isActive('/contact')
                  ? 'bg-secondary text-white'
                  : 'hover:bg-secondary hover:text-white'
              }`}
              onClick={handleNavClick}
            >
              Contact
            </Link> */}
            {/* <a
              href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/contact`}
              className="btn"
              onClick={handleNavClick}
            >
              Make Enquiry
            </a> */}
            <Link
              href="/enquiry"
              onClick={() => {
                handleNavClick()
                setIsServicesDropdownOpen(false)
              }}
              className="btn"
            >
              Make Enquiry
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
