"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Zap, Clock, Users, Award, CheckCircle, Star, Target } from "lucide-react"

export default function Boxing() {
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
                  <span className="text-gradient">Boxing</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-lg">
                  Master the sweet science with our professional boxing training programs. Build strength, speed, and confidence through the art of boxing.
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
                  src="/gym/boxing.png"
                  alt="Boxing Training"
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
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Boxing Training?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Develop speed, power, and mental toughness through the art of boxing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Speed & Power",
                description: "Develop explosive speed and punching power through proper technique",
              },
              {
                icon: Clock,
                title: "Mental Focus",
                description: "Build mental toughness and strategic thinking skills",
              },
              {
                icon: Users,
                title: "All Skill Levels",
                description: "From beginners to advanced fighters, everyone is welcome",
              },
              {
                icon: Award,
                title: "Self Defense",
                description: "Learn practical self-defense skills and build confidence",
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
                <h2 className="text-4xl font-bold text-white mb-6">What's Included in Boxing Training?</h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Our boxing program combines traditional boxing techniques with modern fitness principles to build strength, speed, and mental toughness.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  "Basic boxing stance and footwork",
                  "Punching techniques and combinations",
                  "Defensive skills and head movement",
                  "Speed and agility training",
                  "Cardiovascular conditioning",
                  "Mental focus and discipline",
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
                    <div className="text-3xl font-bold text-white mb-2">2-3</div>
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
                    <div className="text-gray-300">Skill Levels</div>
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
            <h2 className="text-4xl font-bold text-white mb-4">Boxing Videos Coming Soon</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get ready for exclusive boxing training videos and tutorials to enhance your skills
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Basic Techniques",
                description: "Learn fundamental boxing stance and punches",
                icon: Target,
              },
              {
                title: "Advanced Combinations",
                description: "Master complex punch combinations and footwork",
                icon: Zap,
              },
              {
                title: "Defensive Skills",
                description: "Develop head movement and blocking techniques",
                icon: Award,
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
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Step into the Ring?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join our boxing program and discover the fighter within you.
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