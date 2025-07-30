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
  Apple,
  Coffee,
} from "lucide-react"
import { useGSAP } from "../../../lib/useGSAP"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function PreWorkoutNutritionBlog() {
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
            <Apple className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-16 md:h-16 text-gray-400" />
          </div>
          <div className="absolute top-1/2 right-2 md:right-20 w-18 h-18 md:w-24 md:h-24 bg-gradient-to-br from-gray-500/30 to-gray-600/30 rounded-3xl floating backdrop-blur-xl border border-white/10 shadow-2xl">
            <Coffee className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 text-gray-400" />
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
                  <span className="text-sm text-gray-300 font-medium">Nutrition</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
                  <span className="hero-title block">The Ultimate Guide to</span>
                  <span className="text-gradient hero-title block bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent bg-size-200 animate-gradient-x">
                    Pre-Workout Nutrition
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 hero-subtitle leading-relaxed">
                  Learn what to eat before your workout to maximize energy, performance, and recovery for better results. 
                  <span className="text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text font-semibold">
                    Complete meal timing and food recommendations included
                  </span> for optimal performance.
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
                    <span className="font-bold stat-number text-lg leading-none">Mike Chen</span>
                    <span className="text-gray-300 text-sm leading-tight">Nutrition Expert</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-4 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Nov 12, 2024</span>
                </div>
                <div className="w-1 h-4 bg-gray-600"></div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">7 min read</span>
                </div>
              </div>
            </div>

            <div className="relative order-first lg:order-last flex justify-center lg:justify-end">
              <div className="relative z-10 group w-full h-full">
                <div className="relative overflow-hidden rounded-3xl w-full h-full">
                  <Image
                    src="/gym/nutrition.png"
                    alt="Pre-Workout Nutrition"
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
              <h2 className="text-3xl font-bold text-white mb-6">Why Pre-Workout Nutrition Matters</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                What you eat before your workout can make the difference between a mediocre session and an outstanding performance. 
                Proper pre-workout nutrition provides the fuel your body needs to perform at its best, enhances recovery, and helps you achieve your fitness goals faster.
              </p>
            </div>

            <div className="space-y-8 reveal-text mt-12">
              <h2 className="text-3xl font-bold text-white mb-6">Key Nutrients for Pre-Workout</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Carbohydrates",
                    description: "Your body's primary fuel source for high-intensity exercise",
                    foods: ["Oats", "Banana", "Sweet potato", "Rice", "Bread"],
                    timing: "2-3 hours before"
                  },
                  {
                    title: "Protein",
                    description: "Helps with muscle repair and prevents muscle breakdown",
                    foods: ["Greek yogurt", "Chicken", "Eggs", "Protein shake", "Cottage cheese"],
                    timing: "2-3 hours before"
                  },
                  {
                    title: "Healthy Fats",
                    description: "Provides sustained energy for longer workouts",
                    foods: ["Nuts", "Avocado", "Olive oil", "Nut butter", "Seeds"],
                    timing: "3-4 hours before"
                  },
                  {
                    title: "Hydration",
                    description: "Essential for performance and preventing dehydration",
                    foods: ["Water", "Coconut water", "Electrolyte drinks"],
                    timing: "Throughout the day"
                  }
                ].map((nutrient, index) => (
                  <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:bg-gray-800/50 transition-all duration-300">
                    <h3 className="text-xl font-bold text-white mb-3">{nutrient.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm">{nutrient.description}</p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Best Sources:</h4>
                      <div className="flex flex-wrap gap-2">
                        {nutrient.foods.map((food, foodIndex) => (
                          <span key={foodIndex} className="px-2 py-1 bg-gray-800/50 rounded-full text-xs text-gray-300">
                            {food}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-gray-400 mt-2">
                        <strong>Timing:</strong> {nutrient.timing}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8 reveal-text mt-16">
              <h2 className="text-3xl font-bold text-white mb-6">Pre-Workout Meal Timing</h2>
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <div className="space-y-6">
                  {[
                    {
                      time: "3-4 hours before",
                      meal: "Large meal",
                      description: "Complex carbs, protein, and healthy fats",
                      example: "Grilled chicken with brown rice and vegetables"
                    },
                    {
                      time: "2-3 hours before",
                      meal: "Medium meal",
                      description: "Moderate carbs and protein",
                      example: "Greek yogurt with berries and granola"
                    },
                    {
                      time: "1-2 hours before",
                      meal: "Light snack",
                      description: "Simple carbs and minimal protein",
                      example: "Banana with almond butter"
                    },
                    {
                      time: "30-60 minutes before",
                      meal: "Quick fuel",
                      description: "Fast-digesting carbs",
                      example: "Energy gel or sports drink"
                    }
                  ].map((timing, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-gray-800/30 rounded-lg">
                      <div className="w-12 h-12 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-white font-semibold">{timing.time}</span>
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-300 font-medium">{timing.meal}</span>
                        </div>
                        <p className="text-gray-300 text-sm mb-1">{timing.description}</p>
                        <p className="text-gray-400 text-xs italic">Example: {timing.example}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8 reveal-text mt-16">
              <h2 className="text-3xl font-bold text-white mb-6">Sample Pre-Workout Meals</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Early Morning Workout",
                    meals: [
                      "Overnight oats with berries and protein powder",
                      "Banana with almond butter",
                      "Greek yogurt with honey"
                    ]
                  },
                  {
                    title: "Mid-Morning Workout",
                    meals: [
                      "Whole grain toast with eggs and avocado",
                      "Smoothie with protein, banana, and spinach",
                      "Apple with peanut butter"
                    ]
                  },
                  {
                    title: "Afternoon Workout",
                    meals: [
                      "Grilled chicken with quinoa and vegetables",
                      "Tuna sandwich on whole grain bread",
                      "Protein shake with banana"
                    ]
                  },
                  {
                    title: "Evening Workout",
                    meals: [
                      "Salmon with sweet potato and broccoli",
                      "Turkey wrap with vegetables",
                      "Cottage cheese with fruit"
                    ]
                  }
                ].map((workout, index) => (
                  <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                    <h3 className="text-xl font-bold text-white mb-4">{workout.title}</h3>
                    <div className="space-y-2">
                      {workout.meals.map((meal, mealIndex) => (
                        <div key={mealIndex} className="flex items-center space-x-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>{meal}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8 reveal-text mt-16">
              <h2 className="text-3xl font-bold text-white mb-6">What to Avoid Before Workouts</h2>
              <div className="bg-red-900/20 backdrop-blur-sm rounded-2xl p-6 border border-red-700/30">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "High-fat foods (slow digestion)",
                    "Excessive fiber (causes bloating)",
                    "Spicy foods (digestive discomfort)",
                    "Large portions (feeling sluggish)",
                    "Alcohol (dehydration)",
                    "Caffeine (if sensitive)",
                    "Sugary foods (energy crash)",
                    "Dairy (if lactose intolerant)"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-2 text-gray-300">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8 reveal-text mt-16">
              <h2 className="text-3xl font-bold text-white mb-6">Hydration Guidelines</h2>
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">16-20</span>
                    </div>
                    <h4 className="text-white font-semibold mb-2">2-3 hours before</h4>
                    <p className="text-gray-300 text-sm">16-20 oz of water</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">8-10</span>
                    </div>
                    <h4 className="text-white font-semibold mb-2">30 minutes before</h4>
                    <p className="text-gray-300 text-sm">8-10 oz of water</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">7-10</span>
                    </div>
                    <h4 className="text-white font-semibold mb-2">Every 10-20 min</h4>
                    <p className="text-gray-300 text-sm">7-10 oz during workout</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 reveal-text mt-16">
              <h2 className="text-3xl font-bold text-white mb-6">Conclusion</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Pre-workout nutrition is a crucial component of your fitness journey that can significantly impact your performance and results. 
                By understanding the timing, choosing the right foods, and staying properly hydrated, you can maximize your workout potential 
                and accelerate your progress toward your fitness goals.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Remember that everyone is different, so it's important to experiment and find what works best for your body and schedule. 
                Start with these guidelines and adjust based on how you feel during your workouts. For personalized nutrition advice, 
                consider consulting with our nutrition experts who can create a customized plan tailored to your specific needs and goals.
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
              <span className="text-sm text-gray-300 font-medium">Ready to Optimize?</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-black text-white mb-8">
              Fuel Your{" "}
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Performance</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Work with our nutrition experts to create a personalized pre-workout nutrition plan that will maximize your performance and help you achieve your fitness goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="group relative bg-gradient-to-r from-gray-500 to-gray-600 text-white px-12 py-6 rounded-2xl font-bold text-xl hover:shadow-[0_0_50px_rgba(107,114,128,0.5)] transition-all duration-500 animated-button hover:scale-110 hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10">Get Nutrition Plan</span>
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