import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

async function fetchVideo(id: string) {
  try {
    console.log(`Fetching video with ID: ${id}`)
    const res = await fetch(`http://localhost:7004/api/videos/${id}`, {
      cache: 'no-store',
    })
    if (!res.ok) {
      console.error(`HTTP error! Status: ${res.status}`)
      return null
    }
    const data = await res.json()
    console.log('API response:', data)
    if (!data.success) {
      console.error('API returned unsuccessful response:', data.message)
      return null
    }
    return data.video
  } catch (error) {
    console.error('Error fetching video:', error)
    return null
  }
}

export default async function page({ params }: { params: { id: string } }) {
  const video = await fetchVideo(params.id)

  if (!video) {
    notFound()
  }

  return (
    <div className="container mx-auto px-6 md:px-10 py-[107px] min-h-screen bg-primary">
      <h1 className="text-4xl font-bold text-black mb-4">{video.title}</h1>
      <p className="text-gray-500 mb-6">
        Published on: {new Date(video.createdAt).toLocaleDateString()}
      </p>
      {video.embedUrl && video.embedUrl.includes('youtube.com/embed') ? (
        <div className="relative w-full h-0 pb-[56.25%] mb-6">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg"
            src={video.embedUrl}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <p className="text-red-600 mb-6">Invalid or missing video URL</p>
      )}
      {video.description && (
        <div className="prose max-w-none text-gray-800 mb-6">
          <p>{video.description}</p>
        </div>
      )}
      <Link href="/media/videos" className="btn mt-6 inline-block">
        Back to Videos
      </Link>
    </div>
  )
}
