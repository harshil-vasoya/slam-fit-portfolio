"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Users, Target, CheckCircle, Scale, Heart } from "lucide-react"


export default function WeightManagement() {

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
                  <span className="text-gradient">Weight Management</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-lg">
                  Achieve sustainable weight loss or muscle gain with our specialized programs designed for long-term
                  success and healthy lifestyle changes.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-glow transition-all duration-300 flex items-center justify-center group">
                  Start Your Journey
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
            <div className="relative hover:scale-105 transition-transform duration-300">
              <Image
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Weight Management"
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Weight Management</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our holistic approach addresses all aspects of healthy weight management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Scale,
                title: "Sustainable Results",
                description: "Focus on long-term lifestyle changes rather than quick fixes for lasting results",
              },
              {
                icon: Heart,
                title: "Health-Focused",
                description: "Prioritize overall health and wellness alongside weight management goals",
              },
              {
                icon: Target,
                title: "Goal-Oriented",
                description: "Whether weight loss or muscle gain, we create targeted plans for your specific goals",
              },
              {
                icon: Users,
                title: "Expert Support",
                description: "Guidance from certified trainers and nutrition specialists throughout your journey",
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
                Our <span className="text-gradient">Approach</span>
              </h2>
              <div className="space-y-6">
                {[
                  "Comprehensive health and fitness assessment",
                  "Personalized nutrition planning",
                  "Customized workout programs",
                  "Regular progress monitoring",
                  "Lifestyle coaching and support",
                  "Sustainable habit formation",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <CheckCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                    <span className="text-gray-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative hover:scale-105 transition-transform duration-300">
              <Image
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Weight Management Program"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Choose Your Program</h2>
            <p className="text-xl text-gray-300">Specialized programs for different weight management goals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Weight Loss Program",
                description: "Comprehensive program designed for safe and sustainable weight loss",
                features: [
                  "Calorie deficit planning",
                  "Fat-burning workouts",
                  "Metabolic conditioning",
                  "Nutrition education",
                  "Progress tracking",
                ],
                duration: "12-16 weeks",
                ideal: "Those looking to lose weight healthily",
              },
              {
                title: "Muscle Gain Program",
                description: "Structured program for building lean muscle mass and strength",
                features: [
                  "Progressive strength training",
                  "Muscle-building nutrition",
                  "Recovery optimization",
                  "Supplement guidance",
                  "Body composition tracking",
                ],
                duration: "16-20 weeks",
                ideal: "Those looking to build muscle and strength",
              },
            ].map((program, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700 hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-4">{program.title}</h3>
                <p className="text-gray-300 mb-6">{program.description}</p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-white font-semibold mb-2">What's Included:</h4>
                    <ul className="space-y-2">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-700">
                    <div>
                      <h5 className="text-red-400 font-semibold text-sm">Duration</h5>
                      <p className="text-gray-300 text-sm">{program.duration}</p>
                    </div>
                    <div>
                      <h5 className="text-red-400 font-semibold text-sm">Ideal For</h5>
                      <p className="text-gray-300 text-sm">{program.ideal}</p>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-gradient-primary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-glow transition-all duration-300 hover:scale-105">
                  Choose This Program
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Achieve Your Weight Goals?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Start your weight management journey with expert guidance and proven strategies for lasting results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-glow transition-all duration-300 hover:scale-105">
              Start Your Journey
            </button>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 inline-block hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>


    </div>
  )
}
