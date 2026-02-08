'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { Home, Phone, RefreshCcw, Wrench } from 'lucide-react'
import { CONTACT } from '@/utils/contact'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <div className="text-9xl font-bold text-gray-200" aria-hidden="true">500</div>
          <h1 className="text-3xl font-bold text-gray-900 mt-4">Something Went Wrong</h1>
          <p className="text-lg text-gray-600 mt-4">
            We ran into an unexpected issue. Please try again, or contact us directly for immediate assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
          <button
            onClick={reset}
            className="flex items-center justify-center gap-3 bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
          >
            <RefreshCcw className="w-5 h-5" />
            <span className="font-semibold">Try Again</span>
          </button>

          <Link
            href="/"
            className="flex items-center justify-center gap-3 bg-gray-800 text-white px-6 py-4 rounded-lg hover:bg-gray-900 transition-colors"
          >
            <Home className="w-5 h-5" />
            <span className="font-semibold">Go Home</span>
          </Link>

          <Link
            href="/services"
            className="flex items-center justify-center gap-3 bg-gray-100 text-gray-900 px-6 py-4 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <Wrench className="w-5 h-5" />
            <span className="font-semibold">View Services</span>
          </Link>

          <a
            href={`tel:${CONTACT.PHONE}`}
            className="flex items-center justify-center gap-3 bg-gray-100 text-gray-900 px-6 py-4 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span className="font-semibold">Call {CONTACT.PHONE_DISPLAY}</span>
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            Need emergency locksmith services?{' '}
            <a href={`tel:${CONTACT.PHONE}`} className="text-blue-600 hover:underline">
              Call {CONTACT.PHONE_DISPLAY}
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
