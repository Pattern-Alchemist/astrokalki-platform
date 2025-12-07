'use client'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">🌟 AstroKalki 🌟</h1>
        <p className="text-xl mb-6">Comprehensive Astrology SaaS Platform</p>
        <p className="text-gray-600 mb-8">Coming Soon - Your Cosmic Journey Awaits</p>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="p-6 border rounded-lg">
            <h2 className="font-bold">Birth Chart Analysis</h2>
          </div>
          <div className="p-6 border rounded-lg">
            <h2 className="font-bold">Consultation Booking</h2>
          </div>
          <div className="p-6 border rounded-lg">
            <h2 className="font-bold">Personality Insights</h2>
          </div>
          <div className="p-6 border rounded-lg">
            <h2 className="font-bold">Daily Horoscope</h2>
          </div>
        </div>
      </div>
    </main>
  )
}
