"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Target, CheckCircle, Star, TrendingUp, Calendar } from "lucide-react"


export default function BodyTransformation() {

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
                  <span className="text-gradient">Body Transformation</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-lg">
                  Complete body transformation programs designed to sculpt your physique and achieve your dream body
                  with personalized training and nutrition guidance.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-glow transition-all duration-300 flex items-center justify-center group">
                  Start Transformation
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
            <div className="relative transform transition-transform hover:scale-105 duration-300">
              <Image
                src="/gym/body trans.png"
                alt="Body Transformation"
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
            <h2 className="text-4xl font-bold text-white mb-4">Complete Transformation Approach</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our comprehensive program addresses every aspect of your transformation journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: "Personalized Plans",
                description: "Custom workout and nutrition plans tailored to your specific goals and body type",
              },
              {
                icon: TrendingUp,
                title: "Progress Tracking",
                description: "Regular assessments and measurements to monitor your transformation progress",
              },
              {
                icon: Calendar,
                title: "Structured Program",
                description: "12-week structured program with progressive phases for optimal results",
              },
              {
                icon: Award,
                title: "Expert Guidance",
                description: "One-on-one coaching from certified trainers and nutrition specialists",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
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
                  "Comprehensive body composition analysis",
                  "Personalized workout programming",
                  "Custom nutrition and meal planning",
                  "Weekly progress assessments",
                  "Supplement recommendations",
                  "24/7 support and motivation",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <CheckCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                    <span className="text-gray-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative transform transition-transform hover:scale-105 duration-300">
              {/* <Image
                src="/gym/body trans.png"
                alt="Transformation Results"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg"
              /> */}
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Amazing Transformations</h2>
            <p className="text-xl text-gray-300">Real results from real people who transformed their lives</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Priya Sharma",
                result: "Lost 25kg in 4 months",
                content:
                  "The transformation program changed my life completely. I not only lost weight but gained confidence and energy.",
                rating: 5,
              },
              {
                name: "Raj Kumar",
                result: "Gained 8kg muscle mass",
                content:
                  "I never thought I could build muscle like this. The personalized approach made all the difference.",
                rating: 5,
              },
              {
                name: "Anita Reddy",
                result: "Complete body recomposition",
                content:
                  "From feeling weak to feeling strong and confident. This program gave me the body I always wanted.",
                rating: 5,
              },
            ].map((story, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-700 transform transition-transform hover:scale-105 duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{story.content}"</p>
                <div>
                  <h4 className="text-white font-semibold">{story.name}</h4>
                  <p className="text-red-400 text-sm font-medium">{story.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready for Your Transformation?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Start your journey to the body you've always wanted with our proven transformation program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-glow transition-all duration-300">
              Start Transformation
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
