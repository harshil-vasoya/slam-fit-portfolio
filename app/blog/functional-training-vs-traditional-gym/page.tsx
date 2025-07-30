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

export default function FunctionalTrainingBlog() {
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
                  <span className="text-sm text-gray-300 font-medium">Training</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
                  <span className="hero-title block">Functional Training vs</span>
                  <span className="text-gradient hero-title block bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent bg-size-200 animate-gradient-x">
                    Traditional Gym Workouts
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 hero-subtitle leading-relaxed">
                  Compare the benefits of functional training with traditional gym workouts and find out which approach suits your goals. 
                  <span className="text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text font-semibold">
                    Expert analysis and recommendations
                  </span> to help you choose the right training method.
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
                    <span className="font-bold stat-number text-lg leading-none">Alex Rodriguez</span>
                    <span className="text-gray-300 text-sm leading-tight">Training Expert</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-4 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Nov 8, 2024</span>
                </div>
                <div className="w-1 h-4 bg-gray-600"></div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">8 min read</span>
                </div>
              </div>
            </div>

            <div className="relative order-first lg:order-last flex justify-center lg:justify-end">
              <div className="relative z-10 group w-full h-full">
                <div className="relative overflow-hidden rounded-3xl w-full h-full">
                  <Image
                    src="/gym/blog4.png"
                    alt="Functional Training vs Traditional Gym"
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
              <h2 className="text-3xl font-bold text-white mb-6">Understanding the Difference</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                The fitness world is divided between two main training approaches: functional training and traditional gym workouts. 
                While both can help you achieve your fitness goals, they differ significantly in their philosophy, methodology, and outcomes. 
                Understanding these differences is crucial for choosing the approach that best aligns with your objectives.
              </p>
            </div>

            <div className="space-y-8 reveal-text mt-12">
              <h2 className="text-3xl font-bold text-white mb-6">What is Functional Training?</h2>
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Functional training focuses on exercises that mimic real-life movements and activities. It emphasizes training your body 
                  to work as a complete unit rather than isolating individual muscles.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-white font-semibold mb-3">Key Characteristics:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Multi-joint movements</li>
                      <li>• Real-world application</li>
                      <li>• Core engagement</li>
                      <li>• Balance and stability</li>
                      <li>• Movement patterns</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-3">Common Exercises:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Squats and lunges</li>
                      <li>• Deadlifts</li>
                      <li>• Push-ups and pull-ups</li>
                      <li>• Planks and bridges</li>
                      <li>• Medicine ball throws</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 reveal-text mt-12">
              <h2 className="text-3xl font-bold text-white mb-6">What is Traditional Gym Training?</h2>
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Traditional gym training typically involves machine-based exercises and isolated movements that target specific muscle groups. 
                  It often follows a bodybuilding-style approach with focus on muscle hypertrophy and strength gains.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-white font-semibold mb-3">Key Characteristics:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Single-joint movements</li>
                      <li>• Muscle isolation</li>
                      <li>• Machine-based exercises</li>
                      <li>• Repetition-based</li>
                      <li>• Progressive overload</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-3">Common Exercises:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li>• Bicep curls</li>
                      <li>• Leg extensions</li>
                      <li>• Chest press machine</li>
                      <li>• Lat pulldowns</li>
                      <li>• Shoulder press</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 reveal-text mt-16">
              <h2 className="text-3xl font-bold text-white mb-6">Benefits Comparison</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Functional Training Benefits */}
                <div className="bg-green-900/20 backdrop-blur-sm rounded-2xl p-6 border border-green-700/30">
                  <h3 className="text-xl font-bold text-white mb-4">Functional Training Benefits</h3>
                  <div className="space-y-3">
                    {[
                      "Improved daily movement patterns",
                      "Better balance and coordination",
                      "Enhanced core strength",
                      "Reduced injury risk",
                      "Better sports performance",
                      "Increased flexibility",
                      "More efficient workouts",
                      "Real-world applicability"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Traditional Gym Benefits */}
                <div className="bg-blue-900/20 backdrop-blur-sm rounded-2xl p-6 border border-blue-700/30">
                  <h3 className="text-xl font-bold text-white mb-4">Traditional Gym Benefits</h3>
                  <div className="space-y-3">
                    {[
                      "Targeted muscle growth",
                      "Easier to track progress",
                      "Lower learning curve",
                      "Consistent resistance",
                      "Good for beginners",
                      "Isolated strength gains",
                      "Predictable results",
                      "Equipment variety"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 reveal-text mt-16">
              <h2 className="text-3xl font-bold text-white mb-6">Which Approach is Right for You?</h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Choose Functional Training If:",
                    reasons: [
                      "You want to improve daily life activities",
                      "You're an athlete or play sports",
                      "You want to prevent injuries",
                      "You prefer dynamic, varied workouts",
                      "You want to improve balance and coordination"
                    ]
                  },
                  {
                    title: "Choose Traditional Gym If:",
                    reasons: [
                      "You want to build specific muscle groups",
                      "You're new to fitness and want structure",
                      "You prefer controlled, predictable movements",
                      "You want to track specific muscle gains",
                      "You enjoy using machines and equipment"
                    ]
                  },
                  {
                    title: "Consider a Hybrid Approach If:",
                    reasons: [
                      "You want the benefits of both methods",
                      "You have diverse fitness goals",
                      "You want to prevent workout plateaus",
                      "You enjoy variety in your training",
                      "You want comprehensive fitness development"
                    ]
                  }
                ].map((section, index) => (
                  <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                    <h3 className="text-xl font-bold text-white mb-4">{section.title}</h3>
                    <div className="space-y-2">
                      {section.reasons.map((reason, reasonIndex) => (
                        <div key={reasonIndex} className="flex items-center space-x-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm">{reason}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8 reveal-text mt-16">
              <h2 className="text-3xl font-bold text-white mb-6">Sample Workout Comparison</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Functional Training Workout */}
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                  <h3 className="text-xl font-bold text-white mb-4">Functional Training Workout</h3>
                  <div className="space-y-3">
                    {[
                      "Warm-up: Dynamic stretching (10 min)",
                      "Circuit 1 (3 rounds):",
                      "• Squat to overhead press (12 reps)",
                      "• Push-ups (10 reps)",
                      "• Mountain climbers (30 sec)",
                      "Circuit 2 (3 rounds):",
                      "• Deadlifts (10 reps)",
                      "• Plank with leg lifts (30 sec)",
                      "• Burpees (8 reps)",
                      "Cool-down: Static stretching (10 min)"
                    ].map((exercise, index) => (
                      <div key={index} className="text-gray-300 text-sm">
                        {exercise}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Traditional Gym Workout */}
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                  <h3 className="text-xl font-bold text-white mb-4">Traditional Gym Workout</h3>
                  <div className="space-y-3">
                    {[
                      "Warm-up: Light cardio (10 min)",
                      "Chest and Triceps:",
                      "• Bench press (3x10)",
                      "• Incline dumbbell press (3x12)",
                      "• Chest fly machine (3x15)",
                      "• Tricep pushdowns (3x12)",
                      "• Overhead tricep extensions (3x15)",
                      "Cool-down: Stretching (10 min)"
                    ].map((exercise, index) => (
                      <div key={index} className="text-gray-300 text-sm">
                        {exercise}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 reveal-text mt-16">
              <h2 className="text-3xl font-bold text-white mb-6">Expert Recommendations</h2>
              <div className="bg-gradient-to-r from-gray-500/20 to-gray-600/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-white font-semibold mb-3">For Beginners:</h4>
                    <p className="text-gray-300">Start with traditional gym training to build basic strength and learn proper form, then gradually incorporate functional movements.</p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-3">For Intermediate:</h4>
                    <p className="text-gray-300">Combine both approaches - use traditional training for strength building and functional training for movement quality.</p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-3">For Advanced:</h4>
                    <p className="text-gray-300">Focus on functional training with advanced movements and use traditional training for specific muscle development.</p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-3">For Athletes:</h4>
                    <p className="text-gray-300">Prioritize functional training that mimics your sport's movement patterns, with traditional training for strength support.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 reveal-text mt-16">
              <h2 className="text-3xl font-bold text-white mb-6">Conclusion</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Both functional training and traditional gym workouts have their place in a comprehensive fitness program. The key is to 
                understand your goals, current fitness level, and preferences to choose the approach that will work best for you.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Remember that the best training program is the one you'll stick to consistently. Whether you choose functional training, 
                traditional gym workouts, or a combination of both, the most important factor is your commitment to regular exercise and 
                progressive improvement over time.
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
              <span className="text-sm text-gray-300 font-medium">Ready to Choose?</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-black text-white mb-8">
              Find Your{" "}
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Training Style</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Work with our expert trainers to determine the best training approach for your goals and create a personalized program that will maximize your results.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="group relative bg-gradient-to-r from-gray-500 to-gray-600 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:shadow-[0_0_50px_rgba(107,114,128,0.5)] transition-all duration-500 animated-button hover:scale-110 hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10">Get Training Plan</span>
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