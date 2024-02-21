"use client"
import Link from "next/link"
import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
  return (
    <html>
      <body>
        <div
          className="min-h-screen w-full flex flex-col justify-center items-center gap-3 text-white"
          id="global-error">
          <h2 className="text-2xl">Something went wrong!</h2>
          <p className="text-lg w-full md:w-2/3 lg:w-1/2 text-center">{error.message}</p>
          <div className="flex flex-row gap-4 justify-center items-center">
            <button className="text-lg" onClick={() => reset()}>
              Try again
            </button>
            <Link href="/" className="text-lg">
              Back to Home page
            </Link>
          </div>
        </div>
      </body>
    </html>
  )
}
