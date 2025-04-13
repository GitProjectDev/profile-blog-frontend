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
          ? 'bg-[#fff] shadow-md text-black'
          : 'bg-transparent text-white shadow-none'
      } `}
    >
      <div className="container mx-auto p-4 md:px-10 lg:px-20 flex justify-between items-center">
        <Link href="/" className="flex items-center" onClick={handleNavClick}>
          <Image
            src="/tilak.jpg"
            alt="logo"
            width={70}
            height={70}
            className="rounded-full size-12 md:size-17"
          />
          <span className="ml-2 text-xl md:text-2xl lg:text-3xl font-semibold">
            Tilak Raj Bhandari
          </span>
        </Link>
        <nav className="hidden lg:flex items-center space-x-2 lg:space-x-8 lg:text-xl font-normal">
          <Link
            href="/"
            className={`${
              isActive('/')
                ? 'text-secondary cursor-default'
                : 'hover:border-b-2 border-secondary'
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`${
              isActive('/about')
                ? 'text-secondary cursor-default'
                : 'hover:border-b-2 border-secondary'
            }`}
          >
            About
          </Link>
          <Link
            href="/blogs"
            className={`${
              isActive('/blogs')
                ? 'text-secondary cursor-default'
                : 'hover:border-b-2 border-secondary'
            }`}
          >
            Publications
          </Link>
          {/* <Link
            href="/publish"
            className={`${
              isActive('/publish')
                ? 'text-secondary cursor-default'
                : 'hover:border-b-2 border-secondary'
            }`}
          >
            Publications
          </Link> */}
          <div className="relative services-dropdown">
            <button
              onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
              className={`flex ${
                isActive(['/media/photos', '/media/videos'])
                  ? 'text-secondary hover:border-b-2 border-secondary'
                  : ' hover:border-b-2 border-secondary'
              }`}
            >
              Media
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
                  href="/media/photos"
                  onClick={handleNavClick}
                  className="block px-4 py-2  hover:bg-tertiary hover:rounded-t-md border-b-2 border-white"
                >
                  Photos
                </Link>
                <Link
                  href="/media/videos"
                  onClick={handleNavClick}
                  className="block px-4 py-2  hover:bg-tertiary hover:rounded-b-md"
                >
                  Videos/Interviews
                </Link>
              </div>
            )}
          </div>
          <Link
            href="/enquiry"
            className={`${
              isActive('/enquiry')
                ? 'text-secondary cursor-default'
                : 'hover:border-b-2 border-secondary'
            }`}
          >
            Contact
          </Link>
          {/* <a
            href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/contact`}
            className="btn"
          >
            Make Enquiry
          </a> */}
        </nav>
        <Link href="/subscribe" className="btn hidden lg:block">
          {' '}
          SUBSCRIBE
        </Link>

        {/* Mobile Dropdown */}
        <div className="lg:hidden">
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
          className={`lg:hidden fixed top-[80px] left-0 w-full bg-white text-center transition-opacity duration-300 ease-in-out ${
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
            <Link
              href="/blogs"
              className={`rounded-lg w-full ${
                isActive('/blogs')
                  ? 'bg-secondary text-white'
                  : 'hover:bg-secondary hover:text-white'
              }`}
              onClick={handleNavClick}
            >
              Publications
            </Link>
            {/* <Link
              href="/publish"
              className={`flex items-center justify-center w-full ${
                isActive('/publish')
                  ? 'bg-secondary text-white w-full rounded-lg'
                  : 'hover:bg-secondary hover:text-white w-full rounded-lg'
              }`}
              onClick={handleNavClick}
            >
              Publications
            </Link> */}
            <div className="relative services-dropdown w-full">
              <button
                className={`flex items-center justify-center w-full ${
                  isActive(['/media/photos', '/media/videos'])
                    ? 'bg-secondary text-white w-full rounded-lg'
                    : 'hover:bg-secondary hover:text-white w-full rounded-lg'
                }`}
                onClick={() =>
                  setIsServicesDropdownOpen(!isServicesDropdownOpen)
                }
              >
                Media
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
                    href="/media/photos"
                    onClick={() => {
                      handleNavClick()
                      setIsServicesDropdownOpen(false)
                    }}
                    className={`block px-4 py-1 border-b-2 border-secondary text-gray-800 ${
                      isActive('/media/photos')
                        ? 'bg-secondary text-white w-full rounded-t-lg'
                        : 'hover:bg-secondary hover:text-white w-full'
                    }`}
                  >
                    Photos
                  </Link>
                  <Link
                    href="/media/videos"
                    onClick={() => {
                      handleNavClick()
                      setIsServicesDropdownOpen(false)
                    }}
                    className={`block px-4 py-1 text-gray-800 ${
                      isActive('/media/videos')
                        ? 'bg-secondary text-white w-full'
                        : 'hover:bg-secondary hover:text-white w-full'
                    }`}
                  >
                    Videos/Interviews
                  </Link>
                </div>
              )}
            </div>
            <Link
              href="/enquiry"
              className={`rounded-lg ${
                isActive('/enquiry')
                  ? 'bg-secondary text-white w-full rounded-lg'
                  : 'hover:bg-secondary hover:text-white w-full rounded-lg'
              }`}
              onClick={handleNavClick}
            >
              Contact
            </Link>
            {/* <a
              href={`${process.env.NEXT_PUBLIC_BACKEND_URL}/contact`}
              className="btn"
              onClick={handleNavClick}
            >
              Make Enquiry
            </a> */}
            <Link
              href="/subscribe"
              onClick={() => {
                handleNavClick()
                setIsServicesDropdownOpen(false)
              }}
              className="btn w-full"
            >
              SUBSCRIBE
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
