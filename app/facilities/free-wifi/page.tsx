"use client"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import {
  ArrowLeft,
  Wifi,
  Clock,
  Users,
  Star,
  CheckCircle,
  Sparkles,
  Zap,
  Heart,
  Signal,
} from "lucide-react"
import { useGSAP } from "../../../lib/useGSAP"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function FreeWifi() {
  const scope = useGSAP()
  const heroRef = useRef(null)

  useGSAP(() => {
    gsap.set(".hero-title", { y: 100, opacity: 0 })
    gsap.set(".hero-subtitle", { y: 50, opacity: 0 })
    gsap.set(".hero-image", { scale: 0.8, opacity: 0, rotation: -5 })
    gsap.set(".floating", { y: 20, opacity: 0 })
    gsap.set(".pulse-element", { scale: 0.8, opacity: 0 })

    const heroTl = gsap.timeline({ delay: 0.5 })

    heroTl
      .to(".hero-title", {
        duration: 1.2,
        y: 0,
        opacity: 1,
        ease: "power4.out",
        stagger: 0.2,
      })
      .to(".hero-subtitle", {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: "power3.out",
      }, "-=0.8")
      .to(".hero-image", {
        duration: 1.5,
        scale: 1,
        opacity: 1,
        rotation: 0,
        ease: "elastic.out(1, 0.5)",
      }, "-=1")
      .to(".floating", {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: "power3.out",
        stagger: 0.2,
      }, "-=0.8")
      .to(".pulse-element", {
        duration: 1,
        scale: 1,
        opacity: 1,
        ease: "elastic.out(1, 0.3)",
        stagger: 0.3,
      }, "-=0.6")

    gsap.to(".floating", {
      y: -20,
      duration: 3,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.5,
    })

    gsap.to(".pulse-element", {
      scale: 1.1,
      duration: 2,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.3,
    })
  }, [])

  return (
    <div ref={scope} className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black overflow-x-hidden relative">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-gray-500/20 to-gray-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-gray-600/20 to-gray-700/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-gray-400/20 to-gray-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <section ref={heroRef} className="relative pt-24 pb-16 overflow-hidden hero-section min-h-screen flex items-center">
        <div className="absolute inset-0">
          <div className="absolute top-25 right-4 md:right-40 w-20 h-20 md:w-32 md:h-32 bg-gradient-to-br from-gray-600/30 to-gray-700/30 rounded-3xl floating backdrop-blur-xl border border-white/10 shadow-2xl">
            <Wifi className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-16 md:h-16 text-gray-400" />
          </div>
          <div className="absolute top-1/2 right-2 md:right-20 w-18 h-18 md:w-24 md:h-24 bg-gradient-to-br from-gray-500/30 to-gray-600/30 rounded-3xl floating backdrop-blur-xl border border-white/10 shadow-2xl">
            <Signal className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 text-gray-400" />
          </div>
          <div className="absolute bottom-40 right-1/3 w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br from-gray-400/30 to-gray-600/30 rounded-3xl floating pulse-element backdrop-blur-xl border border-white/10 shadow-2xl">
            <Sparkles className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-7 h-7 md:w-10 md:h-10 text-gray-400" />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8 lg:space-y-12 text-center lg:text-left max-w-2xl lg:max-w-none mx-auto lg:mx-0">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-gray-500/10 backdrop-blur-sm border border-gray-500/20 rounded-full px-6 py-3 mb-8">
                  <Wifi className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-300 font-medium">Free Service</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
                  <span className="hero-title block">High-Speed</span>
                  <span className="text-gradient hero-title block bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent bg-size-200 animate-gradient-x">
                    Free WiFi
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 hero-subtitle leading-relaxed">
                  Stay connected with complimentary high-speed internet throughout our facility. 
                  <span className="text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text font-semibold">
                    Work, stream, or stay social
                  </span> while you work out.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 hero-buttons justify-center lg:justify-start">
                <button className="group relative bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] transition-all duration-500 flex items-center justify-center animated-button hover:scale-110 hover:-translate-y-2 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative z-10">Connect Now</span>
                  <ArrowLeft className="ml-3 group-hover:-translate-x-2 transition-transform duration-300 relative z-10" />
                </button>
                <button className="group border-2 border-white/30 backdrop-blur-sm text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-black transition-all duration-500 flex items-center justify-center animated-button hover:scale-110 hover:-translate-y-2">
                  <Clock className="mr-3 group-hover:scale-125 transition-transform duration-300" />
                  Network Info
                </button>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-8 lg:space-x-12 text-white hero-stats">
                <div className="flex items-center space-x-3 group cursor-pointer">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-current w-5 h-5 group-hover:scale-125 transition-transform duration-300" style={{ animationDelay: `${i * 0.1}s` }} />
                    ))}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold stat-number text-lg leading-none">4.9</span>
                    <span className="text-gray-300 text-sm leading-tight">(200+ reviews)</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3 group cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 flex-shrink-0">
                    <Signal className="text-white w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold stat-number text-lg leading-none">100Mbps</span>
                    <span className="text-gray-300 text-sm leading-tight">Speed</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative order-first lg:order-last flex justify-center lg:justify-end">
              <div className="relative z-10 group">
                <div className="relative overflow-hidden rounded-3xl">
                  {/* <Image
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Free WiFi"
                    width={700}
                    height={700}
                    className="rounded-3xl shadow-2xl hero-image w-full h-auto group-hover:scale-110 transition-transform duration-700"
                  /> */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-3xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-500/20 to-gray-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                </div>
              </div>

              <div className="absolute -top-8 -right-8 w-64 h-64 md:w-80 md:h-80 bg-gradient-to-r from-gray-500/20 to-gray-600/20 rounded-full opacity-60 pulse-element blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-r from-gray-600/20 to-gray-500/20 rounded-full opacity-40 pulse-element blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 features-section relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div>
                <div className="inline-flex items-center gap-2 bg-gray-500/10 backdrop-blur-sm border border-gray-500/20 rounded-full px-6 py-3 mb-8">
                  <Zap className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-300 font-medium">WiFi Features</span>
                </div>
                <h2 className="text-5xl font-black text-white reveal-text mb-6">
                  Why Choose Our{" "}
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">WiFi</span>
                  ?
                </h2>
                <p className="text-xl text-gray-300 reveal-text leading-relaxed">
                  Experience lightning-fast internet connectivity throughout our facility with no restrictions or hidden costs.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  "100Mbps high-speed internet",
                  "Coverage throughout the facility",
                  "No password required",
                  "24/7 connectivity",
                  "Secure and stable connection",
                  "Perfect for streaming and work",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-4 feature-item group cursor-pointer hover:bg-gradient-to-r hover:from-gray-500/10 hover:to-transparent p-4 rounded-xl transition-all duration-500">
                    <div className="w-8 h-8 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                      <CheckCircle className="w-5 h-5 text-white group-hover:scale-150 transition-transform duration-300" />
                    </div>
                    <span className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300 text-lg">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <button className="group relative bg-gradient-to-r from-gray-500 to-gray-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-[0_0_50px_rgba(107,114,128,0.5)] transition-all duration-500 animated-button hover:scale-110 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10">Connect Now</span>
              </button>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6 features-image">
                <div className="space-y-6">
                  <div className="relative group overflow-hidden rounded-3xl">
                    {/* <Image
                      src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt="WiFi Coverage"
                      width={300}
                      height={400}
                      className="rounded-3xl shadow-lg hover:scale-110 hover:rotate-2 transition-all duration-700 w-full h-auto"
                    /> */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                  </div>
                  <div className="bg-gradient-to-r from-gray-500/20 to-gray-600/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                    <div className="text-3xl font-bold text-white mb-2">100%</div>
                    <div className="text-gray-300">Coverage</div>
                  </div>
                </div>
                <div className="space-y-6 mt-12">
                  <div className="bg-gradient-to-r from-gray-600/20 to-gray-700/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                    <div className="text-3xl font-bold text-white mb-2">24/7</div>
                    <div className="text-gray-300">Available</div>
                  </div>
                  <div className="relative group overflow-hidden rounded-3xl">
                    {/* <Image
                      src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt="High Speed"
                      width={300}
                      height={400}
                      className="rounded-3xl shadow-lg hover:scale-110 hover:-rotate-2 transition-all duration-700 w-full h-auto"
                    /> */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32 cta-section relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="cta-content">
            <div className="inline-flex items-center gap-2 bg-gray-500/10 backdrop-blur-sm border border-gray-500/20 rounded-full px-6 py-3 mb-8">
              <Heart className="w-5 h-5 text-gray-400" />
              <span className="text-sm text-gray-300 font-medium">Stay Connected!</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-black text-white mb-8">
              Experience{" "}
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">High-Speed</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Connect to our free high-speed WiFi and stay connected while you work out. 
              No passwords, no restrictions, just fast internet.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group relative bg-gradient-to-r from-gray-500 to-gray-600 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:shadow-[0_0_50px_rgba(107,114,128,0.5)] transition-all duration-500 animated-button hover:scale-110 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10">Connect Now</span>
              </button>
              <Link href="/facilities" className="group border-2 border-white/30 backdrop-blur-sm text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white hover:text-black transition-all duration-500 animated-button hover:scale-110 hover:-translate-y-2 inline-block">
                View All Facilities
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 