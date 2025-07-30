"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import { ChevronDown, Menu, X } from "lucide-react"

export default function Header() {
  const pathname = usePathname()
  
  // Determine current page based on pathname
  const getCurrentPage = () => {
    if (pathname === "/") return "home"
    if (pathname === "/about") return "about"
    if (pathname === "/blog" || pathname.startsWith("/blog/")) return "blog"
    if (pathname === "/contact") return "contact"
    if (pathname.startsWith("/services/")) return "services"
    if (pathname.startsWith("/facilities/")) return "facilities"
    return "home"
  }
  
  const currentPage = getCurrentPage()
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isFacilitiesOpen, setIsFacilitiesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const [isMobileFacilitiesOpen, setIsMobileFacilitiesOpen] = useState(false)
  const servicesDropdownRef = useRef<HTMLDivElement>(null)
  const facilitiesDropdownRef = useRef<HTMLDivElement>(null)

  const services = [
    // Core Training
    { name: "Functional Training", href: "/services/functional-training", category: "Core Training" },
    { name: "General Training", href: "/services/general-training", category: "Core Training" },
    { name: "Strength & Conditioning", href: "/services/strength-conditioning", category: "Core Training" },
    
    // Specialized Programs
    { name: "Fitness Bootcamp", href: "/services/fitness-bootcamp", category: "Specialized Programs" },
    { name: "Body Transformation", href: "/services/body-transformation", category: "Specialized Programs" },
    { name: "Weight Management", href: "/services/weight-management", category: "Specialized Programs" },
    
    // Combat & Mind-Body
    { name: "Boxing", href: "/services/boxing", category: "Combat & Mind-Body" },
    { name: "Yoga", href: "/services/yoga", category: "Combat & Mind-Body" },
    
    // High Intensity
    { name: "HIIT Training", href: "/services/hiit-training", category: "High Intensity" },
    { name: "Cardio", href: "/services/cardio", category: "High Intensity" },
    
    // Group Activities
    { name: "Group Classes", href: "/services/group-classes", category: "Group Activities" },
    { name: "Zumba", href: "/services/zumba", category: "Group Activities" },
  ]

  const facilities = [
    { name: "Steam Room", href: "/facilities/steam-room" },
    { name: "Changing Room", href: "/facilities/changing-room" },
    { name: "Free WiFi", href: "/facilities/free-wifi" },
    { name: "Physiotherapist", href: "/facilities/physiotherapist" },
    { name: "BCA Testing", href: "/facilities/bca-testing" },
    { name: "Nutritionist", href: "/facilities/nutritionist" },
  ]

  const isActive = (page: string) => {
    if (page === "services") {
      // Check if current page is any service page
      return currentPage === "services"
    }
    if (page === "facilities") {
      // Check if current page is any facility page
      return currentPage === "facilities"
    }
    return currentPage === page
  }

  const isServiceActive = (serviceHref: string) => {
    // Check if current pathname matches the service href
    return pathname === serviceHref
  }

  const isFacilityActive = (facilityHref: string) => {
    // Check if current pathname matches the facility href
    return pathname === facilityHref
  }

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false)
      }
      if (facilitiesDropdownRef.current && !facilitiesDropdownRef.current.contains(event.target as Node)) {
        setIsFacilitiesOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-md z-50 border-b border-gray-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="group">
                <Image
                  src="/images/slam-logo.png"
                  alt="SLAM Fitness Studio"
                  width={120}
                  height={40}
                  className="h-10 w-auto logo bg-white rounded-lg px-2 py-1 group-hover:scale-110 transition-transform duration-300"
                />
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className={`px-3 py-2 text-sm font-medium transition-colors nav-item ${
                  isActive("home")
                    ? "text-red-500 border-b-2 border-red-500"
                    : "text-gray-300 hover:text-red-500"
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`px-3 py-2 text-sm font-medium transition-colors nav-item ${
                  isActive("about")
                    ? "text-red-500 border-b-2 border-red-500"
                    : "text-gray-300 hover:text-red-500"
                }`}
              >
                About
              </Link>

              {/* Services Dropdown with Hover */}
              <div
                ref={servicesDropdownRef}
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button 
                  className={`px-3 py-2 text-sm font-medium transition-colors nav-item flex items-center ${
                    isActive("services")
                      ? "text-red-500 border-b-2 border-red-500"
                      : "text-gray-300 hover:text-red-500"
                  }`}
                >
                  Services
                  <ChevronDown
                    className={`ml-1 w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isServicesOpen && (
                  <>
                    {/* Invisible bridge to prevent gap */}
                    <div className="absolute top-full left-0 w-full h-2 bg-transparent"></div>
                    <div 
                      className="absolute top-full left-0 mt-2 w-96 bg-gray-800 rounded-lg shadow-lg border border-gray-700 py-4 z-50"
                    >
                      <div className="grid grid-cols-2 gap-4">
                        {(() => {
                          const categories = [...new Set(services.map(s => s.category))]
                          return categories.map((category) => (
                            <div key={category} className="space-y-2">
                              <h3 className="px-4 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider border-b border-gray-700">
                                {category}
                              </h3>
                              {services
                                .filter(service => service.category === category)
                                .map((service) => (
                                  <Link
                                    key={service.href}
                                    href={service.href}
                                    className={`block px-4 py-2 text-sm transition-colors ${
                                      isServiceActive(service.href)
                                        ? "text-red-500 bg-gray-700"
                                        : "text-gray-300 hover:text-red-500 hover:bg-gray-700"
                                    }`}
                                    onClick={() => setIsServicesOpen(false)}
                                  >
                                    {service.name}
                                  </Link>
                                ))}
                            </div>
                          ))
                        })()}
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Facilities Dropdown with Hover */}
              <div
                ref={facilitiesDropdownRef}
                className="relative"
                onMouseEnter={() => setIsFacilitiesOpen(true)}
                onMouseLeave={() => setIsFacilitiesOpen(false)}
              >
                <button 
                  className={`px-3 py-2 text-sm font-medium transition-colors nav-item flex items-center ${
                    isActive("facilities")
                      ? "text-red-500 border-b-2 border-red-500"
                      : "text-gray-300 hover:text-red-500"
                  }`}
                >
                  Facilities
                  <ChevronDown
                    className={`ml-1 w-4 h-4 transition-transform ${isFacilitiesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isFacilitiesOpen && (
                  <>
                    {/* Invisible bridge to prevent gap */}
                    <div className="absolute top-full left-0 w-full h-2 bg-transparent"></div>
                    <div 
                      className="absolute top-full left-0 mt-2 w-64 bg-gray-800 rounded-lg shadow-lg border border-gray-700 py-4 z-50"
                    >
                      <div className="space-y-2">
                        {facilities.map((facility) => (
                          <Link
                            key={facility.href}
                            href={facility.href}
                            className={`block px-4 py-2 text-sm transition-colors ${
                              isFacilityActive(facility.href)
                                ? "text-red-500 bg-gray-700"
                                : "text-gray-300 hover:text-red-500 hover:bg-gray-700"
                            }`}
                            onClick={() => setIsFacilitiesOpen(false)}
                          >
                            {facility.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>

              <Link
                href="/blog"
                className={`px-3 py-2 text-sm font-medium transition-colors nav-item ${
                  isActive("blog")
                    ? "text-red-500 border-b-2 border-red-500"
                    : "text-gray-300 hover:text-red-500"
                }`}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className={`px-3 py-2 text-sm font-medium transition-colors nav-item ${
                  isActive("contact")
                    ? "text-red-500 border-b-2 border-red-500"
                    : "text-gray-300 hover:text-red-500"
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/contact">
              <button className="hidden md:block bg-gradient-primary text-white px-6 py-2 rounded-full font-medium hover:shadow-glow transition-all duration-300 animated-button">
                Franchise Enquiry
              </button>
            </Link>
            <button
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[9999]">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-60"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          {/* Full Height Drawer */}
          <div className="absolute right-0 top-0 h-screen w-80 bg-gray-800 shadow-2xl transform transition-transform duration-300 ease-in-out border-l border-gray-700 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700 bg-gray-900 flex-shrink-0">
              <h2 className="text-2xl font-bold text-white">Menu</h2>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-300 hover:text-white p-3 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <X className="w-7 h-7" />
              </button>
            </div>
            {/* Scrollable Menu Items */}
            <div className="flex-1 overflow-y-auto px-8 py-8 space-y-6 bg-gray-800">
              <Link
                href="/"
                className={`block px-6 py-4 rounded-lg transition-all duration-200 text-lg ${
                  isActive("home") 
                    ? "text-red-500 font-semibold bg-gray-700 border-l-4 border-red-500" 
                    : "text-gray-200 hover:text-red-500 hover:bg-gray-700"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`block px-6 py-4 rounded-lg transition-all duration-200 text-lg ${
                  isActive("about") 
                    ? "text-red-500 font-semibold bg-gray-700 border-l-4 border-red-500" 
                    : "text-gray-200 hover:text-red-500 hover:bg-gray-700"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <div>
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className={`flex items-center justify-between w-full px-6 py-4 rounded-lg transition-all duration-200 text-lg ${
                    isActive("services") 
                      ? "text-red-500 font-semibold bg-gray-700 border-l-4 border-red-500" 
                      : "text-gray-200 hover:text-red-500 hover:bg-gray-700"
                  }`}
                >
                  Services
                  <ChevronDown className={`w-5 h-5 transition-transform ${isMobileServicesOpen ? "rotate-180" : ""}`} />
                </button>
                {isMobileServicesOpen && (
                  <div className="mt-4 space-y-4 bg-gray-700 rounded-lg p-4">
                    {(() => {
                      const categories = [...new Set(services.map(s => s.category))]
                      return categories.map((category) => (
                        <div key={category} className="space-y-2">
                          <h3 className="px-2 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider border-b border-gray-600">
                            {category}
                          </h3>
                          {services
                            .filter(service => service.category === category)
                            .map((service) => (
                              <Link
                                key={service.href}
                                href={service.href}
                                className={`block px-4 py-3 text-base rounded-md transition-all duration-200 ${
                                  isServiceActive(service.href)
                                    ? "text-red-500 font-semibold bg-gray-600 border-l-2 border-red-500"
                                    : "text-gray-300 hover:text-red-500 hover:bg-gray-600"
                                }`}
                                onClick={() => {
                                  setIsMobileMenuOpen(false)
                                  setIsMobileServicesOpen(false)
                                }}
                              >
                                {service.name}
                              </Link>
                            ))}
                        </div>
                      ))
                    })()}
                  </div>
                )}
              </div>
              <div>
                <button
                  onClick={() => setIsMobileFacilitiesOpen(!isMobileFacilitiesOpen)}
                  className={`flex items-center justify-between w-full px-6 py-4 rounded-lg transition-all duration-200 text-lg ${
                    isActive("facilities") 
                      ? "text-red-500 font-semibold bg-gray-700 border-l-4 border-red-500" 
                      : "text-gray-200 hover:text-red-500 hover:bg-gray-700"
                  }`}
                >
                  Facilities
                  <ChevronDown className={`w-5 h-5 transition-transform ${isMobileFacilitiesOpen ? "rotate-180" : ""}`} />
                </button>
                {isMobileFacilitiesOpen && (
                  <div className="mt-4 space-y-2 bg-gray-700 rounded-lg p-4">
                    {facilities.map((facility) => (
                      <Link
                        key={facility.href}
                        href={facility.href}
                        className={`block px-4 py-3 text-base rounded-md transition-all duration-200 ${
                          isFacilityActive(facility.href)
                            ? "text-red-500 font-semibold bg-gray-600 border-l-2 border-red-500"
                            : "text-gray-300 hover:text-red-500 hover:bg-gray-600"
                        }`}
                        onClick={() => {
                          setIsMobileMenuOpen(false)
                          setIsMobileFacilitiesOpen(false)
                        }}
                      >
                        {facility.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href="/blog"
                className={`block px-6 py-4 rounded-lg transition-all duration-200 text-lg ${
                  isActive("blog") 
                    ? "text-red-500 font-semibold bg-gray-700 border-l-4 border-red-500" 
                    : "text-gray-200 hover:text-red-500 hover:bg-gray-700"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className={`block px-6 py-4 rounded-lg transition-all duration-200 text-lg ${
                  isActive("contact") 
                    ? "text-red-500 font-semibold bg-gray-700 border-l-4 border-red-500" 
                    : "text-gray-200 hover:text-red-500 hover:bg-gray-700"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
} 