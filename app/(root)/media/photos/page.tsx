import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const revalidate = 60

async function fetchGalleries() {
  try {
    const res = await fetch('http://localhost:7004/api/galleries', {
      cache: 'no-store',
    })
    const data = await res.json()
    if (!data.success) {
      throw new Error('Failed to fetch galleries')
    }
    return data.galleries || []
  } catch (error) {
    console.error('Error fetching galleries:', error)
    return []
  }
}

export default async function page() {
  const galleries = await fetchGalleries()
  return (
    <div className="container mx-auto px-6 md:px-10 py-[107px] min-h-screen bg-primary">
      <h1 className="text-4xl font-bold text-black mb-8 text-center">Photos</h1>
      {galleries.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleries.map((gallery: any) => (
            <div
              key={gallery._id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative w-full h-64">
                <Image
                  src={`http://localhost:7004${gallery.imageUrl}`}
                  alt={gallery.title}
                  fill
                  className="object-cover rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-500">
                  Added on: {new Date(gallery.createdAt).toLocaleDateString()}
                </p>
                <div className="mx-auto text-center">
                  <Link
                    href={`/media/photos/${gallery._id}`}
                    className="btn mt-6 inline-block"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No photos available.</p>
      )}
    </div>
  )
}
