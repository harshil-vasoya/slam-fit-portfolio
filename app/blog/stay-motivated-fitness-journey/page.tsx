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
  Brain,
} from "lucide-react"
import { useGSAP } from "../../../lib/useGSAP"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function MotivationBlog() {
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
            <Brain className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-16 md:h-16 text-gray-400" />
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
                  <span className="text-sm text-gray-300 font-medium">Wellness</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
                  <span className="hero-title block">How to Stay Motivated</span>
                  <span className="text-gradient hero-title block bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent bg-size-200 animate-gradient-x">
                    on Your Fitness Journey
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 hero-subtitle leading-relaxed">
                  Practical tips and strategies to maintain motivation and consistency in your fitness routine for long-term success. 
                  <span className="text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text font-semibold">
                    Overcome common obstacles and build lasting habits
                  </span> that will transform your life.
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
                    <span className="font-bold stat-number text-lg leading-none">Emma Davis</span>
                    <span className="text-gray-300 text-sm leading-tight">Wellness Coach</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-4 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Nov 10, 2024</span>
                </div>
                <div className="w-1 h-4 bg-gray-600"></div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">6 min read</span>
                </div>
              </div>
            </div>

            <div className="relative order-first lg:order-last flex justify-center lg:justify-end">
              <div className="relative z-10 group w-full h-full">
                <div className="relative overflow-hidden rounded-3xl w-full h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Fitness Motivation"
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
              <h2 className="text-3xl font-bold text-white mb-6">The Motivation Challenge</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Staying motivated on your fitness journey is one of the biggest challenges people face. Whether you're just starting out or 
                you've been working out for years, maintaining consistency can be difficult. The good news is that motivation is a skill that 
                can be developed and strengthened over time.
              </p>
            </div>

            <div className="space-y-8 reveal-text mt-12">
              <h2 className="text-3xl font-bold text-white mb-6">10 Proven Motivation Strategies</h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: "1. Set SMART Goals",
                    description: "Specific, Measurable, Achievable, Relevant, and Time-bound goals give you clear direction and purpose.",
                    tips: ["Write down your goals", "Break them into smaller milestones", "Track your progress regularly"]
                  },
                  {
                    title: "2. Find Your 'Why'",
                    description: "Understanding your deeper motivation helps you push through difficult times.",
                    tips: ["Ask yourself why fitness matters to you", "Connect to your values", "Visualize your future self"]
                  },
                  {
                    title: "3. Create a Routine",
                    description: "Consistency is key. Build exercise into your daily schedule like any other important appointment.",
                    tips: ["Schedule workouts in advance", "Choose consistent times", "Start with small commitments"]
                  },
                  {
                    title: "4. Track Your Progress",
                    description: "Seeing improvement keeps you motivated and shows that your efforts are paying off.",
                    tips: ["Keep a workout journal", "Take progress photos", "Use fitness apps"]
                  },
                  {
                    title: "5. Find What You Enjoy",
                    description: "Exercise should be enjoyable, not punishment. Try different activities until you find what you love.",
                    tips: ["Experiment with different workouts", "Join group classes", "Try outdoor activities"]
                  },
                  {
                    title: "6. Build a Support System",
                    description: "Surround yourself with people who support your fitness goals and understand your journey.",
                    tips: ["Find a workout buddy", "Join fitness communities", "Share your goals with friends"]
                  },
                  {
                    title: "7. Celebrate Small Wins",
                    description: "Acknowledge and celebrate every achievement, no matter how small.",
                    tips: ["Reward yourself for consistency", "Track streaks", "Share achievements with others"]
                  },
                  {
                    title: "8. Prepare for Obstacles",
                    description: "Anticipate challenges and have a plan for dealing with them when they arise.",
                    tips: ["Identify potential barriers", "Create backup plans", "Practice self-compassion"]
                  },
                  {
                    title: "9. Focus on Process Over Outcome",
                    description: "Enjoy the journey and focus on the daily actions rather than just the end result.",
                    tips: ["Appreciate how exercise makes you feel", "Focus on effort and consistency", "Practice mindfulness"]
                  },
                  {
                    title: "10. Keep Learning",
                    description: "Stay curious and continue learning about fitness, nutrition, and wellness.",
                    tips: ["Read fitness blogs and books", "Try new exercises", "Work with trainers"]
                  }
                ].map((strategy, index) => (
                  <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:bg-gray-800/50 transition-all duration-300">
                    <h3 className="text-xl font-bold text-white mb-4">{strategy.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{strategy.description}</p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Action Steps:</h4>
                      <ul className="space-y-1">
                        {strategy.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-center space-x-2 text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-sm">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8 reveal-text mt-16">
              <h2 className="text-3xl font-bold text-white mb-6">Overcoming Common Obstacles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    obstacle: "Lack of Time",
                    solution: "Schedule workouts like important meetings. Even 15-20 minutes is better than nothing.",
                    tip: "Use time-blocking techniques"
                  },
                  {
                    obstacle: "Low Energy",
                    solution: "Start with gentle exercises and gradually increase intensity. Focus on consistency over intensity.",
                    tip: "Try morning workouts when energy is highest"
                  },
                  {
                    obstacle: "Boredom",
                    solution: "Mix up your routine regularly. Try new exercises, classes, or outdoor activities.",
                    tip: "Create themed workout playlists"
                  },
                  {
                    obstacle: "Plateaus",
                    solution: "Change your routine every 4-6 weeks. Increase intensity, try new exercises, or adjust your goals.",
                    tip: "Focus on non-scale victories"
                  },
                  {
                    obstacle: "Social Pressure",
                    solution: "Surround yourself with supportive people. Remember that your fitness journey is personal.",
                    tip: "Find like-minded fitness communities"
                  },
                  {
                    obstacle: "Perfectionism",
                    solution: "Focus on progress, not perfection. Every workout counts, even if it's not perfect.",
                    tip: "Practice self-compassion and celebrate effort"
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                    <h3 className="text-lg font-bold text-white mb-3">{item.obstacle}</h3>
                    <p className="text-gray-300 mb-3 text-sm">{item.solution}</p>
                    <p className="text-gray-400 text-xs italic">💡 {item.tip}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8 reveal-text mt-16">
              <h2 className="text-3xl font-bold text-white mb-6">Building Lasting Habits</h2>
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">21</span>
                    </div>
                    <h4 className="text-white font-semibold mb-2">Days to Form</h4>
                    <p className="text-gray-300 text-sm">It takes about 21 days to form a new habit</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">66</span>
                    </div>
                    <h4 className="text-white font-semibold mb-2">Days to Automate</h4>
                    <p className="text-gray-300 text-sm">66 days for a habit to become automatic</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-xl">90</span>
                    </div>
                    <h4 className="text-white font-semibold mb-2">Days to Master</h4>
                    <p className="text-gray-300 text-sm">90 days to fully master a new habit</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 reveal-text mt-16">
              <h2 className="text-3xl font-bold text-white mb-6">Daily Motivation Checklist</h2>
              <div className="bg-gradient-to-r from-gray-500/20 to-gray-600/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <div className="space-y-4">
                  {[
                    "Set my intention for today's workout",
                    "Review my goals and progress",
                    "Prepare my workout clothes and gear",
                    "Plan my post-workout meal",
                    "Connect with my support system",
                    "Practice positive self-talk",
                    "Focus on how exercise makes me feel",
                    "Celebrate completing my workout"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 p-3 bg-gray-800/30 rounded-lg">
                      <div className="w-8 h-8 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8 reveal-text mt-16">
              <h2 className="text-3xl font-bold text-white mb-6">Conclusion</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Motivation is not a finite resource that you either have or don't have. It's a skill that can be developed, strengthened, 
                and maintained through consistent practice and the right strategies. Remember that every fitness journey is unique, and what 
                works for one person may not work for another.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                The key is to experiment with different strategies, be patient with yourself, and focus on building sustainable habits rather 
                than relying on willpower alone. With time and practice, you'll develop the motivation and consistency needed to achieve your 
                fitness goals and maintain a healthy, active lifestyle for years to come.
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
              <span className="text-sm text-gray-300 font-medium">Ready to Stay Motivated?</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-black text-white mb-8">
              Start Your{" "}
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Motivation Journey</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join our supportive community and work with our expert coaches who will help you build lasting motivation and achieve your fitness goals.
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