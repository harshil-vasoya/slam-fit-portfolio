"use client"

import Image from "next/image"
import Link from "next/link"
import { Award, Users, Target, Heart, CheckCircle } from "lucide-react"
import { useGSAP } from "../../lib/useGSAP"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function About() {
  const scope = useGSAP()

  return (
    <div ref={scope} className="min-h-screen bg-background overflow-x-hidden">
      <Header currentPage="about" />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden hero-section">
        <div className="absolute inset-0 bg-gradient-dark opacity-90 hero-bg"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight hero-title">
                About <span className="text-gradient">SLAM Fitness</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto hero-subtitle">
                More than just a gym - we're a community dedicated to transforming lives through fitness, wellness, and
                personal growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-white reveal-text">
                Our <span className="text-gradient">Story</span>
              </h2>
              <div className="space-y-6 text-gray-300 reveal-text">
                <p>
                  Founded in 2015, SLAM Fitness Studio began with a simple vision: to create a space where fitness meets
                  lifestyle, where every individual can discover their potential and transform their life.
                </p>
                <p>
                  Located in the heart of Chennai at Kilpauk, we've grown from a small fitness studio to one of the
                  city's most trusted fitness destinations. Our journey has been marked by countless success stories,
                  transformed lives, and a community that continues to inspire us every day.
                </p>
                <p>
                  What started as a passion project has evolved into a comprehensive fitness ecosystem, offering
                  everything from functional training and bootcamps to personalized transformation programs and
                  nutritional guidance.
                </p>
              </div>
            </div>
            <div className="relative floating">
              <Image
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="SLAM Fitness Studio"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg hover:shadow-glow hover:scale-105 transition-all duration-500"
              />
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-red-500/20 rounded-full pulse-element"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 service-card hover:scale-105 hover:-translate-y-2 group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <Target className="w-8 h-8 text-white group-hover:animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-300 transition-colors duration-300">
                Our Mission
              </h3>
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                To empower individuals to achieve their fitness goals through innovative training methods, personalized
                guidance, and a supportive community environment. We believe fitness is not just about physical
                transformation, but about building confidence, discipline, and a healthier lifestyle.
              </p>
              <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700 hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 service-card hover:scale-105 hover:-translate-y-2 group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <Heart className="w-8 h-8 text-white group-hover:animate-pulse" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-300 transition-colors duration-300">
                Our Vision
              </h3>
              <p className="text-gray-300 leading-relaxed group-hover:text-gray-100 transition-colors duration-300">
                To be Chennai's leading fitness destination, known for transforming lives and building a healthier
                community. We envision a world where fitness is accessible, enjoyable, and sustainable for everyone,
                regardless of their starting point or fitness level.
              </p>
              <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 reveal-text">Our Core Values</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto reveal-text">
              The principles that guide everything we do at SLAM Fitness Studio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Excellence",
                description: "We strive for excellence in every aspect of our service, from training to customer care.",
              },
              {
                icon: Users,
                title: "Community",
                description: "Building a supportive community where everyone feels welcome and motivated to succeed.",
              },
              {
                icon: Target,
                title: "Results",
                description:
                  "Focused on delivering real, measurable results that transform lives and build confidence.",
              },
              {
                icon: Heart,
                title: "Passion",
                description: "Our passion for fitness and wellness drives us to continuously improve and innovate.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700 hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500 service-card text-center hover:scale-105 hover:-translate-y-3 group cursor-pointer"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                  <value.icon className="w-8 h-8 text-white group-hover:animate-bounce" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-300 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
                  {value.description}
                </p>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 reveal-text">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto reveal-text">
              Our certified trainers and wellness experts are here to guide you on your fitness journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              },
              {
                name: "Raj Patel",
                role: "Bootcamp Instructor",
                specialization: "HIIT & Strength Training",
                experience: "8+ years",
                image:
                  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                description: "High-energy bootcamp instructor specializing in HIIT workouts and strength conditioning.",
              },
            ].map((member, index) => (
              <div
                className="bg-gray-800 rounded-2xl shadow-lg border border-gray-700 overflow-hidden hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-500 service-card group hover:scale-105 hover:-translate-y-2 cursor-pointer"
                key={index}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-red-500/20 opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 w-8 h-8 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300"></div>
                </div>
                <div className="p-6 relative">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-300 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-red-400 font-semibold mb-2 group-hover:text-red-300 transition-colors duration-300">
                    {member.role}
                  </p>
                  <p className="text-gray-300 text-sm mb-3 group-hover:text-gray-100 transition-colors duration-300">
                    {member.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        Specialization:
                      </span>
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        {member.specialization}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        Experience:
                      </span>
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        {member.experience}
                      </span>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 reveal-text">Our Achievements</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto reveal-text">
              Milestones that reflect our commitment to excellence and community impact
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10,000+", label: "Members Transformed" },
              { number: "9", label: "Years of Excellence" },
              { number: "50+", label: "Expert Trainers" },
              { number: "4.9", label: "Average Rating" },
            ].map((stat, index) => (
              <div
                className="text-center service-card group cursor-pointer hover:scale-110 transition-all duration-300"
                key={index}
              >
                <div className="text-4xl lg:text-5xl font-bold text-gradient mb-2 group-hover:animate-pulse">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>
                <div className="w-16 h-1 bg-gradient-primary mx-auto mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-white reveal-text">
                Why Choose <span className="text-gradient">SLAM Fitness</span>?
              </h2>
              <div className="space-y-6">
                {[
                  "State-of-the-art equipment and modern facilities",
                  "Certified trainers with proven track records",
                  "Personalized training programs for every fitness level",
                  "Comprehensive wellness approach including nutrition guidance",
                  "Supportive community environment",
                  "Flexible membership options and class schedules",
                  "Regular progress tracking and assessments",
                  "Proven results with thousands of success stories",
                ].map((feature, index) => (
                  <div
                    className="flex items-center space-x-4 feature-item group cursor-pointer hover:bg-gray-800/30 p-3 rounded-lg transition-all duration-300"
                    key={index}
                  >
                    <div className="relative">
                      <CheckCircle className="w-6 h-6 text-red-500 flex-shrink-0 group-hover:scale-125 group-hover:animate-pulse transition-all duration-300" />
                      <div className="absolute inset-0 w-6 h-6 bg-red-500/20 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300"></div>
                    </div>
                    <span className="text-gray-200 font-medium group-hover:text-white group-hover:translate-x-2 transition-all duration-300">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative floating">
              <Image
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="SLAM Fitness Facilities"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg features-image hover:shadow-glow hover:scale-105 transition-all duration-500"
              />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-red-500/30 rounded-full pulse-element"></div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-red-600/20 rounded-full floating"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-dark cta-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="cta-content">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Join Our Community?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Become part of the SLAM Fitness family and start your transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-glow transition-all duration-300 animated-button hover:scale-105 hover:-translate-y-1">
                Start Your Journey
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

      <Footer />
    </div>
  )
}
