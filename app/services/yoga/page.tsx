"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Zap, Clock, Users, Award, CheckCircle, Star, Target } from "lucide-react"

export default function Yoga() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-dark opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  <span className="text-gradient">Yoga</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-lg">
                  Find balance, flexibility, and inner peace with our comprehensive yoga programs. Transform your mind, body, and spirit through ancient wisdom.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-glow transition-all duration-300 flex items-center justify-center group">
                  Book Free Trial
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative floating">
                <Image
                  src="/gym/yoga.png"
                  alt="Yoga Practice"
                  width={600}
                  height={600}
                  className="rounded-2xl shadow-2xl hover:shadow-glow hover:scale-105 transition-all duration-500"
                />
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-red-500/20 rounded-full pulse-element"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-red-600/30 rounded-full floating"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Yoga?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the transformative power of yoga for mind, body, and spirit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Flexibility & Strength",
                description: "Improve flexibility, build strength, and enhance posture",
              },
              {
                icon: Clock,
                title: "Stress Relief",
                description: "Reduce stress and anxiety through mindful practice",
              },
              {
                icon: Users,
                title: "All Levels Welcome",
                description: "From beginners to advanced practitioners",
              },
              {
                icon: Award,
                title: "Mind-Body Connection",
                description: "Develop awareness and inner peace",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700 hover:shadow-2xl hover:shadow-gray-500/20 transition-all duration-500 hover:scale-105 hover:-translate-y-2 group cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-gray-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 relative">
                  <feature.icon className="w-8 h-8 text-white group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">What's Included in Yoga Training?</h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Our yoga program combines physical postures, breathing techniques, and meditation to promote holistic wellness and inner peace.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  "Hatha yoga for physical strength and flexibility",
                  "Pranayama breathing techniques",
                  "Meditation and mindfulness practices",
                  "Stress relief and relaxation techniques",
                  "Balance and core strengthening",
                  "Spiritual growth and self-awareness",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-200 text-lg">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-gray-500 to-gray-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center group">
                  Start Training Today
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center"
                >
                  Get Free Consultation
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-gray-500 to-gray-600 rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold text-white mb-2">2-4</div>
                    <div className="text-gray-200">Sessions per Week</div>
                  </div>
                  <div className="bg-gray-800 rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold text-white mb-2">60-90</div>
                    <div className="text-gray-300">Minutes per Session</div>
                  </div>
                </div>
                <div className="space-y-6 mt-12">
                  <div className="bg-gray-800 rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold text-white mb-2">All</div>
                    <div className="text-gray-300">Experience Levels</div>
                  </div>
                  <div className="bg-gradient-to-r from-gray-500 to-gray-600 rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold text-white mb-2">24/7</div>
                    <div className="text-gray-200">Access Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Coming Soon Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Yoga Videos Coming Soon</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get ready for exclusive yoga videos and guided meditation sessions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Beginner Poses",
                description: "Learn fundamental yoga postures and alignment",
                icon: Target,
              },
              {
                title: "Meditation Guide",
                description: "Guided meditation and mindfulness practices",
                icon: Award,
              },
              {
                title: "Advanced Flow",
                description: "Dynamic sequences for experienced practitioners",
                icon: Zap,
              },
            ].map((video, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700 hover:shadow-2xl hover:shadow-gray-500/20 transition-all duration-500 hover:scale-105 group cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-gray-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <video.icon className="w-8 h-8 text-white group-hover:animate-pulse" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gray-300 transition-colors duration-300">
                    {video.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {video.description}
                  </p>
                  <div className="mt-6 text-gray-400 font-semibold">
                    Coming Soon
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-500 to-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Begin Your Yoga Journey?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join our yoga community and discover inner peace and physical wellness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center group">
              Start Free Trial
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-gray-600 transition-all duration-300 flex items-center justify-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 