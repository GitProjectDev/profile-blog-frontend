import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

async function fetchBlog(id) {
  try {
    const res = await fetch(`http://localhost:7004/api/blogs/${id}`, {
      cache: 'no-store',
    })
    const data = await res.json()
    if (!data.success) {
      return null
    }
    return data.blog
  } catch (error) {
    console.error('Error fetching blog:', error)
    return null
  }
}

export default async function page({ params }) {
  const blog = await fetchBlog(params.id)

  if (!blog) {
    notFound()
  }
  return (
    <div className="container mx-auto px-6 md:px-10 py-[107px] bg-primary">
      <h1 className="text-4xl font-bold text-white mb-4">{blog.title}</h1>
      <p className="text-white">By: Tilak Raj Bhandari</p>
      <p className="text-gray-200 mb-6">
        Published on: {new Date(blog.createdAt).toLocaleDateString()}
      </p>
      {blog.image && (
        <div className="relative w-full h-96 mb-6">
          <Image
            src={`http://localhost:7004${blog.image}`}
            alt={blog.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      )}
      <div
        className="prose max-w-none text-gray-100"
        dangerouslySetInnerHTML={{ __html: blog.description }}
      />
      <Link
        href="/blogs"
        className="text-secondary hover:underline mt-6 inline-block"
      >
        Back to Blogs
      </Link>
    </div>
  )
}
