"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Zap, Clock, Users, Award, CheckCircle, Star, Target } from "lucide-react"

export default function StrengthConditioning() {

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
                  <span className="text-gradient">Strength & Conditioning</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-lg">
                  Build explosive power, enhance athletic performance, and develop functional strength with our specialized strength and conditioning programs.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                 {/* <Link
                  href="/contact"
                > */}
                 
                {/* <button className="bg-gradient-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-glow transition-all duration-300 flex items-center justify-center group">
                  Book Free Trial
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button> */}
                {/* </Link> */}
                
              </div>
            </div>
            <div className="relative">
              <div className="relative floating">
                <Image
                  src="/gym/stre.png"
                  alt="Strength & Conditioning"
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
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Strength & Conditioning?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our specialized programs focus on building power, speed, and athletic performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Explosive Power",
                description: "Develop explosive strength and power for athletic performance",
              },
              {
                icon: Clock,
                title: "Performance Focused",
                description: "Training designed to enhance sports performance and movement efficiency",
              },
              {
                icon: Users,
                title: "Athlete Development",
                description: "Programs tailored for athletes at all levels and sports",
              },
              {
                icon: Award,
                title: "Injury Prevention",
                description: "Build resilience and prevent injuries through proper conditioning",
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

      {/* Program Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">What's Included in Strength & Conditioning?</h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Our strength and conditioning program combines traditional strength training with modern athletic development techniques to maximize performance.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  "Progressive strength training with compound movements",
                  "Plyometric and explosive power development",
                  "Speed and agility training",
                  "Core stability and functional movement patterns",
                  "Recovery and mobility work",
                  "Performance testing and progress tracking",
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
                {/* <button className="bg-gradient-to-r from-gray-500 to-gray-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center group">
                  Start Training Today
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button> */}
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
                    <div className="text-3xl font-bold text-white mb-2">3-4</div>
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
                    <div className="text-gray-300">Athlete Levels</div>
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
            <h2 className="text-4xl font-bold text-white mb-4">Training Videos Coming Soon</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get ready for exclusive strength and conditioning videos to enhance your athletic performance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Strength Training",
                description: "Master compound movements and progressive overload",
                icon: Zap,
              },
              {
                title: "Power Development",
                description: "Learn plyometric and explosive training techniques",
                icon: Target,
              },
              {
                title: "Athletic Performance",
                description: "Speed, agility, and sport-specific training",
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

      {/* Testimonials */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Athletes Say</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Hear from athletes who have improved their performance with our strength and conditioning programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Rodriguez",
                role: "Professional Athlete",
                content: "The strength and conditioning program at SLAM Fitness has taken my athletic performance to the next level. My power, speed, and endurance have all improved significantly.",
                rating: 5,
              },
              {
                name: "Maria Santos",
                role: "College Athlete",
                content: "Perfect for athletes looking to improve performance. The trainers understand the demands of competitive sports and design programs accordingly.",
                rating: 5,
              },
              {
                name: "David Kim",
                role: "Amateur Athlete",
                content: "I've seen incredible improvements in my strength and conditioning. The program is challenging but the results are worth every session.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-500 to-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Enhance Your Athletic Performance?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join our strength and conditioning program and take your athletic abilities to new heights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
           {/* <button className="bg-white text-gray-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center group">
              Start Free Trial
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button> */}
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