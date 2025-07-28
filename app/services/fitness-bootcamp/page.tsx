"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Zap, Users, CheckCircle, Timer, TrendingUp } from "lucide-react"


export default function FitnessBootcamp() {

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">


      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-dark opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  <span className="text-gradient">Fitness Bootcamp</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-lg">
                  High-intensity bootcamp sessions designed to push your limits and deliver maximum results in minimum
                  time.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-glow transition-all duration-300 flex items-center justify-center group">
                  Join Bootcamp
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Fitness Bootcamp"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Bootcamp?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the most effective high-intensity training program designed for rapid results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "High Intensity",
                description: "Maximum calorie burn and cardiovascular improvement in every session",
              },
              {
                icon: Timer,
                title: "Time Efficient",
                description: "45-minute sessions that deliver results equivalent to hours of traditional training",
              },
              {
                icon: TrendingUp,
                title: "Fast Results",
                description: "See visible changes in strength, endurance, and body composition within weeks",
              },
              {
                icon: Users,
                title: "Group Energy",
                description: "Motivating group environment that pushes you beyond your comfort zone",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700 hover:shadow-2xl transition-all duration-500 hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-white">
                What's <span className="text-gradient">Included</span>
              </h2>
              <div className="space-y-6">
                {[
                  "Circuit training with varied exercises",
                  "Cardio and strength combination workouts",
                  "Battle ropes and kettlebell training",
                  "Plyometric and agility drills",
                  "Core strengthening exercises",
                  "Cool-down and recovery sessions",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <CheckCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                    <span className="text-gray-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Bootcamp Training"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Class Schedule</h2>
            <p className="text-xl text-gray-300">Choose from multiple sessions throughout the week</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { day: "Monday", time: "6:00 AM - 6:45 AM", level: "All Levels" },
              { day: "Monday", time: "7:00 PM - 7:45 PM", level: "Intermediate" },
              { day: "Wednesday", time: "6:00 AM - 6:45 AM", level: "Beginner" },
              { day: "Wednesday", time: "7:00 PM - 7:45 PM", level: "Advanced" },
              { day: "Friday", time: "6:00 AM - 6:45 AM", level: "All Levels" },
              { day: "Saturday", time: "8:00 AM - 8:45 AM", level: "All Levels" },
            ].map((schedule, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-700 hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-2">{schedule.day}</h3>
                <p className="text-red-400 font-semibold mb-2">{schedule.time}</p>
                <p className="text-gray-300">{schedule.level}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Challenge Yourself?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our high-intensity bootcamp and experience the most effective workout of your life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-glow transition-all duration-300">
              Join Bootcamp
            </button>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 inline-block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>


    </div>
  )
}
