"use client"
import Image from "next/image"
import { useState } from "react"
import { ArrowRight, Calendar, Clock, User, Search, Tag, Heart, Star, BookOpen } from "lucide-react"
import { useGSAP } from "../../lib/useGSAP"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function Blog() {
  const scope = useGSAP()
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const categories = ["All", "Workouts", "Nutrition", "Wellness", "Training", "Recovery", "Transformation"]

  const articles = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Workouts",
      title: "10 Essential Exercises for Building Core Strength",
      excerpt:
        "Discover the most effective core exercises that will help you build a strong foundation and improve your overall fitness performance. Learn proper form and progression techniques.",
      author: "Sarah Johnson",
      date: "Nov 15, 2024",
      readTime: "5 min read",
      featured: true,
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Nutrition",
      title: "The Ultimate Guide to Pre-Workout Nutrition",
      excerpt:
        "Learn what to eat before your workout to maximize energy, performance, and recovery for better results. Complete meal timing and food recommendations included.",
      author: "Mike Chen",
      date: "Nov 12, 2024",
      readTime: "7 min read",
      featured: false,
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Wellness",
      title: "How to Stay Motivated on Your Fitness Journey",
      excerpt:
        "Practical tips and strategies to maintain motivation and consistency in your fitness routine for long-term success. Overcome common obstacles and build lasting habits.",
      author: "Emma Davis",
      date: "Nov 10, 2024",
      readTime: "6 min read",
      featured: false,
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Training",
      title: "Functional Training vs Traditional Gym Workouts",
      excerpt:
        "Compare the benefits of functional training with traditional gym workouts and find out which approach suits your goals. Expert analysis and recommendations.",
      author: "Alex Rodriguez",
      date: "Nov 8, 2024",
      readTime: "8 min read",
      featured: false,
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Recovery",
      title: "The Importance of Rest Days in Your Fitness Routine",
      excerpt:
        "Understand why rest days are crucial for muscle growth, injury prevention, and overall fitness progress. Learn how to optimize your recovery periods.",
      author: "Dr. Lisa Park",
      date: "Nov 5, 2024",
      readTime: "4 min read",
      featured: false,
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Transformation",
      title: "Real Success Stories: 30-Day Transformation Challenge",
      excerpt:
        "Inspiring stories from our members who completed the 30-day transformation challenge and achieved amazing results. See their before and after journeys.",
      author: "SLAM Team",
      date: "Nov 3, 2024",
      readTime: "10 min read",
      featured: false,
    },
    {
      id: 7,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Nutrition",
      title: "Post-Workout Nutrition: What to Eat After Training",
      excerpt:
        "Maximize your workout results with proper post-exercise nutrition. Learn about the anabolic window and optimal recovery foods for muscle growth.",
      author: "Nutritionist Priya",
      date: "Nov 1, 2024",
      readTime: "6 min read",
      featured: false,
    },
    {
      id: 8,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Workouts",
      title: "HIIT vs Steady-State Cardio: Which is Better?",
      excerpt:
        "Explore the differences between high-intensity interval training and steady-state cardio. Find out which approach aligns with your fitness goals.",
      author: "Trainer Raj",
      date: "Oct 28, 2024",
      readTime: "7 min read",
      featured: false,
    },
    {
      id: 9,
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      category: "Wellness",
      title: "Mental Health Benefits of Regular Exercise",
      excerpt:
        "Discover how regular physical activity can improve your mental health, reduce stress, and boost overall well-being. Science-backed benefits explained.",
      author: "Dr. Mental Health",
      date: "Oct 25, 2024",
      readTime: "8 min read",
      featured: false,
    },
  ]

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.author.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div
      ref={scope}
      className="min-h-screen  overflow-x-hidden relative"
    >
      {/* Subtle Background Effects */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.1)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      {/* Minimal Floating Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-red-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-orange-500/8 to-red-500/8 rounded-full blur-3xl"></div>
      </div>

      <Header currentPage="blog" />

      {/* Clean Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 bg-red-500/10 backdrop-blur-sm border border-red-500/20 rounded-full px-6 py-3 mb-8">
              <BookOpen className="w-5 h-5 text-red-400" />
              <span className="text-red-300 font-medium">Fitness Blog</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight hero-title">
              Fitness{" "}
              <span className="bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">Blog</span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto hero-subtitle leading-relaxed">
              Expert insights, workout tips, nutrition advice, and inspiring stories to fuel your fitness journey. Stay
              updated with the latest in health and wellness.
            </p>

            <div className="flex items-center justify-center space-x-8 text-gray-400 hero-stats">
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
                <BookOpen className="w-4 h-4 text-red-400" />
                <span className="text-sm">{articles.length} Articles</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 text-white placeholder-gray-400"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-red-500 to-pink-600 text-white"
                      : "bg-gray-900/50 text-gray-300 hover:bg-gray-800/50 hover:text-white border border-gray-700/50"
                  }`}
                >
                  <Tag className="w-4 h-4 inline mr-1" />
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {filteredArticles.find((article) => article.featured) && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4 reveal-text">Featured Article</h2>
            </div>
            {(() => {
              const featuredArticle = filteredArticles.find((article) => article.featured)
              if (!featuredArticle) return null
              return (
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden hover:bg-gray-800/50 transition-all duration-300 article-card group">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={featuredArticle.image || "/placeholder.svg"}
                        alt={featuredArticle.title}
                        width={600}
                        height={400}
                        className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </div>
                      <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm border border-white/20">
                        {featuredArticle.category}
                      </div>
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{featuredArticle.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{featuredArticle.readTime}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>{featuredArticle.author}</span>
                        </div>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-red-300 transition-colors duration-300">
                        {featuredArticle.title}
                      </h3>
                      <p className="text-gray-300 mb-6 text-lg leading-relaxed">{featuredArticle.excerpt}</p>
                      <button className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-pink-700 transition-all duration-300 flex items-center w-fit">
                        Read Full Article
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              )
            })()}
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-20 articles-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 reveal-text">
              {selectedCategory === "All" ? "All Articles" : `${selectedCategory} Articles`}
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto reveal-text">
              {filteredArticles.length} article{filteredArticles.length !== 1 ? "s" : ""} found
            </p>
          </div>

          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg mb-4">No articles found matching your criteria.</p>
              <button
                onClick={() => {
                  setSelectedCategory("All")
                  setSearchTerm("")
                }}
                className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-pink-700 transition-all duration-300"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles
                .filter((article) => !article.featured)
                .map((article, index) => (
                  <article
                    key={article.id}
                    className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden hover:bg-gray-800/50 transition-all duration-300 article-card"
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm border border-white/20">
                        {article.category}
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-300 transition-colors duration-300">
                        {article.title}
                      </h3>
                      <p className="text-gray-300 mb-4 line-clamp-3">{article.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-400">{article.author}</span>
                        </div>
                        <button className="text-red-400 font-medium hover:text-red-300 transition-colors flex items-center">
                          Read More
                          <ArrowRight className="ml-1 w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12 text-center border border-gray-700/50">
            <div className="inline-flex items-center gap-2 bg-red-500/10 backdrop-blur-sm border border-red-500/20 rounded-full px-6 py-3 mb-8">
              <Heart className="w-5 h-5 text-red-400" />
              <span className="text-red-300 font-medium">Stay Updated</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss the latest fitness tips, workout guides, and wellness advice
              from our expert trainers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-300 text-white placeholder-gray-400"
              />
              <button className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-pink-700 transition-all duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
