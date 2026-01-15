"use client"

import { useState, useEffect } from "react"

export default function MaintenancePage() {
  const [requestId, setRequestId] = useState("—")
  const [timestamp, setTimestamp] = useState("—")
  const [countdown, setCountdown] = useState(30)
  const [serverLocation, setServerLocation] = useState("—")

  useEffect(() => {
    const locations = [
      "San Francisco",
      "New York",
      "London",
      "Tokyo",
      "Singapore",
      "Mumbai",
      "Sydney",
      "Frankfurt",
      "Chicago",
      "Amsterdam",
    ]
    setServerLocation(locations[Math.floor(Math.random() * locations.length)])

    // Generate request ID (hex format like Cloudflare)
    const chars = "0123456789abcdef"
    let id = ""
    for (let i = 0; i < 16; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    setRequestId(id)

    const updateTimestamp = () => {
      const now = new Date()
      const formatted = now.toISOString().replace("T", " ").split(".")[0] + " UTC"
      setTimestamp(formatted)
    }

    updateTimestamp()
    const timestampInterval = setInterval(updateTimestamp, 1000)

    // Countdown timer
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          window.location.reload()
          return 30
        }
        return prev - 1
      })
    }, 1000)

    return () => {
      clearInterval(interval)
      clearInterval(timestampInterval)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="border-b border-gray-200 px-6 py-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl text-gray-600 font-light">
            Error 500
            <span className="text-sm font-mono text-gray-500 ml-4">
              Ray ID: {requestId} • {timestamp}
            </span>
          </h1>
          <p className="text-xl text-gray-500 mt-1">Internal server error</p>
        </div>
      </header>

      {/* Status Diagram Section */}
      <section className="bg-gray-100 py-10 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center gap-2 sm:gap-4">
            {/* Browser */}
            <div className="flex flex-col items-center">
              <div className="relative">
                <svg className="w-16 h-16 sm:w-20 sm:h-20 text-gray-400" viewBox="0 0 80 80" fill="currentColor">
                  <rect x="8" y="12" width="64" height="48" rx="4" fill="currentColor" />
                  <rect x="12" y="24" width="56" height="32" fill="#e5e7eb" />
                  <circle cx="16" cy="18" r="2" fill="#e5e7eb" />
                  <circle cx="24" cy="18" r="2" fill="#e5e7eb" />
                  <circle cx="32" cy="18" r="2" fill="#e5e7eb" />
                </svg>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-3">{serverLocation}</p>
              <p className="text-base text-gray-600 font-medium">Browser</p>
              <p className="text-sm text-green-600">Working</p>
            </div>

            {/* Arrow */}
            <div className="flex items-center text-gray-400 pb-12">
              <svg
                className="w-10 h-6 sm:w-14 sm:h-8"
                viewBox="0 0 60 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M0 12h50M44 6l6 6-6 6" />
              </svg>
            </div>

            <div className="flex flex-col items-center">
              <div className="relative">
                <svg className="w-16 h-16 sm:w-20 sm:h-20 text-gray-400" viewBox="0 0 80 80" fill="currentColor">
                  <path d="M64 44c0-2.2-.4-4.3-1.2-6.2C62.9 26.8 54.4 18 44 18c-8.2 0-15.3 5-18.3 12.1C24.5 30 23.3 30 22 30c-7.7 0-14 6.3-14 14s6.3 14 14 14h40c6.6 0 12-5.4 12-12 0-.7-.1-1.3-.2-2z" />
                </svg>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-3">Chicago</p>
              <p className="text-base text-gray-600 font-medium">Cloudflare</p>
              <p className="text-sm text-red-600">Error</p>
            </div>

            {/* Arrow */}
            <div className="flex items-center text-gray-400 pb-12">
              <svg
                className="w-10 h-6 sm:w-14 sm:h-8"
                viewBox="0 0 60 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M0 12h50M44 6l6 6-6 6" />
              </svg>
            </div>

            <div className="flex flex-col items-center">
              <div className="relative">
                <svg className="w-16 h-16 sm:w-20 sm:h-20 text-gray-400" viewBox="0 0 80 80" fill="currentColor">
                  <rect x="16" y="20" width="48" height="12" rx="2" />
                  <rect x="16" y="36" width="48" height="12" rx="2" />
                  <rect x="16" y="52" width="48" height="12" rx="2" />
                  <circle cx="24" cy="26" r="2" fill="#e5e7eb" />
                  <circle cx="24" cy="42" r="2" fill="#e5e7eb" />
                  <circle cx="24" cy="58" r="2" fill="#e5e7eb" />
                </svg>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-3">www.fb.com</p>
              <p className="text-base text-gray-600 font-medium">Host</p>
              <p className="text-sm text-green-600">Working</p>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl text-gray-700 font-medium mb-2">What happened?</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              The web server is currently undergoing scheduled maintenance. Our team is working to restore service as
              quickly as possible.
            </p>
          </div>
          <div>
            <h2 className="text-xl text-gray-700 font-medium mb-2">What can I do?</h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Please try again in a few minutes. This page will automatically refresh in{" "}
              <span className="font-semibold">{countdown}</span> seconds.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-gray-700 text-white text-sm rounded hover:bg-gray-600 transition-colors cursor-pointer"
            >
              Retry Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-6 px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-4">
          <a
            href="https://github.com/naemazam/Fake-Maintenance-Page"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm">GitHub</span>
          </a>
          <span className="text-gray-400">•</span>
          <a
            href="https://x.com/naemazamchow"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <span className="text-sm">Twitter</span>
          </a>
        </div>
      </footer>
    </div>
  )
}
