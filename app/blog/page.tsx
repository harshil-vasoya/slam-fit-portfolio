"use client"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Clock, User, Star, BookOpen } from "lucide-react"
import { useGSAP } from "../../lib/useGSAP"

export default function Blog() {
  const scope = useGSAP()

  const articles = [
    {
      id: 1,
      slug: "10-essential-exercises-core-strength",
      image:
        "/gym/blog1.png",
      category: "Workouts",
      title: "10 Essential Exercises for Building Core Strength",
      excerpt:
        "Discover the most effective core exercises that will help you build a strong foundation and improve your overall fitness performance. Learn proper form and progression techniques.",
      author: "Sarah Johnson",
      date: "Nov 15, 2024",
      readTime: "5 min read",
    },
    {
      id: 2,
      slug: "ultimate-guide-pre-workout-nutrition",
      image:
        "/gym/nutrition.png",
      category: "Nutrition",
      title: "The Ultimate Guide to Pre-Workout Nutrition",
      excerpt:
        "Learn what to eat before your workout to maximize energy, performance, and recovery for better results. Complete meal timing and food recommendations included.",
      author: "Mike Chen",
      date: "Nov 12, 2024",
      readTime: "7 min read",
    },
    {
      id: 3,
      slug: "stay-motivated-fitness-journey",
      image:
        "/gym/blog3.png",
      category: "Wellness",
      title: "How to Stay Motivated on Your Fitness Journey",
      excerpt:
        "Practical tips and strategies to maintain motivation and consistency in your fitness routine for long-term success. Overcome common obstacles and build lasting habits.",
      author: "Emma Davis",
      date: "Nov 10, 2024",
      readTime: "6 min read",
    },
    {
      id: 4,
      slug: "functional-training-vs-traditional-gym",
      image:
        "/gym/blog4.png",
      category: "Training",
      title: "Functional Training vs Traditional Gym Workouts",
      excerpt:
        "Compare the benefits of functional training with traditional gym workouts and find out which approach suits your goals. Expert analysis and recommendations.",
      author: "Alex Rodriguez",
      date: "Nov 8, 2024",
      readTime: "8 min read",
    },
  ]

  return (
    <div
      ref={scope}
      className="min-h-screen bg-gradient-to-br from-slate-950 via-gray-900 to-black overflow-x-hidden relative"
    >
      {/* Subtle Background Effects */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(107,114,128,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(107,114,128,0.1)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      {/* Minimal Floating Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-gray-500/10 to-gray-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-gray-600/8 to-gray-700/8 rounded-full blur-3xl"></div>
      </div>

      {/* Clean Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 bg-gray-500/10 backdrop-blur-sm border border-gray-500/20 rounded-full px-6 py-3 mb-8">
              <BookOpen className="w-5 h-5 text-gray-400" />
              <span className="text-gray-300 font-medium">Fitness Blog</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight hero-title">
              Fitness{" "}
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Blog</span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto hero-subtitle leading-relaxed">
              Expert insights, workout tips, nutrition advice, and inspiring stories to fuel your fitness journey. Stay
              updated with the latest in health and wellness.
            </p>

            {/* <div className="flex items-center justify-center space-x-8 text-gray-400 hero-stats">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current w-4 h-4" />
                  ))}
                </div>
                <span className="text-sm">Expert Content</span>
              </div>
              <div className="w-1 h-4 bg-gray-600"></div>
              <div className="flex items-center space-x-2">
                <BookOpen className="w-4 h-4 text-gray-400" />
                <span className="text-sm">{articles.length} Articles</span>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 articles-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <Link
                key={article.id}
                href={`/blog/${article.slug}`}
                className="group bg-black backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden hover:bg-gray-800/50 transition-all duration-300 article-card block"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={600}
                    height={350}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm border border-white/20">
                    {article.category}
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-300 transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-400">{article.author}</span>
                    </div>
                    <div className="text-gray-400 font-medium hover:text-white transition-colors flex items-center">
                      Read Full Article
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
