"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Music, Users, Heart, Zap, Clock, Target } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function ZumbaPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      )

      // Content animations
      gsap.fromTo(
        contentRef.current?.querySelectorAll(".animate-on-scroll"),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // Features animation
      gsap.fromTo(
        featuresRef.current?.querySelectorAll(".feature-card"),
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: featuresRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )

      // CTA animation
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-purple-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,0,0.1),transparent_50%)]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                    Zumba
                  </span>
                  <br />
                  <span className="text-white">Dance Fitness</span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Experience the ultimate dance fitness workout that combines Latin rhythms with international music to create a dynamic, exciting, and effective fitness program.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center space-x-2 text-red-400">
                  <Music className="w-5 h-5" />
                  <span className="text-sm font-medium">Latin Rhythms</span>
                </div>
                <div className="flex items-center space-x-2 text-red-400">
                  <Users className="w-5 h-5" />
                  <span className="text-sm font-medium">Group Energy</span>
                </div>
                <div className="flex items-center space-x-2 text-red-400">
                  <Heart className="w-5 h-5" />
                  <span className="text-sm font-medium">Cardio Boost</span>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
              <Image
                src="/gym/zumba.webp"
                alt="Zumba Dance Fitness"
                width={800}
                height={800}
                className="rounded-3xl shadow-2xl hero-image w-full h-auto group-hover:scale-110 transition-transform duration-700 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section ref={contentRef} className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-on-scroll">
              <h2 className="text-4xl font-bold text-white">
                Dance Your Way to Fitness
              </h2>
              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  Zumba is more than just a workout - it's a celebration of movement, music, and community. Our certified Zumba instructors will guide you through high-energy dance routines that feel like a party while burning calories and toning your body.
                </p>
                <p className="text-lg leading-relaxed">
                  Whether you're a seasoned dancer or have two left feet, our Zumba classes are designed for all fitness levels. The infectious Latin rhythms and international music will keep you moving and motivated throughout the entire session.
                </p>
              </div>
            </div>
            
            <div className="space-y-6 animate-on-scroll">
              <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700">
                <h3 className="text-2xl font-bold text-white mb-6">What You'll Experience</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Music className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Latin & International Music</h4>
                      <p className="text-gray-400 text-sm">Salsa, Merengue, Reggaeton, and more</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">High-Energy Workouts</h4>
                      <p className="text-gray-400 text-sm">Cardio, strength, and flexibility training</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Community Atmosphere</h4>
                      <p className="text-gray-400 text-sm">Fun, supportive, and inclusive environment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose Zumba?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the unique benefits that make Zumba one of the most popular fitness programs worldwide.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature-card bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-red-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cardiovascular Health</h3>
              <p className="text-gray-300 leading-relaxed">
                Improve your heart health with high-energy dance routines that get your heart pumping and blood flowing.
              </p>
            </div>
            
            <div className="feature-card bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-red-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Full Body Toning</h3>
              <p className="text-gray-300 leading-relaxed">
                Target all major muscle groups through dynamic movements that tone your arms, legs, core, and glutes.
              </p>
            </div>
            
            <div className="feature-card bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-red-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Calorie Burn</h3>
              <p className="text-gray-300 leading-relaxed">
                Burn up to 600-1000 calories per session while having fun and enjoying the music.
              </p>
            </div>
            
            <div className="feature-card bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-red-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Music className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Stress Relief</h3>
              <p className="text-gray-300 leading-relaxed">
                Release endorphins and reduce stress through the joy of dance and music therapy.
              </p>
            </div>
            
            <div className="feature-card bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-red-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Social Connection</h3>
              <p className="text-gray-300 leading-relaxed">
                Build friendships and connect with like-minded individuals in a fun, supportive environment.
              </p>
            </div>
            
            <div className="feature-card bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-red-500/50 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Time Flies</h3>
              <p className="text-gray-300 leading-relaxed">
                Enjoy workouts that feel like minutes, not hours, thanks to engaging music and choreography.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 bg-gradient-to-r from-red-900/20 via-purple-900/20 to-red-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Dance Your Way to Fitness?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join our Zumba community and experience the most fun and effective dance fitness program. No dance experience required - just bring your energy and enthusiasm!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-glow transition-all duration-300 transform hover:scale-105"
            >
              Start Your Zumba Journey
            </a>
            <a
              href="/services"
              className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-full font-semibold hover:border-red-500 hover:text-red-500 transition-all duration-300"
            >
              Explore Other Services
            </a>
          </div>
        </div>
      </section>
    </div>
  )
} 