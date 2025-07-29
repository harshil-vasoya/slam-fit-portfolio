"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Sparkles, Star, Wifi, Droplets, Users, Stethoscope, Activity, Apple } from "lucide-react"
import { useState, useEffect } from "react"

const facilities = [
  {
    id: 1,
    title: "Steam Room",
    description: "Relax and rejuvenate in our premium steam room for post-workout recovery",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    gradient: "from-gray-500 via-gray-600 to-gray-700",
    glowColor: "shadow-[0_0_50px_rgba(107,114,128,0.3)]",
    href: "/facilities/steam-room",
    badge: "Premium",
    icon: Droplets,
  },
  {
    id: 2,
    title: "Changing Room",
    description: "Spacious and clean changing facilities with modern amenities",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    gradient: "from-gray-600 via-gray-700 to-gray-800",
    glowColor: "shadow-[0_0_50px_rgba(75,85,99,0.3)]",
    href: "/facilities/changing-room",
    badge: "Modern",
    icon: Users,
  },
  {
    id: 3,
    title: "Free WiFi",
    description: "Stay connected with high-speed internet throughout the facility",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    gradient: "from-gray-700 via-gray-800 to-gray-900",
    glowColor: "shadow-[0_0_50px_rgba(55,65,81,0.3)]",
    href: "/facilities/free-wifi",
    badge: "Free",
    icon: Wifi,
  }
]

export default function FacilitiesGrid() {
  const [particles, setParticles] = useState<Array<{
    left: string;
    top: string;
    animationDelay: string;
    animationDuration: string;
  }>>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [...Array(20)].map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${2 + Math.random() * 3}s`,
      }));
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.animationDelay,
              animationDuration: particle.animationDuration,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 bg-gray-500/10 backdrop-blur-sm border border-gray-500/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-300 font-medium">Premium Facilities</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-white">World-Class</span>
            <span className="block bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent animate-pulse">
              Facilities
            </span>
          </h2>

          <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience premium amenities designed to enhance your fitness journey and provide ultimate comfort
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {facilities.map((facility, index) => (
            <Link key={facility.id} href={facility.href} className="group relative block">
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl border border-gray-700/50 hover:border-gray-500/50 transition-all duration-700 hover:scale-[1.02] hover:-translate-y-2">
                {/* Glow Effect */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${facility.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-700`}
                ></div>

                {/* Badge */}
                <div className="absolute top-6 right-6 z-20">
                  <div className="flex items-center gap-1 bg-gray-500/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-white">
                    <Star className="w-3 h-3 fill-gray-400 text-gray-400" />
                    {facility.badge}
                  </div>
                </div>

                {/* Content Container */}
                <div className="relative z-10 p-8 sm:p-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-8">
                    <div className="flex-1">
                      <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-gray-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                        <facility.icon className="w-8 h-8 text-white group-hover:scale-125 transition-transform duration-300" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-200 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                        {facility.title}
                      </h3>
                      <p className="text-gray-300 text-lg leading-relaxed group-hover:text-white transition-colors duration-500">
                        {facility.description}
                      </p>
                    </div>

                    {/* Arrow Button */}
                    <div className="ml-6 w-14 h-14 bg-gradient-to-r from-gray-500/20 to-gray-600/10 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-gray-500 group-hover:to-gray-600 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                      <ArrowRight className="w-6 h-6 text-white group-hover:text-gray-900 group-hover:translate-x-1 transition-all duration-500" />
                    </div>
                  </div>

                  {/* Image Container */}
                  <div className="relative">
                    <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                      <Image
                        src={facility.image || "/placeholder.svg"}
                        alt={facility.title}
                        width={600}
                        height={375}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />

                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 transition-all duration-500"></div>

                      {/* Gradient Border */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${facility.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 mix-blend-overlay`}
                      ></div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500 delay-100"></div>
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500 delay-200"></div>
                  </div>
                </div>

                {/* Bottom Gradient Line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${facility.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <Link
            href="/facilities"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-[0_0_50px_rgba(107,114,128,0.4)] transition-all duration-500 hover:scale-105 hover:-translate-y-1 relative overflow-hidden"
          >
            {/* Button Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <span className="relative z-10">View All Facilities</span>
            <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />

            {/* Sparkle Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute top-2 left-8 w-1 h-1 bg-white rounded-full animate-ping"></div>
              <div className="absolute bottom-3 right-12 w-1 h-1 bg-white rounded-full animate-ping delay-100"></div>
              <div className="absolute top-1/2 right-6 w-1 h-1 bg-white rounded-full animate-ping delay-200"></div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
} 