"use client"
import Image from "next/image"
import Link from "next/link"
import {
  Award,
  Users,
  Target,
  Heart,
  CheckCircle,
  Sparkles,
  Flame,
  TrendingUp,
  ArrowRight,
  Star,
  Zap,
  Shield,
  Clock,
} from "lucide-react"
import { useGSAP } from "../../lib/useGSAP"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function About() {
  const scope = useGSAP()

  return (
    <div
      ref={scope}
      className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black overflow-x-hidden relative"
    >
      {/* Enhanced Animated Background */}
      {/* <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(107,114,128,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(107,114,128,0.15)_1px,transparent_1px)] bg-[size:60px_60px] animate-pulse"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(156,163,175,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(156,163,175,0.1)_1px,transparent_1px)] bg-[size:120px_120px] animate-pulse delay-1000"></div>
      </div> */}

      {/* Dynamic Floating Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-gray-800/10 to-black/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-white/20 to-gray-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-gray-400/15 to-white/15 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-white/30 to-gray-400/30 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-r from-gray-400/20 to-white/20 rounded-full blur-2xl animate-pulse delay-1500"></div>
      </div>

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div className="h-full bg-gradient-to-r from-gray-500 to-white transform origin-left scale-x-0 transition-transform duration-300"></div>
      </div>

      <Header currentPage="about" />

      {/* Enhanced Hero Section */}
      <section className="relative pt-24 pb-32 overflow-hidden hero-section min-h-screen flex items-center">
        {/* <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-gray-900/90 to-black/95 hero-bg parallax-bg"></div> */}

        {/* Advanced Floating Elements */}
        <div className="absolute inset-0">
          {/* <div className="absolute top-20 left-4 md:left-20 w-24 h-24 md:w-40 md:h-40 bg-gradient-to-br from-red-500/40 to-pink-600/40 rounded-3xl floating pulse-element backdrop-blur-2xl border border-red-400/20 shadow-2xl shadow-red-500/20">
            <Award className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-20 md:h-20 text-red-300" />
            <div className="absolute inset-0 bg-gradient-to-br from-red-400/20 to-transparent rounded-3xl animate-pulse"></div>
          </div> */}
          <div className="absolute top-40 right-4 md:right-40 w-20 h-20 md:w-32 md:h-32 bg-gradient-to-br from-white/40 to-gray-600/40 rounded-3xl floating backdrop-blur-2xl border border-white/20 shadow-2xl shadow-white/20">
            <Users className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-16 md:h-16 text-white" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl animate-pulse delay-300"></div>
          </div>
          {/* <div className="absolute bottom-20 left-1/4 w-16 h-16 md:w-28 md:h-28 bg-gradient-to-br from-pink-500/40 to-red-600/40 rounded-3xl floating pulse-element backdrop-blur-2xl border border-pink-400/20 shadow-2xl shadow-pink-500/20">
            <Target className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-14 md:h-14 text-pink-300" />
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-transparent rounded-3xl animate-pulse delay-600"></div>
          </div> */}
          <div className="absolute top-1/2 right-4 md:right-20 w-18 h-18 md:w-24 md:h-24 bg-gradient-to-br from-gray-500/40 to-white/40 rounded-3xl floating backdrop-blur-2xl border border-gray-400/20 shadow-2xl shadow-gray-500/20">
            <Heart className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 text-white" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl animate-pulse delay-900"></div>
          </div>
          <div className="absolute bottom-40 right-1/3 w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br from-white/40 to-gray-600/40 rounded-3xl floating pulse-element backdrop-blur-2xl border border-white/20 shadow-2xl shadow-white/20">
            <Sparkles className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-7 h-7 md:w-10 md:h-10 text-white" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl animate-pulse delay-1200"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center space-y-12">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-500/20 to-white/20 backdrop-blur-xl border border-gray-400/30 rounded-full px-8 py-4 mb-8 shadow-lg shadow-gray-500/20">
                <Heart className="w-6 h-6 text-white animate-pulse" />
                <span className="text-white font-semibold tracking-wide">About Our Story</span>
                <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
              </div>

              <h1 className="text-4xl sm:text-3xl lg:text-5xl font-black text-white leading-tight">
                <span className="hero-title block mb-4">About</span>
                <span className="text-gradient hero-title block bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent bg-size-200 animate-gradient-x drop-shadow-2xl">
                  SLAM Fitness
                </span>
              </h1>

              <div className="max-w-5xl mx-auto space-y-6">
                <p className="text-2xl sm:text-3xl text-gray-200 hero-subtitle leading-relaxed font-light">
                  More than just a gym - we're a{" "}
                  <span className="text-transparent bg-gradient-to-r from-white to-gray-300 bg-clip-text font-bold">
                    community dedicated
                  </span>{" "}
                  to transforming lives through fitness, wellness, and personal growth.
                </p>

                <div className="flex items-center justify-center space-x-8 text-gray-400 hero-stats">
                  <div className="flex items-center space-x-2 group cursor-pointer">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="text-yellow-400 fill-current w-5 h-5 group-hover:scale-125 transition-transform duration-300"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                    </div>
                    <span className="font-semibold">4.9/5 Rating</span>
                  </div>
                                      <div className="w-1 h-6 bg-gray-600"></div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-white" />
                      <span className="font-semibold">10,000+ Members</span>
                    </div>
                    <div className="w-1 h-6 bg-gray-600"></div>
                    <div className="flex items-center space-x-2">
                      <Award className="w-5 h-5 text-white" />
                      <span className="font-semibold">9 Years Excellence</span>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-ping opacity-60"
              style={{
                left: `${i * 5}%`,
                top: `${i * 4}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${2 + i * 0.1}s`,
              }}
            />
          ))}
        </div>
      </section>

      {/* Enhanced Story Section */}
      <section className="py-32 relative">
        {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-500/8 to-transparent"></div> */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div>
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-500/20 to-white/20 backdrop-blur-xl border border-gray-400/30 rounded-full px-8 py-4 mb-8 shadow-lg shadow-gray-500/20">
                  <Flame className="w-6 h-6 text-white animate-pulse" />
                  <span className="text-white font-semibold tracking-wide">Our Journey</span>
                </div>
                <h2 className="text-6xl font-black text-white reveal-text mb-8">
                  Our{" "}
                  <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                    Story
                  </span>
                </h2>
              </div>

            <div className="space-y-8">
                {[
                  {
                    year: "2015",
                    title: "The Beginning",
                    content:
                      "Founded with a simple vision: to create a space where fitness meets lifestyle, where every individual can discover their potential and transform their life.",
                  },
                  {
                    year: "2018",
                    title: "Growth & Expansion",
                    content:
                      "Located in the heart of Chennai at Kilpauk, we've grown from a small fitness studio to one of the city's most trusted fitness destinations.",
                  },
                  {
                    year: "2024",
                    title: "Complete Ecosystem",
                    content:
                      "What started as a passion project has evolved into a comprehensive fitness ecosystem, offering everything from functional training to nutritional guidance.",
                  },
                ].map((milestone, index) => (
                  <div key={index} className="group relative">
                    <div className="flex items-start space-x-6 p-8 rounded-3xl bg-black/70 hover:bg-black/80 transition-all duration-700 border border-gray-800/80 hover:border-gray-600/80 backdrop-blur-md">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center font-black text-white text-sm shadow-none">
                          {milestone.year}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3">{milestone.title}</h3>
                        <p className="text-gray-200 leading-relaxed text-lg">{milestone.content}</p>
                      </div>
                    </div>
                    {index < 2 && (
                      <div className="absolute left-8 top-24 w-0.5 h-16 bg-gradient-to-b from-gray-500 to-transparent"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 group">
                <div className="relative overflow-hidden rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="SLAM Fitness Studio"
                width={600}
                    height={700}
                    className="rounded-3xl shadow-2xl floating w-full h-auto group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-3xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-500/30 to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div> */}

                  {/* Floating Stats */}
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="bg-black/80 backdrop-blur-xl border border-gray-800/80 rounded-2xl p-6">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-white">10K+</div>
                          <div className="text-gray-300 text-sm">Members</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-white">9</div>
                          <div className="text-gray-300 text-sm">Years</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-white">50+</div>
                          <div className="text-gray-300 text-sm">Trainers</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Background Elements */}
              <div className="absolute -top-12 -right-12 w-80 h-80 bg-gradient-to-r from-gray-500/20 to-white/20 rounded-full opacity-60 pulse-element blur-3xl"></div>
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-gradient-to-r from-white/20 to-gray-500/20 rounded-full opacity-40 pulse-element blur-3xl"></div>

              {/* Decorative Elements */}
              <div className="absolute top-20 -left-8 w-16 h-16 bg-gradient-to-r from-gray-400/30 to-white/30 rounded-2xl floating backdrop-blur-sm border border-gray-400/20"></div>
              <div className="absolute bottom-32 -right-8 w-12 h-12 bg-gradient-to-r from-white/30 to-gray-400/30 rounded-xl floating backdrop-blur-sm border border-white/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Mission & Vision */}
      <section className="py-32 relative">
        {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-500/8 to-transparent"></div> */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-500/20 to-white/20 backdrop-blur-xl border border-gray-400/30 rounded-full px-8 py-4 mb-8 shadow-lg shadow-gray-500/20">
              <Target className="w-6 h-6 text-white animate-pulse" />
              <span className="text-white font-semibold tracking-wide">Mission & Vision</span>
            </div>
            <h2 className="text-6xl font-black text-white mb-8 reveal-text">
              Our{" "}
              <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                Purpose
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Driving transformation through innovation, community, and unwavering commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                icon: Target,
                title: "Our Mission",
                content:
                  "To empower individuals to achieve their fitness goals through innovative training methods, personalized guidance, and a supportive community environment. We believe fitness is not just about physical transformation, but about building confidence, discipline, and a healthier lifestyle.",
                gradient: "from-gray-700 to-gray-800",
                accentColor: "gray",
              },
              {
                icon: Heart,
                title: "Our Vision",
                content:
                  "To be Chennai's leading fitness destination, known for transforming lives and building a healthier community. We envision a world where fitness is accessible, enjoyable, and sustainable for everyone, regardless of their starting point or fitness level.",
                gradient: "from-gray-800 to-gray-900",
                accentColor: "gray",
              },
            ].map((item, index) => (
              <div key={index} className="group relative">
                <div className="relative bg-black/70 backdrop-blur-2xl rounded-3xl p-12 shadow-xl border border-gray-800/80 service-card overflow-hidden cursor-pointer hover:scale-105 hover:-translate-y-6 transition-all duration-700">
                  {/* Enhanced Hover Effects */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-700 rounded-3xl`}
                  ></div>
                  <div
                    className={`absolute -inset-2 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-700 blur-2xl rounded-3xl`}
                  ></div>

                  <div className="relative z-10">
                    <div
                      className={`w-24 h-24 bg-gradient-to-r ${item.gradient} rounded-3xl flex items-center justify-center mb-8 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-2xl shadow-gray-500/40`}
                    >
                      <item.icon className="w-12 h-12 text-white group-hover:animate-pulse" />
              </div>
                    <h3 className="text-4xl font-black text-white mb-8 group-hover:text-gray-300 transition-colors duration-300">
                      {item.title}
              </h3>
                    <p className="text-gray-200 leading-relaxed text-lg group-hover:text-gray-100 transition-colors duration-300">
                      {item.content}
                    </p>
            </div>

                  {/* Enhanced Decorative Elements */}
                  <div
                    className={`absolute top-0 right-0 w-0 h-0 border-l-[40px] border-l-transparent border-t-[40px] border-t-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  ></div>

                  {/* Animated Particles */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full animate-ping"
                        style={{
                          left: `${20 + i * 8}%`,
                          top: `${20 + i * 6}%`,
                          animationDelay: `${i * 0.2}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Values Section */}
      <section className="py-32 relative">
        {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-500/8 to-transparent"></div> */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-500/20 to-white/20 backdrop-blur-xl border border-gray-400/30 rounded-full px-8 py-4 mb-8 shadow-lg shadow-gray-500/20">
              <Award className="w-6 h-6 text-white animate-pulse" />
              <span className="text-white font-semibold tracking-wide">Core Values</span>
            </div>
            <h2 className="text-6xl font-black text-white mb-8 reveal-text">
              Our Core{" "}
              <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                Values
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              The fundamental principles that guide everything we do at SLAM Fitness Studio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Excellence",
                description: "We strive for excellence in every aspect of our service, from training to customer care.",
                gradient: "from-gray-800 to-gray-900",
                delay: "0s",
              },
              {
                icon: Users,
                title: "Community",
                description: "Building a supportive community where everyone feels welcome and motivated to succeed.",
                gradient: "from-gray-600 to-gray-700",
                delay: "0.1s",
              },
              {
                icon: Target,
                title: "Results",
                description:
                  "Focused on delivering real, measurable results that transform lives and build confidence.",
                gradient: "from-gray-700 to-gray-800",
                delay: "0.2s",
              },
              {
                icon: Heart,
                title: "Passion",
                description: "Our passion for fitness and wellness drives us to continuously improve and innovate.",
                gradient: "from-gray-800 to-gray-900",
                delay: "0.3s",
              },
            ].map((value, index) => (
              <div key={index} className="group relative service-card" style={{ animationDelay: value.delay }}>
                <div className="relative bg-black/70 backdrop-blur-2xl rounded-3xl p-10 shadow-xl border border-gray-800/80 text-center overflow-hidden cursor-pointer hover:scale-105 hover:-translate-y-6 transition-all duration-700 h-full">
                  {/* Enhanced Background Effects */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-700 rounded-3xl`}
                  ></div>
                  <div
                    className={`absolute -inset-2 bg-gradient-to-r ${value.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-700 blur-2xl rounded-3xl`}
                  ></div>

                  <div className="relative z-10">
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${value.gradient} rounded-3xl flex items-center justify-center mb-8 mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-2xl`}
                    >
                      <value.icon className="w-10 h-10 text-white group-hover:animate-bounce" />
                </div>
                    <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-gray-300 transition-colors duration-300">
                  {value.title}
                </h3>
                    <p className="text-gray-200 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                  {value.description}
                </p>
                  </div>

                  {/* Enhanced Decorative Elements */}
                  <div className="absolute top-0 right-0 w-0 h-0 border-l-[30px] border-l-transparent border-t-[30px] border-t-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Progress Bar */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-800 rounded-b-3xl overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${value.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Team Section */}
      <section className="py-32 relative">
        {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-500/8 to-transparent"></div> */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-500/20 to-white/20 backdrop-blur-xl border border-gray-400/30 rounded-full px-8 py-4 mb-8 shadow-lg shadow-gray-500/20">
              <Users className="w-6 h-6 text-white animate-pulse" />
              <span className="text-white font-semibold tracking-wide">Expert Team</span>
            </div>
            <h2 className="text-6xl font-black text-white mb-8 reveal-text">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                Expert Team
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our certified trainers and wellness experts are here to guide you on your fitness journey with passion and
              expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                name: "Suresh Kumar",
                role: "Founder & Head Trainer",
                specialization: "Functional Training & Body Transformation",
                experience: "15+ years",
                image:
                  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                description:
                  "Certified fitness professional with expertise in functional training and body transformation programs.",
                achievements: ["ACSM Certified", "500+ Transformations", "Nutrition Specialist"],
              },
              {
                name: "Priya Sharma",
                role: "Senior Fitness Trainer",
                specialization: "Weight Management & Nutrition",
                experience: "10+ years",
                image:
                  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                description:
                  "Specialized in weight management programs and nutritional counseling for sustainable results.",
                achievements: ["NASM Certified", "Nutrition Expert", "300+ Success Stories"],
              },
              {
                name: "Raj Patel",
                role: "Bootcamp Instructor",
                specialization: "HIIT & Strength Training",
                experience: "8+ years",
                image:
                  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                description: "High-energy bootcamp instructor specializing in HIIT workouts and strength conditioning.",
                achievements: ["CrossFit Level 2", "HIIT Specialist", "Group Fitness Expert"],
              },
            ].map((member, index) => (
              <div key={index} className="group relative service-card">
                <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-2xl rounded-3xl shadow-2xl border border-gray-700/50 overflow-hidden cursor-pointer hover:scale-105 hover:-translate-y-6 transition-all duration-700">
                  {/* Enhanced Hover Effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-gray-500/30 via-transparent to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl rounded-3xl"></div>

                  <div className="relative z-10">
                <div className="relative overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={400}
                    height={300}
                        className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-500/20 opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                      {/* Floating Badge */}
                      <div className="absolute top-6 right-6 bg-gray-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-500 shadow-lg">
                        {member.experience}
                      </div>

                      {/* Achievement Badges */}
                      <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="flex flex-wrap gap-2">
                          {member.achievements.map((achievement, i) => (
                            <span
                              key={i}
                              className="bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium border border-gray-400/30"
                            >
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>
                </div>

                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gray-300 transition-colors duration-300">
                    {member.name}
                  </h3>
                      <p className="text-white font-semibold mb-4 group-hover:text-gray-300 transition-colors duration-300">
                    {member.role}
                  </p>
                      <p className="text-gray-300 text-sm mb-6 group-hover:text-gray-100 transition-colors duration-300 leading-relaxed">
                    {member.description}
                  </p>

                      <div className="space-y-4">
                        <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        Specialization:
                      </span>
                          <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium text-right max-w-[60%]">
                        {member.specialization}
                      </span>
                    </div>

                        {/* Rating */}
                        <div className="flex justify-between items-center">
                          <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-sm">
                            Rating:
                      </span>
                          <div className="flex items-center space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                            ))}
                            <span className="text-gray-300 text-sm ml-2">5.0</span>
                          </div>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-800 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-gray-500 to-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Corner Accent */}
                  <div className="absolute top-0 right-0 w-0 h-0 border-l-[40px] border-l-transparent border-t-[40px] border-t-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Achievements Section */}
      <section className="py-32 relative">
        {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-500/8 to-transparent"></div> */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-500/20 to-white/20 backdrop-blur-xl border border-gray-400/30 rounded-full px-8 py-4 mb-8 shadow-lg shadow-gray-500/20">
              <TrendingUp className="w-6 h-6 text-white animate-pulse" />
              <span className="text-white font-semibold tracking-wide">Our Achievements</span>
            </div>
            <h2 className="text-6xl font-black text-white mb-8 reveal-text">
              Our{" "}
              <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                Achievements
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Milestones that reflect our unwavering commitment to excellence and transformative community impact
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                number: "10,000+",
                label: "Members Transformed",
                gradient: "from-gray-800 to-gray-900",
                icon: Users,
                description: "Lives changed through fitness",
              },
              {
                number: "9",
                label: "Years of Excellence",
                gradient: "from-gray-600 to-gray-700",
                icon: Award,
                description: "Consistent quality service",
              },
              {
                number: "50+",
                label: "Expert Trainers",
                gradient: "from-gray-700 to-gray-800",
                icon: Target,
                description: "Certified professionals",
              },
              {
                number: "4.9",
                label: "Average Rating",
                gradient: "from-gray-800 to-gray-900",
                icon: Star,
                description: "Customer satisfaction",
              },
            ].map((stat, index) => (
              <div key={index} className="group relative service-card cursor-pointer">
                <div className="relative bg-black/70 backdrop-blur-2xl rounded-3xl p-10 shadow-xl border border-gray-800/80 text-center hover:scale-110 hover:-translate-y-4 transition-all duration-700 h-full">
                  {/* Enhanced Background Effects */}
                  <div
                    className={`absolute -inset-2 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-700 rounded-3xl blur-2xl`}
                  ></div>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-700 rounded-3xl`}
                  ></div>

                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${stat.gradient} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-2xl`}
                    >
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>

                    <div
                      className={`text-5xl lg:text-6xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-4 group-hover:animate-pulse stat-number`}
                    >
                  {stat.number}
                </div>

                    <div className="text-white font-bold text-lg mb-2 group-hover:text-gray-300 transition-colors duration-300">
                  {stat.label}
                    </div>

                    <div className="text-gray-300 text-sm group-hover:text-gray-300 transition-colors duration-300">
                      {stat.description}
                    </div>

                    <div
                      className={`w-20 h-1 bg-gradient-to-r ${stat.gradient} mx-auto mt-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Why Choose Us */}
      <section className="py-32 relative">
        {/* <div className="absolute inset-0 bg-gradient-to-r from-gray-500/15 via-white/15 to-gray-500/15"></div> */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="cta-content">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-500/20 to-white/20 backdrop-blur-xl border border-gray-400/30 rounded-full px-8 py-4 mb-8 shadow-lg shadow-gray-500/20">
              <Flame className="w-6 h-6 text-white animate-pulse" />
              <span className="text-white font-semibold tracking-wide">Join Our Community</span>
            </div>

            <h2 className="text-6xl sm:text-7xl font-black text-white mb-8">
              Ready to Join Our{" "}
              <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                Community?
              </span>
            </h2>

            <p className="text-2xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
              Become part of the SLAM Fitness family and start your transformation journey today. Your future self will
              thank you.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <button className="group relative bg-gradient-to-r from-gray-800 to-gray-900 text-white px-16 py-8 rounded-3xl font-bold text-2xl hover:shadow-lg hover:scale-110 hover:-translate-y-3 transition-all duration-500 animated-button overflow-hidden">
                <span className="relative z-10 flex items-center">Start Your Journey<ArrowRight className="ml-4" /></span>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-4 left-12 w-2 h-2 bg-white rounded-full animate-ping"></div>
                  <div className="absolute bottom-6 right-16 w-2 h-2 bg-white rounded-full animate-ping delay-100"></div>
                </div>
              </button>

              <Link
                href="/contact"
                className="group border-3 border-white/40 backdrop-blur-sm text-white px-16 py-8 rounded-3xl font-bold text-2xl hover:bg-white hover:text-black transition-all duration-500 animated-button hover:scale-110 hover:-translate-y-3 inline-block"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
