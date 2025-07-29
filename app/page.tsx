"use client"
import Image from "next/image"
import Link from "next/link"
import { useRef, useState } from "react"
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
import ServicesGrid from "../components/ServicesGrid"
import FacilitiesGrid from "../components/FacilitiesGrid"

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
  
  // Contact form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

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
    <div
      ref={scope}
      className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black overflow-x-hidden relative"
    >
 
            {/* Mixed Floating Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-gray-500/20 to-gray-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-gray-600/20 to-gray-700/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-gray-400/20 to-gray-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>



      {/* Hero Section - Red Theme */}
      <section
        ref={heroRef}
        className="relative pt-24 pb-16 overflow-hidden hero-section min-h-screen flex items-center"
      >

        <div className="absolute inset-0">
                      {/* Black & White themed floating elements */}
          {/* <div className="absolute bottom-30 left-3 md:left-20 w-24 h-24 md:w-40 md:h-40 bg-gradient-to-br from-gray-500/30 to-gray-600/30 rounded-3xl floating pulse-element backdrop-blur-xl border border-white/10 shadow-2xl">
            <Dumbbell className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-20 md:h-20 text-gray-400" />
          </div> */}
          <div className="absolute top-25 right-4 md:right-40 w-20 h-20 md:w-32 md:h-32 bg-gradient-to-br from-gray-600/30 to-gray-700/30 rounded-3xl floating backdrop-blur-xl border border-white/10 shadow-2xl">
            <Activity className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-16 md:h-16 text-gray-400" />
          </div>
          {/* <div className="absolute bottom-20 left-1/4 w-16 h-16 md:w-28 md:h-28 bg-gradient-to-br from-pink-500/30 to-red-600/30 rounded-3xl floating pulse-element backdrop-blur-xl border border-white/10 shadow-2xl">
            <TrendingUp className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-14 md:h-14 text-pink-400" />
          </div> */}
          <div className="absolute top-1/2 right-2 md:right-20 w-18 h-18 md:w-24 md:h-24 bg-gradient-to-br from-gray-500/30 to-gray-600/30 rounded-3xl floating backdrop-blur-xl border border-white/10 shadow-2xl">
            <Flame className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 text-gray-400" />
          </div>
          <div className="absolute bottom-40 right-1/3 w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br from-gray-400/30 to-gray-600/30 rounded-3xl floating pulse-element backdrop-blur-xl border border-white/10 shadow-2xl">
            <Sparkles className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-7 h-7 md:w-10 md:h-10 text-gray-400" />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8 lg:space-y-12 text-center lg:text-left max-w-2xl lg:max-w-none mx-auto lg:mx-0">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
                  <span className="hero-title block">Transform Your</span>
                  <span className="text-gradient hero-title block bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent bg-size-200 animate-gradient-x">
                    Body & Mind
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 hero-subtitle leading-relaxed">
                  SLAM Fitness is not just a gym; it's a{" "}
                  <span className="text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text font-semibold">
                    way of life
                  </span>
                  . Experience premium fitness training with personalized programs designed for your transformation.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 hero-buttons justify-center lg:justify-start">
                <button className="group relative bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] transition-all duration-500 flex items-center justify-center animated-button hover:scale-110 hover:-translate-y-2 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative z-10">Start Your Journey</span>
                  <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
                </button>
                <button className="group border-2 border-white/30 backdrop-blur-sm text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-black transition-all duration-500 flex items-center justify-center animated-button hover:scale-110 hover:-translate-y-2">
                  <Play className="mr-3 group-hover:scale-125 transition-transform duration-300" />
                  Watch Video
                </button>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-8 lg:space-x-12 text-white hero-stats">
                <div className="flex items-center space-x-3 group cursor-pointer">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-yellow-400 fill-current w-5 h-5 group-hover:scale-125 transition-transform duration-300"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                    ))}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold stat-number text-lg leading-none">4.9</span>
                    <span className="text-gray-300 text-sm leading-tight">(2.5k reviews)</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3 group cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 flex-shrink-0">
                    <Users className="text-white w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold stat-number text-lg leading-none">10000</span>
                    <span className="text-gray-300 text-sm leading-tight">members</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative order-first lg:order-last flex justify-center lg:justify-end">
              <div className="relative z-10 group">
                <div className="relative overflow-hidden rounded-3xl">
                  <Image
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Fitness Training"
                    width={700}
                    height={700}
                    className="rounded-3xl shadow-2xl hero-image w-full h-auto group-hover:scale-110 transition-transform duration-700"
                  />
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

      {/* Services Section - BLACK & WHITE THEME */}
      <section ref={servicesRef} className="py-24 sm:py-32 services-section relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-500/5 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gray-500/10 backdrop-blur-sm border border-gray-500/20 rounded-full px-6 py-3 mb-8">
              <Target className="w-5 h-5 text-gray-400" />
              <span className="text-sm text-gray-300 font-medium">Premium Services</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-black text-white mb-6 reveal-text">
              Our Premium{" "}
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto reveal-text leading-relaxed">
              Choose from our comprehensive range of fitness programs designed to meet your specific goals and transform
              your life
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Functional Training",
                description: "Advanced functional fitness training for real-world strength and mobility",
                gradient: "from-gray-800 to-gray-900",
                glowColor: "shadow-[0_0_50px_rgba(107,114,128,0.3)]",
                href: "/services/functional-training",
              },
              {
                icon: Zap,
                title: "Fitness Bootcamp",
                description: "High-intensity bootcamp sessions for maximum results in minimum time",
                gradient: "from-gray-600 to-gray-700",
                glowColor: "shadow-[0_0_50px_rgba(75,85,99,0.3)]",
                href: "/services/fitness-bootcamp",
              },
              {
                icon: Award,
                title: "Body Transformation",
                description: "Personalized programs for complete body transformation and sculpting",
                gradient: "from-gray-700 to-gray-800",
                glowColor: "shadow-[0_0_50px_rgba(55,65,81,0.3)]",
                href: "/services/body-transformation",
              },
              {
                icon: Users,
                title: "Weight Management",
                description: "Specialized programs for weight loss and muscle gain with expert guidance",
                gradient: "from-gray-800 to-gray-900",
                glowColor: "shadow-[0_0_50px_rgba(31,41,55,0.3)]",
                href: "/services/weight-management",
              },
            ].map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-700 border border-gray-700/50 service-card overflow-hidden cursor-pointer hover:scale-105 hover:-translate-y-4 block"
              >
                {/* RED THEME Hover Background Effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl`}
                ></div>

                {/* RED THEME Glow Effect */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-700 blur-xl rounded-3xl`}
                ></div>

                {/* Content */}
                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg`}
                  >
                    <service.icon className="w-8 h-8 text-white group-hover:scale-125 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 group-hover:text-gray-100 transition-colors duration-300 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="text-gray-400 font-semibold hover:text-white transition-colors flex items-center group animated-button">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>

                {/* BLACK & WHITE THEME Corner Accent */}
                <div className="absolute top-0 right-0 w-0 h-0 border-l-[25px] border-l-transparent border-t-[25px] border-t-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Floating Particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                      style={{
                        left: `${20 + (i * 12)}%`,
                        top: `${20 + (i * 10)}%`,
                        animationDelay: `${i * 0.2}s`,
                      }}
                    />
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <ServicesGrid />

      {/* Facilities Grid Section */}
      <FacilitiesGrid />

      {/* Features Section - Black & White Theme */}
      <section ref={featuresRef} className="py-24 sm:py-32 features-section relative">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div>
                <div className="inline-flex items-center gap-2 bg-gray-500/10 backdrop-blur-sm border border-gray-500/20 rounded-full px-6 py-3 mb-8">
                  <Award className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-300 font-medium">Why Choose Us</span>
                </div>
                <h2 className="text-5xl font-black text-white reveal-text mb-6">
                  Why Choose{" "}
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    SLAM Fitness
                  </span>
                  ?
                </h2>
                <p className="text-xl text-gray-300 reveal-text leading-relaxed">
                  Experience the difference with our state-of-the-art facilities, expert trainers, and proven results
                  that speak for themselves.
                </p>
              </div>

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
                    className="flex items-center space-x-4 feature-item group cursor-pointer hover:bg-gradient-to-r hover:from-gray-500/10 hover:to-transparent p-4 rounded-xl transition-all duration-500"
                  >
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
                <span className="relative z-10">Book Your Free Trial</span>
              </button>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6 features-image">
                <div className="space-y-6">
                  <div className="relative group overflow-hidden rounded-3xl">
                    <Image
                      src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt="Gym Equipment"
                      width={300}
                      height={400}
                      className="rounded-3xl shadow-lg hover:scale-110 hover:rotate-2 transition-all duration-700 w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                  </div>
                  <div className="bg-gradient-to-r from-gray-500/20 to-gray-600/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                    <div className="text-3xl font-bold text-white mb-2">500+</div>
                    <div className="text-gray-300">Success Stories</div>
                  </div>
                </div>
                <div className="space-y-6 mt-12">
                  <div className="bg-gradient-to-r from-gray-600/20 to-gray-700/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                    <div className="text-3xl font-bold text-white mb-2">24/7</div>
                    <div className="text-gray-300">Access Available</div>
                  </div>
                  <div className="relative group overflow-hidden rounded-3xl">
                    <Image
                      src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                      alt="Training Session"
                      width={300}
                      height={400}
                      className="rounded-3xl shadow-lg hover:scale-110 hover:-rotate-2 transition-all duration-700 w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section - BLACK & WHITE THEME */}
      <section ref={articlesRef} className="py-24 sm:py-32 articles-section relative">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gray-500/10 backdrop-blur-sm border border-gray-500/20 rounded-full px-6 py-3 mb-8">
              <Sparkles className="w-5 h-5 text-gray-400" />
              <span className="text-sm text-gray-300 font-medium">Latest Articles</span>
            </div>
            <h2 className="text-5xl font-black text-white mb-6 reveal-text">
              Latest Fitness{" "}
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Articles</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto reveal-text leading-relaxed">
              Stay updated with the latest fitness tips, workout guides, and wellness advice from our expert trainers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
            ].map((article, index) => (
              <article
                key={index}
                className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden border border-gray-700/50 article-card cursor-pointer hover:scale-105 hover:-translate-y-4"
              >
                {/* BLACK & WHITE THEME Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>

                {/* BLACK & WHITE THEME Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-gray-500/30 via-transparent to-gray-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl rounded-3xl"></div>

                <div className="relative z-10">
                  <div className="relative overflow-hidden">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      width={400}
                      height={250}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                                      {article.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-gray-500 to-gray-600 text-white px-4 py-2 rounded-full text-sm font-bold group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      Featured
                    </div>
                  )}
                                      <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm group-hover:bg-gray-500 transition-colors duration-300 border border-white/20">
                    {article.category}
                  </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-2 group-hover:text-gray-400 transition-colors duration-300">
                        <Calendar className="w-4 h-4" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center space-x-2 group-hover:text-gray-400 transition-colors duration-300">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gray-300 transition-colors duration-300 leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-gray-300 mb-6 line-clamp-3 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm text-gray-400 group-hover:text-gray-400 transition-colors duration-300 font-medium">
                          {article.author}
                        </span>
                      </div>
                      <button className="text-gray-400 font-semibold hover:text-white transition-colors flex items-center group animated-button">
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* BLACK & WHITE THEME Corner Accent */}
                <div className="absolute top-0 right-0 w-0 h-0 border-l-[30px] border-l-transparent border-t-[30px] border-t-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </article>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/blog"
              className="group relative bg-gradient-to-r from-gray-500 to-gray-600 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-[0_0_50px_rgba(107,114,128,0.5)] transition-all duration-500 flex items-center mx-auto animated-button hover:scale-110 hover:-translate-y-2 w-fit overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative z-10">View All Articles</span>
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - BLACK & WHITE THEME */}
      <section ref={ctaRef} className="py-24 sm:py-32 cta-section relative">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="cta-content">
            <div className="inline-flex items-center gap-2 bg-gray-500/10 backdrop-blur-sm border border-gray-500/20 rounded-full px-6 py-3 mb-8">
              <Flame className="w-5 h-5 text-gray-400" />
              <span className="text-sm text-gray-300 font-medium">Ready to Transform?</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-black text-white mb-8">
              Ready to Transform Your{" "}
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Life?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join thousands of members who have already achieved their fitness goals with SLAM Fitness Studio. Your
              transformation starts today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group relative bg-gradient-to-r from-gray-500 to-gray-600 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:shadow-[0_0_50px_rgba(107,114,128,0.5)] transition-all duration-500 animated-button hover:scale-110 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10">Start Free Trial</span>
              </button>
              <Link
                href="/contact"
                className="group border-2 border-white/30 backdrop-blur-sm text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white hover:text-black transition-all duration-500 animated-button hover:scale-110 hover:-translate-y-2 inline-block"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section - BLACK & WHITE THEME */}
      <section className="py-24 sm:py-32 contact-section relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-500/5 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gray-500/10 backdrop-blur-sm border border-gray-500/20 rounded-full px-6 py-3 mb-8">
              <Mail className="w-5 h-5 text-gray-400" />
              <span className="text-sm text-gray-300 font-medium">Get In Touch</span>
            </div>
            <h2 className="text-5xl font-black text-white mb-6 reveal-text">
              Get In{" "}
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto reveal-text leading-relaxed">
              Ready to start your fitness journey? Contact us today and let's discuss your goals and create a
              personalized plan for your success.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="group relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-3xl p-10 shadow-lg border border-gray-700/50 contact-form hover:shadow-2xl transition-all duration-700 hover:scale-105">
              {/* BLACK & WHITE THEME Hover Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-500/20 to-gray-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl blur-xl"></div>

              <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-8 group-hover:text-gray-300 transition-colors duration-300">
                  Send us a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-300 mb-3 group-hover:text-gray-300 transition-colors duration-300"
                      >
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-6 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all duration-300 text-white placeholder-gray-400 hover:bg-gray-700/50 hover:border-gray-400/50"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="group">
                                              <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-gray-300 mb-3 group-hover:text-gray-300 transition-colors duration-300"
                        >
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-6 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all duration-300 text-white placeholder-gray-400 hover:bg-gray-700/50 hover:border-gray-400/50"
                          placeholder="Enter your last name"
                        />
                    </div>
                  </div>
                  <div className="group">
                                          <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-3 group-hover:text-gray-300 transition-colors duration-300"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-6 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all duration-300 text-white placeholder-gray-400 hover:bg-gray-700/50 hover:border-gray-400/50"
                        placeholder="Enter your email address"
                      />
                  </div>
                  <div className="group">
                                          <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-300 mb-3 group-hover:text-gray-300 transition-colors duration-300"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-6 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all duration-300 text-white placeholder-gray-400 hover:bg-gray-700/50 hover:border-gray-400/50"
                        placeholder="Enter your phone number"
                      />
                  </div>
                  <div className="group">
                                          <label
                        htmlFor="service"
                        className="block text-sm font-medium text-gray-300 mb-3 group-hover:text-gray-300 transition-colors duration-300"
                      >
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-6 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all duration-300 text-white hover:bg-gray-700/50 hover:border-gray-400/50"
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
                        className="block text-sm font-medium text-gray-300 mb-3 group-hover:text-gray-300 transition-colors duration-300"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="w-full px-6 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all duration-300 text-white placeholder-gray-400 resize-none hover:bg-gray-700/50 hover:border-gray-400/50"
                        placeholder="Tell us about your fitness goals and how we can help you achieve them..."
                      ></textarea>
                  </div>
                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <div className="bg-green-900/20 border border-green-700/30 rounded-lg p-4 text-green-300 text-center">
                      Thank you! Your message has been sent successfully. We'll get back to you soon.
                    </div>
                  )}
                  {submitStatus === "error" && (
                    <div className="bg-red-900/20 border border-red-700/30 rounded-lg p-4 text-red-300 text-center">
                      Sorry, there was an error sending your message. Please try again.
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full bg-gradient-to-r from-gray-500 to-gray-600 text-white px-8 py-5 rounded-xl font-bold text-lg hover:shadow-[0_0_50px_rgba(107,114,128,0.5)] transition-all duration-500 flex items-center justify-center animated-button hover:scale-105 hover:-translate-y-1 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <span className="relative z-10">
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </span>
                    <Send className="ml-3 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-10 contact-info">
              <div>
                <h3 className="text-3xl font-bold text-white mb-8">Contact Information</h3>
                <p className="text-gray-300 mb-10 leading-relaxed text-lg">
                  Get in touch with us for any questions about our services, membership, or to schedule a free
                  consultation. We're here to help you achieve your fitness goals.
                </p>
              </div>

              <div className="space-y-8">
                <div className="group flex items-start space-x-6 p-6 rounded-2xl hover:bg-gradient-to-r hover:from-gray-500/10 hover:to-transparent transition-all duration-500 cursor-pointer border border-gray-700/50 hover:border-gray-500/30">
                  <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-gray-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2 text-xl group-hover:text-gray-300 transition-colors duration-300">
                      Visit Us
                    </h4>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                      #18/70, Halls Road, Kilpauk,
                      <br />
                      Chennai – 600 010, India
                    </p>
                  </div>
                </div>

                <div className="group flex items-start space-x-6 p-6 rounded-2xl hover:bg-gradient-to-r hover:from-gray-500/10 hover:to-transparent transition-all duration-500 cursor-pointer border border-gray-700/50 hover:border-gray-500/30">
                  <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-gray-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2 text-xl group-hover:text-gray-300 transition-colors duration-300">
                      Call Us
                    </h4>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                      +91 98414 63406
                      <br />
                      +91 70944 79145
                    </p>
                  </div>
                </div>

                <div className="group flex items-start space-x-6 p-6 rounded-2xl hover:bg-gradient-to-r hover:from-gray-500/10 hover:to-transparent transition-all duration-500 cursor-pointer border border-gray-700/50 hover:border-gray-500/30">
                  <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-gray-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2 text-xl group-hover:text-gray-300 transition-colors duration-300">
                      Email Us
                    </h4>
                    <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                      info@slamfitnessstudio.in
                      <br />
                      sureshs@paulsons.in
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-xl rounded-3xl p-8 shadow-lg border border-gray-700/50 hover:shadow-2xl transition-all duration-700 hover:scale-105 cursor-pointer">
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-500/20 to-gray-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl blur-xl"></div>
              <div className="relative z-10">
                <h4 className="font-bold text-white mb-6 text-xl group-hover:text-gray-300 transition-colors duration-300">
                  Business Hours
                </h4>
                <div className="space-y-4 text-gray-300">
                  <div className="flex justify-between items-center group-hover:text-gray-200 transition-colors duration-300 py-2 border-b border-gray-700/50">
                    <span className="font-medium">Monday - Friday</span>
                    <span className="text-gray-400 font-semibold">6:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center group-hover:text-gray-200 transition-colors duration-300 py-2 border-b border-gray-700/50">
                    <span className="font-medium">Saturday</span>
                    <span className="text-gray-400 font-semibold">6:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center group-hover:text-gray-200 transition-colors duration-300 py-2">
                    <span className="font-medium">Sunday</span>
                    <span className="text-gray-400 font-semibold">7:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}
