import React from 'react'

const Subscribe = () => {
  return (
    <main className="bg-white font-outfit">
      <section className="bg-primary min-h-screen pt-28">
        <div className="container mx-auto px-6 md:px-10 lg:px-20 pb-6">
          <h1 className="text-3xl md:text-5xl text-white font-semibold mb-6 text-center">
            Our Newsletter
          </h1>
          <p className="text-xl md:text-2xl text-white font-medium mb-6 text-justify md:text-center">
            Be part of a transformative journey with Tilak Raj Bhandari, a
            passionate leader dedicated to building a brighter future through
            selfless service and innovative leadership. Subscribe to our
            newsletter for inspiring updates, fresh ideas, and ways to
            contribute to a stronger, more equitable society. Let’s shape
            Nepal’s tomorrow together—sign up now and stay motivated!
          </p>
          <form action="" className="flex max-w-3xl mx-auto">
            <input
              type="email"
              id="email"
              placeholder="Enter your Email"
              className="w-full p-2 border border-gray-300 rounded-l-md focus:ring-secondary focus:border-secondary"
            />
            <button
              type="submit"
              className="bg-secondary text-white px-6 py-3 rounded-r-lg hover:bg-tertiary transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Subscribe
