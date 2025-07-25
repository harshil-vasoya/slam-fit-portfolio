"use client"

import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import {
  ArrowRight,
  Play,
  Star,
  Users,
  Target,
  Zap,
  Award,
  Mail,
  Phone,
  MapPin,
  Send,
  Calendar,
  Clock,
  User,
  CheckCircle,
  Dumbbell,
  Activity,
  TrendingUp,
  Flame,
  Sparkles,
} from "lucide-react"
import { useGSAP } from "../lib/useGSAP"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Header from "../components/Header"
import Footer from "../components/Footer"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Home() {
  const scope = useGSAP()
  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const featuresRef = useRef(null)
  const statsRef = useRef(null)
  const articlesRef = useRef(null)
  const ctaRef = useRef(null)

  useGSAP(() => {
    // Set initial states
    gsap.set(".hero-title", { y: 100, opacity: 0 })
    gsap.set(".hero-subtitle", { y: 50, opacity: 0 })
    gsap.set(".hero-buttons", { y: 30, opacity: 0 })
    gsap.set(".hero-stats", { y: 20, opacity: 0 })
    gsap.set(".hero-image", { scale: 0.8, opacity: 0, rotation: -5 })
    gsap.set(".floating", { y: 20, opacity: 0 })
    gsap.set(".pulse-element", { scale: 0.8, opacity: 0 })

    // Create main timeline for hero section
    const heroTl = gsap.timeline({ delay: 0.5 })

    // Hero animations with advanced effects
    heroTl
      .to(".hero-title", {
        duration: 1.2,
        y: 0,
        opacity: 1,
        ease: "power4.out",
        stagger: 0.2,
      })
      .to(
        ".hero-subtitle",
        {
          duration: 1,
          y: 0,
          opacity: 1,
          ease: "power3.out",
        },
        "-=0.8",
      )
      .to(
        ".hero-buttons",
        {
          duration: 0.8,
          y: 0,
          opacity: 1,
          ease: "back.out(1.7)",
        },
        "-=0.6",
      )
      .to(
        ".hero-stats",
        {
          duration: 0.8,
          y: 0,
          opacity: 1,
          ease: "power3.out",
          stagger: 0.1,
        },
        "-=0.4",
      )
      .to(
        ".hero-image",
        {
          duration: 1.5,
          scale: 1,
          opacity: 1,
          rotation: 0,
          ease: "elastic.out(1, 0.5)",
        },
        "-=1",
      )
      .to(
        ".floating",
        {
          duration: 1,
          y: 0,
          opacity: 1,
          ease: "power3.out",
          stagger: 0.2,
        },
        "-=0.8",
      )
      .to(
        ".pulse-element",
        {
          duration: 1,
          scale: 1,
          opacity: 1,
          ease: "elastic.out(1, 0.3)",
          stagger: 0.3,
        },
        "-=0.6",
      )

    // Continuous floating animation
    gsap.to(".floating", {
      y: -20,
      duration: 3,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.5,
    })

    // Continuous pulse animation
    gsap.to(".pulse-element", {
      scale: 1.1,
      duration: 2,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.3,
    })

    // Advanced scroll-triggered animations
    gsap.utils.toArray(".service-card").forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 100,
          opacity: 0,
          scale: 0.8,
          rotation: index % 2 === 0 ? -5 : 5,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.1,
        },
      )
    })

    // Feature items with staggered reveal
    gsap.utils.toArray(".feature-item").forEach((item, index) => {
      gsap.fromTo(
        item,
        {
          x: -100,
          opacity: 0,
          scale: 0.9,
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.1,
        },
      )
    })

    // Article cards with 3D effect
    gsap.utils.toArray(".article-card").forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 80,
          opacity: 0,
          rotationX: 45,
          transformPerspective: 1000,
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.15,
        },
      )
    })

    // Stats counter animation
    gsap.utils.toArray(".stat-number").forEach((stat) => {
      const finalValue = stat.textContent
      gsap.fromTo(
        stat,
        { textContent: 0 },
        {
          textContent: finalValue,
          duration: 2,
          ease: "power2.out",
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: stat,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )
    })

    // Reveal text animations
    gsap.utils.toArray(".reveal-text").forEach((text, index) => {
      gsap.fromTo(
        text,
        {
          y: 50,
          opacity: 0,
          clipPath: "inset(100% 0 0 0)",
        },
        {
          y: 0,
          opacity: 1,
          clipPath: "inset(0% 0 0 0)",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: text,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.1,
        },
      )
    })

    // CTA section with magnetic effect
    gsap.fromTo(
      ".cta-content",
      {
        scale: 0.9,
        opacity: 0,
        y: 50,
      },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: ".cta-section",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    )

    // Contact form animation
    gsap.utils.toArray(".contact-form input, .contact-form textarea, .contact-form select").forEach((field, index) => {
      gsap.fromTo(
        field,
        {
          x: -30,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".contact-form",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.1,
        },
      )
    })

    // Contact info cards
    gsap.utils.toArray(".contact-info > div").forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          x: 50,
          opacity: 0,
          scale: 0.9,
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".contact-info",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.2,
        },
      )
    })

    // Parallax effect for background elements
    gsap.utils.toArray(".parallax-bg").forEach((bg) => {
      gsap.to(bg, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: bg,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })
    })

    // Magnetic button effects
    gsap.utils.toArray(".animated-button").forEach((button) => {
      const handleMouseMove = (e) => {
        const rect = button.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2

        gsap.to(button, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.3,
          ease: "power2.out",
        })
      }

      const handleMouseLeave = () => {
        gsap.to(button, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.3)",
        })
      }

      button.addEventListener("mousemove", handleMouseMove)
      button.addEventListener("mouseleave", handleMouseLeave)
    })

    // Text gradient animation
    gsap.to(".text-gradient", {
      backgroundPosition: "200% center",
      duration: 3,
      ease: "none",
      repeat: -1,
      yoyo: true,
    })

    // Navbar scroll effect
    ScrollTrigger.create({
      start: "top -80",
      end: 99999,
      toggleClass: { className: "scrolled", targets: "nav" },
    })
  }, [])

  return (
    <div ref={scope} className="min-h-screen bg-background overflow-x-hidden">
      <Header currentPage="home" />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative pt-16 pb-20 overflow-hidden hero-section min-h-screen flex items-center"
      >
        <div className="absolute inset-0 bg-gradient-dark opacity-90 hero-bg parallax-bg"></div>
        <div className="absolute inset-0">
          {/* Mobile-optimized floating elements */}
          <div className="absolute top-20 left-4 md:left-20 w-20 h-20 md:w-32 md:h-32 bg-red-500/20 rounded-full floating pulse-element">
            <Dumbbell className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-16 md:h-16 text-red-500" />
          </div>
          <div className="absolute top-40 right-4 md:right-40 w-16 h-16 md:w-24 md:h-24 bg-red-600/30 rounded-full floating">
            <Activity className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 md:w-12 md:h-12 text-red-400" />
          </div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 md:w-16 md:h-16 bg-red-400/25 rounded-full floating pulse-element">
            <TrendingUp className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 text-red-300" />
          </div>
          <div className="absolute top-1/2 right-4 md:right-20 w-16 h-16 md:w-20 md:h-20 bg-red-300/20 rounded-full floating">
            <Flame className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 text-red-500" />
          </div>
          <div className="absolute bottom-40 right-1/3 w-10 h-10 md:w-14 md:h-14 bg-red-600/25 rounded-full floating pulse-element">
            <Sparkles className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 md:w-7 md:h-7 text-red-400" />
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
                  <span className="hero-title block">Transform Your</span>
                  <span className="text-gradient hero-title block bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent bg-size-200 animate-gradient-x">
                    Body & Mind
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 max-w-lg mx-auto lg:mx-0 hero-subtitle">
                  SLAM Fitness is not just a gym; it&apos;s a way of life. Experience premium fitness training with
                  personalized programs designed for your transformation.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 hero-buttons justify-center lg:justify-start">
                <button className="bg-gradient-primary text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-glow transition-all duration-300 flex items-center justify-center group animated-button hover:scale-105 hover:-translate-y-1">
                  Start Your Journey
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center animated-button hover:scale-105 hover:-translate-y-1">
                  <Play className="mr-2" />
                  Watch Video
                </button>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-6 lg:space-x-8 text-white hero-stats">
                <div className="flex items-center space-x-2">
                  <Star className="text-yellow-400 fill-current w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="font-semibold stat-number text-sm sm:text-base">4.9</span>
                  <span className="text-gray-300 text-sm sm:text-base">(2.5k reviews)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="text-red-500 w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="font-semibold stat-number text-sm sm:text-base">10000</span>
                  <span className="text-gray-300 text-sm sm:text-base">members</span>
                </div>
              </div>
            </div>
            <div className="relative order-first lg:order-last">
              <div className="relative z-10">
                <Image
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Fitness Training"
                  width={600}
                  height={600}
                  className="rounded-2xl shadow-2xl hero-image w-full h-auto"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-48 h-48 md:w-72 md:h-72 bg-gradient-primary rounded-full opacity-20 pulse-element"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-16 sm:py-20 bg-gray-900 services-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 reveal-text">Our Premium Services</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto reveal-text">
              Choose from our comprehensive range of fitness programs designed to meet your specific goals
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: Target,
                title: "Functional Training",
                description: "Advanced functional fitness training for real-world strength and mobility",
                color: "bg-red-500",
                gradient: "from-red-500 to-red-600",
                href: "/services/functional-training",
              },
              {
                icon: Zap,
                title: "Fitness Bootcamp",
                description: "High-intensity bootcamp sessions for maximum results in minimum time",
                color: "bg-gray-800",
                gradient: "from-gray-800 to-gray-900",
                href: "/services/fitness-bootcamp",
              },
              {
                icon: Award,
                title: "Body Transformation",
                description: "Personalized programs for complete body transformation and sculpting",
                color: "bg-red-600",
                gradient: "from-red-600 to-red-700",
                href: "/services/body-transformation",
              },
              {
                icon: Users,
                title: "Weight Management",
                description: "Specialized programs for weight loss and muscle gain with expert guidance",
                color: "bg-gray-700",
                gradient: "from-gray-700 to-gray-800",
                href: "/services/weight-management",
              },
            ].map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group relative bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-700 service-card overflow-hidden cursor-pointer hover:scale-105 hover:-translate-y-2 block"
              >
                {/* Hover Background Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 ${service.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                  >
                    <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 group-hover:text-red-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 group-hover:text-gray-200 transition-colors duration-300">
                    {service.description}
                  </p>
                  <div className="text-red-400 font-semibold hover:text-red-300 transition-colors flex items-center group animated-button text-sm sm:text-base">
                    Learn More
                    <ArrowRight className="ml-2 w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 bg-black features-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-white reveal-text">
                Why Choose{" "}
                <span className="text-gradient bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
                  SLAM Fitness
                </span>
                ?
              </h2>
              <p className="text-xl text-gray-300 reveal-text">
                Experience the difference with our state-of-the-art facilities, expert trainers, and proven results.
              </p>
              <div className="space-y-6">
                {[
                  "Premium equipment and modern facilities",
                  "Expert certified trainers with 10+ years experience",
                  "Personalized training programs",
                  "Flexible class schedules",
                  "Proven transformation results",
                  "Community support and motivation",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 feature-item group cursor-pointer hover:bg-gray-800/50 p-3 rounded-lg transition-all duration-300"
                  >
                    <div className="w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                      <CheckCircle className="w-4 h-4 text-white group-hover:scale-150 transition-transform duration-300" />
                    </div>
                    <span className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              <button className="bg-gradient-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-glow transition-all duration-300 animated-button hover:scale-105 hover:-translate-y-1">
                Book Your Free Trial
              </button>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4 features-image">
                <Image
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Gym Equipment"
                  width={300}
                  height={400}
                  className="rounded-2xl shadow-lg hover:scale-105 hover:rotate-2 transition-all duration-500"
                />
                <Image
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Training Session"
                  width={300}
                  height={400}
                  className="rounded-2xl shadow-lg mt-8 hover:scale-105 hover:-rotate-2 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section ref={articlesRef} className="py-20 bg-gray-900 articles-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 reveal-text">Latest Fitness Articles</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto reveal-text">
              Stay updated with the latest fitness tips, workout guides, and wellness advice from our expert trainers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image:
                  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                category: "Workouts",
                title: "10 Essential Exercises for Building Core Strength",
                excerpt:
                  "Discover the most effective core exercises that will help you build a strong foundation and improve your overall fitness performance.",
                author: "Sarah Johnson",
                date: "Nov 15, 2024",
                readTime: "5 min read",
                featured: true,
              },
              {
                image:
                  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                category: "Nutrition",
                title: "The Ultimate Guide to Pre-Workout Nutrition",
                excerpt:
                  "Learn what to eat before your workout to maximize energy, performance, and recovery for better results.",
                author: "Mike Chen",
                date: "Nov 12, 2024",
                readTime: "7 min read",
                featured: false,
              },
              {
                image:
                  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                category: "Wellness",
                title: "How to Stay Motivated on Your Fitness Journey",
                excerpt:
                  "Practical tips and strategies to maintain motivation and consistency in your fitness routine for long-term success.",
                author: "Emma Davis",
                date: "Nov 10, 2024",
                readTime: "6 min read",
                featured: false,
              },
              {
                image:
                  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                category: "Training",
                title: "Functional Training vs Traditional Gym Workouts",
                excerpt:
                  "Compare the benefits of functional training with traditional gym workouts and find out which approach suits your goals.",
                author: "Alex Rodriguez",
                date: "Nov 8, 2024",
                readTime: "8 min read",
                featured: false,
              },
              {
                image:
                  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                category: "Recovery",
                title: "The Importance of Rest Days in Your Fitness Routine",
                excerpt:
                  "Understand why rest days are crucial for muscle growth, injury prevention, and overall fitness progress.",
                author: "Dr. Lisa Park",
                date: "Nov 5, 2024",
                readTime: "4 min read",
                featured: false,
              },
              {
                image:
                  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                category: "Transformation",
                title: "Real Success Stories: 30-Day Transformation Challenge",
                excerpt:
                  "Inspiring stories from our members who completed the 30-day transformation challenge and achieved amazing results.",
                author: "SLAM Team",
                date: "Nov 3, 2024",
                readTime: "10 min read",
                featured: false,
              },
            ].map((article, index) => (
              <article
                key={index}
                className="group relative bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-700 article-card cursor-pointer hover:scale-105 hover:-translate-y-3"
              >
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-transparent to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

                <div className="relative">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {article.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-primary text-white px-3 py-1 rounded-full text-sm font-semibold group-hover:scale-110 transition-transform duration-300">
                      Featured
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm group-hover:bg-red-500 transition-colors duration-300">
                    {article.category}
                  </div>
                </div>

                <div className="p-6 relative z-10">
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                    <div className="flex items-center space-x-1 group-hover:text-red-400 transition-colors duration-300">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-1 group-hover:text-red-400 transition-colors duration-300">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">
                    {article.title}
                  </h3>

                  <p className="text-gray-300 mb-4 line-clamp-3 group-hover:text-gray-200 transition-colors duration-300">
                    {article.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-400 group-hover:text-red-400 transition-colors duration-300" />
                      <span className="text-sm text-gray-400 group-hover:text-red-400 transition-colors duration-300">
                        {article.author}
                      </span>
                    </div>
                    <button className="text-red-400 font-semibold hover:text-red-300 transition-colors flex items-center group animated-button">
                      Read More
                      <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </button>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-0 h-0 border-l-[25px] border-l-transparent border-t-[25px] border-t-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="bg-gradient-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-glow transition-all duration-300 flex items-center mx-auto group animated-button hover:scale-105 hover:-translate-y-1 w-fit"
            >
              View All Articles
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 bg-gradient-dark cta-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="cta-content">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Life?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of members who have already achieved their fitness goals with SLAM Fitness Studio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-glow transition-all duration-300 animated-button hover:scale-105 hover:-translate-y-1">
                Start Free Trial
              </button>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 animated-button hover:scale-105 hover:-translate-y-1 inline-block"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-900 contact-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 reveal-text">Get In Touch</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto reveal-text">
              Ready to start your fitness journey? Contact us today and let&apos;s discuss your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="group relative bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700 contact-form hover:shadow-2xl transition-all duration-500 hover:scale-105">
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-red-300 transition-colors duration-300">
                  Send us a Message
                </h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-red-300 transition-colors duration-300"
                      >
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 text-white placeholder-gray-400 hover:bg-gray-600 hover:border-red-400"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="group">
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-red-300 transition-colors duration-300"
                      >
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 text-white placeholder-gray-400 hover:bg-gray-600 hover:border-red-400"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-red-300 transition-colors duration-300"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 text-white placeholder-gray-400 hover:bg-gray-600 hover:border-red-400"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className="group">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-red-300 transition-colors duration-300"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 text-white placeholder-gray-400 hover:bg-gray-600 hover:border-red-400"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="group">
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-red-300 transition-colors duration-300"
                    >
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 text-white hover:bg-gray-600 hover:border-red-400"
                    >
                      <option value="">Select a service</option>
                      <option value="functional-training">Functional Training</option>
                      <option value="fitness-bootcamp">Fitness Bootcamp</option>
                      <option value="body-transformation">Body Transformation</option>
                      <option value="weight-management">Weight Management</option>
                      <option value="personal-training">Personal Training</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="group">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2 group-hover:text-red-300 transition-colors duration-300"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 text-white placeholder-gray-400 resize-none hover:bg-gray-600 hover:border-red-400"
                      placeholder="Tell us about your fitness goals and how we can help you achieve them..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-glow transition-all duration-300 flex items-center justify-center group animated-button hover:scale-105 hover:-translate-y-1"
                  >
                    Send Message
                    <Send className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 contact-info">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <p className="text-gray-300 mb-8">
                  Get in touch with us for any questions about our services, membership, or to schedule a free
                  consultation.
                </p>
              </div>

              <div className="space-y-6">
                <div className="group flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-800/50 transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1 group-hover:text-red-300 transition-colors duration-300">
                      Visit Us
                    </h4>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      #18/70, Halls Road, Kilpauk,
                      <br />
                      Chennai – 600 010, India
                    </p>
                  </div>
                </div>

                <div className="group flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-800/50 transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1 group-hover:text-red-300 transition-colors duration-300">
                      Call Us
                    </h4>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      +91 98414 63406
                      <br />
                      +91 70944 79145
                    </p>
                  </div>
                </div>

                <div className="group flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-800/50 transition-all duration-300 cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1 group-hover:text-red-300 transition-colors duration-300">
                      Email Us
                    </h4>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      info@slamfitnessstudio.in
                      <br />
                      sureshs@paulsons.in
                    </p>
                  </div>
                </div>
              </div>

              <div className="group bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-700 hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer">
                <h4 className="font-semibold text-white mb-4 group-hover:text-red-300 transition-colors duration-300">
                  Business Hours
                </h4>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between group-hover:text-gray-200 transition-colors duration-300">
                    <span>Monday - Friday</span>
                    <span>6:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between group-hover:text-gray-200 transition-colors duration-300">
                    <span>Saturday</span>
                    <span>6:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between group-hover:text-gray-200 transition-colors duration-300">
                    <span>Sunday</span>
                    <span>7:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
