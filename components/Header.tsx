"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { ChevronDown, Menu, X } from "lucide-react"

interface HeaderProps {
  currentPage?: string
}

export default function Header({ currentPage = "home" }: HeaderProps) {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const services = [
    { name: "Functional Training", href: "/services/functional-training" },
    { name: "Fitness Bootcamp", href: "/services/fitness-bootcamp" },
    { name: "Body Transformation", href: "/services/body-transformation" },
    { name: "Weight Management", href: "/services/weight-management" },
  ]

  const isActive = (page: string) => {
    if (page === "services") {
      // Check if current page is any service page
      return currentPage === "services" || 
             currentPage === "functional-training" || 
             currentPage === "fitness-bootcamp" || 
             currentPage === "body-transformation" || 
             currentPage === "weight-management"
    }
    return currentPage === page
  }

  const isServiceActive = (serviceHref: string) => {
    // Check if we're on a service page by looking at currentPage
    if (currentPage === "services") {
      // Extract the service name from href and check if it matches the current URL path
      const serviceName = serviceHref.split('/').pop()
      // Since currentPage is "services" for all service pages, we need to check the actual URL
      if (typeof window !== 'undefined') {
        const currentPath = window.location.pathname
        return currentPath === serviceHref
      }
    }
    return false
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false)
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
                ref={dropdownRef}
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
                      className="absolute top-full left-0 mt-2 w-56 bg-gray-800 rounded-lg shadow-lg border border-gray-700 py-2 z-50"
                    >
                      {services.map((service) => (
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
            <button className="hidden md:block bg-gradient-primary text-white px-6 py-2 rounded-full font-medium hover:shadow-glow transition-all duration-300 animated-button">
              Join Now
            </button>
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
                  <div className="mt-4 space-y-3 bg-gray-700 rounded-lg p-4">
                    {services.map((service) => (
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