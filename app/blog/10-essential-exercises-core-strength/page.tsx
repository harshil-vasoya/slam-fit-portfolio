"use client"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Star,
  BookOpen,
  CheckCircle,
  Target,
  Zap,
  Heart,
  TrendingUp,
  Dumbbell,
} from "lucide-react"
import { useGSAP } from "../../../lib/useGSAP"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function CoreStrengthBlog() {
  const scope = useGSAP()
  const heroRef = useRef(null)

  useGSAP(() => {
    // Set initial states
    gsap.set(".hero-title", { y: 100, opacity: 0 })
    gsap.set(".hero-subtitle", { y: 50, opacity: 0 })
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

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative pt-24 pb-16 overflow-hidden hero-section min-h-screen flex items-center"
      >
        <div className="absolute inset-0">
          {/* Black & White themed floating elements */}
          <div className="absolute top-25 right-4 md:right-40 w-20 h-20 md:w-32 md:h-32 bg-gradient-to-br from-gray-600/30 to-gray-700/30 rounded-3xl floating backdrop-blur-xl border border-white/10 shadow-2xl">
            <Dumbbell className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-16 md:h-16 text-gray-400" />
          </div>
          <div className="absolute top-1/2 right-2 md:right-20 w-18 h-18 md:w-24 md:h-24 bg-gradient-to-br from-gray-500/30 to-gray-600/30 rounded-3xl floating backdrop-blur-xl border border-white/10 shadow-2xl">
            <Target className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 text-gray-400" />
          </div>
          <div className="absolute bottom-40 right-1/3 w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br from-gray-400/30 to-gray-600/30 rounded-3xl floating pulse-element backdrop-blur-xl border border-white/10 shadow-2xl">
            <Zap className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-7 h-7 md:w-10 md:h-10 text-gray-400" />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8 lg:space-y-12 text-center lg:text-left max-w-2xl lg:max-w-none mx-auto lg:mx-0">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-gray-500/10 backdrop-blur-sm border border-gray-500/20 rounded-full px-6 py-3 mb-8">
                  <BookOpen className="w-5 h-5 text-gray-400" />
                  <span className="text-sm text-gray-300 font-medium">Workouts</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
                  <span className="hero-title block">10 Essential Exercises</span>
                  <span className="text-gradient hero-title block bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent bg-size-200 animate-gradient-x">
                    for Core Strength
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 hero-subtitle leading-relaxed">
                  Discover the most effective core exercises that will help you build a strong foundation and improve your overall fitness performance. 
                  <span className="text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text font-semibold">
                    Learn proper form and progression techniques
                  </span> for maximum results.
                </p>
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
                    <span className="text-gray-300 text-sm leading-tight">(500+ reviews)</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3 group cursor-pointer">
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 flex-shrink-0">
                    <User className="text-white w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold stat-number text-lg leading-none">Sarah Johnson</span>
                    <span className="text-gray-300 text-sm leading-tight">Fitness Expert</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-4 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Nov 15, 2024</span>
                </div>
                <div className="w-1 h-4 bg-gray-600"></div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">5 min read</span>
                </div>
              </div>
            </div>

            <div className="relative order-first lg:order-last flex justify-center lg:justify-end">
              <div className="relative z-10 group w-full h-full">
                <div className="relative overflow-hidden rounded-3xl w-full h-full">
                  <Image
                    src="/gym/blog1.png"
                    alt="Core Strength Exercises"
                    width={800}
                    height={800}
                    className="rounded-3xl shadow-2xl hero-image w-full h-auto group-hover:scale-110 transition-transform duration-700 object-cover"
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

      {/* Back to Blog Button */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Back to Blog</span>
          </Link>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="space-y-8 reveal-text">
              <h2 className="text-3xl font-bold text-white mb-6">Why Core Strength Matters</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Your core is the foundation of all movement. A strong core improves posture, balance, and stability while reducing the risk of injury. 
                Whether you're lifting weights, running, or simply going about your daily activities, a strong core is essential for optimal performance.
              </p>
            </div>

            <div className="space-y-8 reveal-text mt-12">
              <h2 className="text-3xl font-bold text-white mb-6">The 10 Essential Core Exercises</h2>
              
              <div className="space-y-8">
                {[
                  {
                    title: "1. Plank",
                    description: "The foundation of all core exercises. Hold a straight-arm plank position for 30-60 seconds, focusing on maintaining a neutral spine.",
                    benefits: ["Improves overall stability", "Engages entire core", "Builds endurance"]
                  },
                  {
                    title: "2. Dead Bug",
                    description: "Lie on your back with arms extended and knees bent. Slowly extend opposite arm and leg while keeping your core engaged.",
                    benefits: ["Improves coordination", "Strengthens deep core muscles", "Reduces back pain"]
                  },
                  {
                    title: "3. Bird Dog",
                    description: "Start on hands and knees. Extend opposite arm and leg while maintaining balance and keeping your core tight.",
                    benefits: ["Enhances balance", "Improves posture", "Strengthens back muscles"]
                  },
                  {
                    title: "4. Russian Twist",
                    description: "Sit with knees bent and feet off the ground. Rotate your torso from side to side while holding a weight or medicine ball.",
                    benefits: ["Targets obliques", "Improves rotational strength", "Enhances athletic performance"]
                  },
                  {
                    title: "5. Mountain Climbers",
                    description: "Start in a plank position and alternate bringing knees toward chest in a running motion.",
                    benefits: ["Cardiovascular benefits", "Full body engagement", "Improves coordination"]
                  },
                  {
                    title: "6. Bicycle Crunches",
                    description: "Lie on your back and perform a cycling motion with your legs while touching opposite elbow to knee.",
                    benefits: ["Targets rectus abdominis", "Improves flexibility", "Low impact option"]
                  },
                  {
                    title: "7. Side Plank",
                    description: "Hold a plank position on your side, supporting your body weight on one forearm and the side of your foot.",
                    benefits: ["Strengthens obliques", "Improves lateral stability", "Enhances shoulder stability"]
                  },
                  {
                    title: "8. Hollow Hold",
                    description: "Lie on your back and lift shoulders and legs off the ground, creating a 'hollow' position with your body.",
                    benefits: ["Gymnastics-style strength", "Improves body control", "Builds isometric strength"]
                  },
                  {
                    title: "9. Reverse Crunches",
                    description: "Lie on your back and lift your hips off the ground by bringing your knees toward your chest.",
                    benefits: ["Targets lower abs", "Reduces neck strain", "Improves hip mobility"]
                  },
                  {
                    title: "10. Pallof Press",
                    description: "Stand sideways to a cable machine or resistance band. Press the handle straight out while resisting rotation.",
                    benefits: ["Anti-rotation training", "Improves functional strength", "Enhances sports performance"]
                  }
                ].map((exercise, index) => (
                  <div key={index} className="bg-black backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:bg-gray-800/50 transition-all duration-300">
                    <h3 className="text-xl font-bold text-white mb-4">{exercise.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{exercise.description}</p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Benefits:</h4>
                      <ul className="space-y-1">
                        {exercise.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center space-x-2 text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8 reveal-text mt-16">
              <h2 className="text-3xl font-bold text-white mb-6">Progression Tips</h2>
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">For Beginners</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Start with 2-3 sets of 10-15 reps</li>
                      <li>• Focus on form over quantity</li>
                      <li>• Rest 60-90 seconds between sets</li>
                      <li>• Perform 2-3 times per week</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">For Advanced</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Increase to 3-4 sets of 15-20 reps</li>
                      <li>• Add resistance (weights, bands)</li>
                      <li>• Reduce rest periods to 30-45 seconds</li>
                      <li>• Perform 3-4 times per week</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 reveal-text mt-16">
              <h2 className="text-3xl font-bold text-white mb-6">Sample Workout Routine</h2>
              <div className="bg-gradient-to-r from-gray-500/20 to-gray-600/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-xl font-bold text-white mb-6">Core Strength Circuit</h3>
                <div className="space-y-4">
                  {[
                    "Plank - 45 seconds",
                    "Dead Bug - 12 reps each side",
                    "Bird Dog - 10 reps each side",
                    "Russian Twist - 20 reps total",
                    "Mountain Climbers - 30 seconds",
                    "Side Plank - 30 seconds each side",
                    "Bicycle Crunches - 15 reps",
                    "Hollow Hold - 30 seconds",
                    "Reverse Crunches - 12 reps",
                    "Pallof Press - 10 reps each side"
                  ].map((exercise, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 bg-gray-800/30 rounded-lg">
                      <div className="w-8 h-8 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <span className="text-gray-300">{exercise}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-gray-800/50 rounded-lg">
                  <p className="text-gray-300 text-sm">
                    <strong>Rest:</strong> 60 seconds between rounds. Complete 2-3 rounds total.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8 reveal-text mt-16">
              <h2 className="text-3xl font-bold text-white mb-6">Conclusion</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Building core strength is a journey that requires consistency and proper progression. Start with these 10 essential exercises, 
                focus on maintaining proper form, and gradually increase the difficulty as you get stronger. Remember, a strong core is the 
                foundation for all other fitness goals, so make it a priority in your training routine.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                For personalized guidance and to ensure you're performing these exercises correctly, consider working with one of our 
                certified personal trainers who can create a customized core training program tailored to your specific needs and goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 cta-section relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="cta-content">
            <div className="inline-flex items-center gap-2 bg-gray-500/10 backdrop-blur-sm border border-gray-500/20 rounded-full px-6 py-3 mb-8">
              <Heart className="w-5 h-5 text-gray-400" />
              <span className="text-sm text-gray-300 font-medium">Ready to Build Strength?</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-black text-white mb-8">
              Start Your{" "}
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Core Journey</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join SLAM Fitness and work with our expert trainers to develop a strong, functional core that will enhance all aspects of your fitness journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="group relative bg-gradient-to-r from-gray-500 to-gray-600 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:shadow-[0_0_50px_rgba(107,114,128,0.5)] transition-all duration-500 animated-button hover:scale-110 hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10">Get Started Today</span>
              </Link>
              <Link
                href="/blog"
                className="group border-2 border-white/30 backdrop-blur-sm text-white px-12 py-6 rounded-2xl font-bold text-xl hover:bg-white hover:text-black transition-all duration-500 animated-button hover:scale-110 hover:-translate-y-2 inline-block"
              >
                Read More Articles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 