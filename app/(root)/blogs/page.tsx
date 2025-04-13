import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const revalidate = 60

async function fetchBlogs() {
  try {
    const res = await fetch('http://localhost:7004/api/blogs', {
      cache: 'no-store',
    })
    const data = await res.json()
    if (!data.success) {
      throw new Error('Failed to fetch blogs')
    }
    return data.blogs || []
  } catch (error) {
    console.error('Error fetching blogs:', error)
    return []
  }
}

export default async function page() {
  const blogs = await fetchBlogs()
  return (
    <div className="container mx-auto px-6 md:px-10 py-[107px] min-h-screen bg-primary">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center tracking-tight">
        Publications
      </h1>
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Blog List */}
        <div className="lg:w-2/3">
          {blogs.length > 0 ? (
            <div className="grid grid-cols-1 gap-8">
              {blogs.map((blog: any) => (
                <div
                  key={blog._id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 border border-gray-100"
                >
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                    {blog.title}
                  </h2>
                  {blog.summary && (
                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                      {blog.summary}
                    </p>
                  )}
                  <p className="text-sm text-gray-500 mb-4">
                    Published on:{' '}
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </p>
                  <Link
                    href={`/blogs/${blog._id}`}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-200"
                  >
                    Read More
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600 text-lg">
              No articles available.
            </p>
          )}
        </div>

        {/* Book Cover Sidebar */}
        <div className="lg:w-1/3 flex justify-center lg:justify-end">
          <div className="lg:sticky lg:top-16 max-w-sm">
            <div className="relative group">
              <Image
                src="/janyuddhako-hastakshar.jpg"
                alt="Book Cover: Janyuddhako Hastakshar by Tilak Raj Bhandari"
                width={300}
                height={450}
                className="mx-auto rounded-xl shadow-lg "
              />
            </div>
            <h3 className="text-center text-lg text-gray-800 mt-6 font-semibold tracking-wide">
              Janyuddhako Hastakshar by Tilak Raj Bhandari
            </h3>
            <p className="text-center text-sm text-white mt-2 mb-4">
              Featured in:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Link
                href="https://www.ratopati.com/story/169631/2021/2/27/book-part-"
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm hover:bg-blue-200 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ratopati
              </Link>
              <Link
                href="https://nepalkhabar.com/society/51515-2021-03-01-11-56-55"
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm hover:bg-blue-200 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nepalkhabar
              </Link>
              <Link
                href="https://www.diyopost.com/03/86109/"
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm hover:bg-blue-200 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Diyopost
              </Link>
              <Link
                href="https://rajdhanidaily.com/id/36037/"
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm hover:bg-blue-200 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rajdhani
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
