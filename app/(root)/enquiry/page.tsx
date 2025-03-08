'use client'
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'

const Enquiry = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [contact, setContact] = useState('')
  const [message, setMessage] = useState('')
  const [aboutUS, setAboutUS] = useState('Facebook')
  // const [consent, setConsent] = useState(false)
  const [messageSent, setMessageSent] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/contact/send`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            address,
            contact,
            message,
            aboutUS,
            // consent,
          }),
        }
      )

      if (!response.ok) {
        const result = await response.json()
        throw new Error(result.error || 'Network response was not ok')
      }

      const result = await response.json()
      setMessageSent(result.message || 'Message sent successfully!')
      setError(null)

      //Reset form
      setName('')
      setEmail('')
      setAddress('')
      setContact('')
      setMessage('')
      setAboutUS('Facebook')
      // setConsent(false)
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message || 'Error sending message')
      } else {
        setError('Error sending message')
      }
      setMessageSent(null)
    }
  }
  return (
    <main className="bg-white font-outfit">
      <section className="relative min-h-screen flex items-center border-t-[107px] md:border-0 border-transparent">
        <div className="container mx-auto px-6 lg:px-20 gap-10 flex flex-col items-center md:flex-row relative">
          <div className="md:w-1/2 ">
            <Image
              src="/enquiry-back.jpg"
              alt="enquiry"
              width={700}
              height={700}
              className="rounded-3xl"
            />
          </div>
          <div className="md:w-1/2 z-10">
            <h2 className="text-2xl md:text-4xl lg:text-6xl font-medium mb-4">
              We&apos;re Here to Support You
            </h2>
            <p className="text-base md:text-lg lg:text-xl mb-8">
              Whether you&apos;re looking into NDIS-funded services, need
              assistance navigating your options, or have specific questions
              about how we can help, our team is always ready to assist you.
              Reach out to us anytime!
            </p>
          </div>
        </div>
      </section>
      <section className="bg-secondary py-6">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl text-white font-bold mb-6 text-center">
            Make an Enquiry
          </h1>
          <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto bg-white p-6 rounded-lg  shadow-md"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block  font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary"
                  required
                />
              </div>
              <div>
                <label htmlFor="contact" className="block  font-medium mb-1">
                  Contact Number
                </label>
                <input
                  type="tel"
                  id="contact"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block  font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block  font-medium mb-1">
                Address
              </label>
              <textarea
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary h-16 resize-none"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="aboutUS" className="block  font-medium mb-1">
                  How did you hear about us?
                </label>
                <select
                  id="aboutUS"
                  value={aboutUS}
                  onChange={(e) => setAboutUS(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary"
                >
                  {[
                    'Facebook',
                    'Instagram',
                    'LinkedIn',
                    'YouTube',
                    'Google Search',
                    'External Website',
                    'Radio',
                    'Word of Mouth',
                    'Clickability',
                    'NDIS Website',
                    'Referral',
                    'Other',
                  ].map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block  font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary h-32 resize-none"
                required
              />
            </div>
            <div className="mb-4">
              <label className="inline-flex items-center">
                {/* <input
                  type="checkbox"
                  className="form-checkbox text-secondary"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.value === 'true')}
                  required
                /> */}
                <span className="ml-2">
                  By clicking submit you consent to sharing your details.
                </span>
              </label>
            </div>
            {messageSent && (
              <p className="text-green-600 mb-4">{messageSent}</p>
            )}
            {error && <p className="text-red-600 mb-4">{error}</p>}
            <div className="text-center">
              <button
                type="submit"
                className="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-tertiary transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Enquiry
