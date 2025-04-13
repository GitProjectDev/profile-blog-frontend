import React from 'react'
import Link from 'next/link'

export const revalidate = 60

async function fetchVideos() {
  try {
    console.log('Fetching all videos')
    const res = await fetch('http://localhost:7004/api/videos', {
      cache: 'no-store',
    })
    if (!res.ok) {
      console.error(`HTTP error! Status: ${res.status}`)
      return []
    }
    const data = await res.json()
    console.log('Videos API response:', data)
    if (!data.success) {
      console.error('API returned unsuccessful response:', data.message)
      return []
    }
    return data.videos || []
  } catch (error) {
    console.error('Error fetching videos:', error)
    return []
  }
}

export default async function page() {
  const videos = await fetchVideos()

  return (
    <div className="container mx-auto px-6 md:px-10 py-[107px] min-h-screen bg-primary">
      <h1 className="text-4xl font-bold text-black mb-8 text-center">
        Videos/Interviews
      </h1>
      {videos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video: any) => (
            <div
              key={video._id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              {video.embedUrl &&
              video.embedUrl.includes('youtube.com/embed') ? (
                <div className="relative w-full h-0 pb-[56.25%] mb-4">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-t-lg"
                    src={video.embedUrl}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                <p className="text-red-600 p-4">Invalid or missing video URL</p>
              )}
              <div className="p-4">
                <h2 className="text-lg font-semibold text-black mb-2">
                  {video.title}
                </h2>
                {video.description && (
                  <p className="text-gray-600 mb-2 line-clamp-2">
                    {video.description}
                  </p>
                )}
                <p className="text-sm text-gray-500">
                  Published on: {new Date(video.createdAt).toLocaleDateString()}
                </p>
                <div className="mx-auto text-center">
                  <Link
                    href={`/media/videos/${video._id}`}
                    className="btn mt-2 inline-block"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No videos available.</p>
      )}
    </div>
  )
}
