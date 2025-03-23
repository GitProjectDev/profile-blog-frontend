'use client'
// import Image from 'next/image'
import React from 'react'
import { useState } from 'react'

const Enquiry = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [contact, setContact] = useState('')
  const [message, setMessage] = useState('')
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
            subject,
            contact,
            message,
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
      setSubject('')
      setContact('')
      setMessage('')
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
      <section className="bg-primary min-h-screen pt-28">
        <div className="container mx-auto px-6 pb-6">
          <h1 className="text-3xl md:text-5xl text-white font-semibold mb-6 text-center">
            Leave a Message
          </h1>
          <form
            onSubmit={handleSubmit}
            className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-md"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
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
                <div className="mt-2">
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
                <div className="mt-2">
                  <label htmlFor="subject" className="block  font-medium mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary"
                    required
                  />
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
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-secondary focus:border-secondary h-full resize-none"
                  required
                />
              </div>
            </div>

            <div className="my-4">
              <span>
                By clicking submit you consent to sharing your details.
              </span>
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
        {/* <div className="absolute inset-0">
          <Image
            src="/profile-back.jpg"
            alt="contact pic"
            fill
            objectFit="cover"
            className="z-0 h-screen"
          />
        </div> */}
      </section>
    </main>
  )
}

export default Enquiry
