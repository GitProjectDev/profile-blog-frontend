import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

async function fetchGallery(id: string) {
  try {
    const res = await fetch(`http://localhost:7004/api/galleries/${id}`, {
      cache: 'no-store',
    })
    const data = await res.json()
    if (!data.success) {
      return null
    }
    return data.gallery
  } catch (error) {
    console.error('Error fetching gallery:', error)
    return null
  }
}

export default async function page({ params }: { params: { id: string } }) {
  const gallery = await fetchGallery(params.id)

  if (!gallery) {
    notFound()
  }

  return (
    <div className="container mx-auto px-6 md:px-10 py-[107px] min-h-screen bg-primary">
      <h1 className="text-4xl font-bold text-white mb-4">{gallery.title}</h1>
      <p className="text-gray-200 mb-6">
        Added on: {new Date(gallery.createdAt).toLocaleDateString()}
      </p>
      <div className="relative w-full h-[500px] mb-6">
        <Image
          src={`http://localhost:7004${gallery.imageUrl}`}
          alt={gallery.title}
          fill
          className="object-contain rounded-lg"
        />
      </div>
      {gallery.description && (
        <div className="prose max-w-none text-center text-gray-100 mb-6">
          <p>{gallery.description}</p>
        </div>
      )}
      <div className="mx-auto text-center">
        <Link href="/media/photos" className="btn mt-6 inline-block">
          Back to Photos
        </Link>
      </div>
    </div>
  )
}
