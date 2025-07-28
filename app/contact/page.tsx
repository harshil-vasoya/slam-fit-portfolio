"use client"
import type React from "react"
import { useState } from "react"
import { ArrowRight, MapPin, Phone, Mail, Clock, Send, MessageCircle, Heart, Star, Calendar } from "lucide-react"
import { useGSAP } from "../../lib/useGSAP"
import Header from "../../components/Header"
import Footer from "../../components/Footer"

export default function Contact() {
  const scope = useGSAP()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    })
    alert("Thank you for your message! We'll get back to you soon.")
  }

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

      <Header currentPage="contact" />

      {/* Clean Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 bg-gray-500/10 backdrop-blur-sm border border-gray-500/20 rounded-full px-6 py-3 mb-8">
              <Heart className="w-5 h-5 text-gray-400" />
              <span className="text-gray-300 font-medium">Get In Touch</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight hero-title">
              Contact{" "}
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Us</span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto hero-subtitle leading-relaxed">
              Ready to start your fitness journey? We're here to help you achieve your goals. Contact us today for a
              free consultation.
            </p>

            <div className="flex items-center justify-center space-x-8 text-gray-400 hero-stats">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current w-4 h-4" />
                  ))}
                </div>
                <span className="text-sm">4.9/5 Response</span>
              </div>
              <div className="w-1 h-4 bg-gray-600"></div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-gray-400" />
                <span className="text-sm">24hr Response</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: MapPin,
                title: "Visit Us",
                info: "#18/70, Halls Road, Kilpauk\nChennai – 600 010, India",
                action: "Get Directions",
                gradient: "from-gray-800 to-gray-900",
              },
              {
                icon: Phone,
                title: "Call Us",
                info: "+91 98414 63406\n+91 70944 79145",
                action: "Call Now",
                gradient: "from-gray-600 to-gray-700",
              },
              {
                icon: Mail,
                title: "Email Us",
                info: "info@slamfitnessstudio.in\nsureshs@paulsons.in",
                action: "Send Email",
                gradient: "from-gray-700 to-gray-800",
              },
              {
                icon: Clock,
                title: "Hours",
                info: "Mon-Fri: 6AM - 10PM\nSat: 6AM - 8PM\nSun: 7AM - 6PM",
                action: "View Schedule",
                gradient: "from-gray-800 to-gray-900",
              },
            ].map((contact, index) => (
              <div
                key={index}
                className="group bg-black backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-500/30 transition-all duration-300 service-card text-center hover:bg-gray-800/50"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${contact.gradient} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-2xl shadow-white`}>
                  <contact.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-gray-300 transition-colors duration-300">
                  {contact.title}
                </h3>
                <p className="text-gray-300 mb-4 whitespace-pre-line text-sm leading-relaxed">{contact.info}</p>
                <button className="text-gray-400 font-medium hover:text-white transition-colors flex items-center mx-auto text-sm">
                  {contact.action}
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-black backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 contact-form">
                <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-gray-500 to-gray-600 rounded-lg flex items-center justify-center mr-3">
                  <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Send us a Message</h2>
                  <p className="text-gray-400 text-sm">We'll get back to you within 24 hours</p>
                </div>
              </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all duration-300 text-white placeholder-gray-400"
                        placeholder="Enter your first name"
                      />
                    </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all duration-300 text-white placeholder-gray-400"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all duration-300 text-white placeholder-gray-400"
                      placeholder="Enter your email address"
                    />
                  </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all duration-300 text-white placeholder-gray-400"
                      placeholder="Enter your phone number"
                    />
                  </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all duration-300 text-white"
                    >
                      <option value="">Select a service</option>
                      <option value="functional-training">Functional Training</option>
                      <option value="fitness-bootcamp">Fitness Bootcamp</option>
                      <option value="body-transformation">Body Transformation</option>
                      <option value="weight-management">Weight Management</option>
                      <option value="personal-training">Personal Training</option>
                      <option value="nutrition-consultation">Nutrition Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                    rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-all duration-300 text-white placeholder-gray-400 resize-none"
                    placeholder="Tell us about your fitness goals and how we can help you..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                  className="w-full bg-gradient-to-r from-gray-500 to-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-gray-600 hover:to-gray-700 transition-all duration-300 flex items-center justify-center animated-button"
                  >
                    Send Message
                  <Send className="ml-2 w-4 h-4" />
                  </button>
                </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 contact-info">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4 reveal-text">Visit Our Studio</h2>
                <p className="text-gray-300 mb-8 reveal-text leading-relaxed">
                  Located in the heart of Chennai, our modern facility is equipped with everything you need for your
                  fitness journey.
                </p>
              </div>

              {/* Detailed Contact Cards */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 rounded-xl bg-black border border-gray-700/30 hover:bg-gray-800/30 transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-r from-gray-500 to-gray-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-2xl shadow-white">
                    <MapPin className="w-5 h-5 text-white " />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Studio Address</h3>
                    <p className="text-gray-300 leading-relaxed">
                      #18/70, Halls Road, Kilpauk,
                      <br />
                      Chennai – 600 010, Tamil Nadu, India
                    </p>
                    <p className="text-sm text-gray-400 mt-2">Near Kilpauk Medical College</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 rounded-xl bg-black border border-gray-700/30 hover:bg-gray-800/30 transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-r from-gray-500 to-gray-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-2xl shadow-white">
                    <Phone className="w-5 h-5 text-white " />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Phone Numbers</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Primary: +91 98414 63406
                      <br />
                      Secondary: +91 70944 79145
                    </p>
                    <p className="text-sm text-gray-400 mt-2">Available during business hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-6 rounded-xl bg-black border border-gray-700/30 hover:bg-gray-800/30 transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-r from-gray-500 to-gray-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-2xl shadow-white">
                    <Mail className="w-5 h-5 text-white " />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Email Addresses</h3>
                    <p className="text-gray-300 leading-relaxed">
                      General: info@slamfitnessstudio.in
                      <br />
                      Management: sureshs@paulsons.in
                    </p>
                    <p className="text-sm text-gray-400 mt-2">We respond within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-black rounded-xl p-6 border border-gray-700/30">
                <div className="flex items-center mb-4 shadow-2xl shadow-white">
                  <Clock className="w-5 h-5 text-gray-500 mr-3" />
                  <h3 className="font-semibold text-white">Operating Hours</h3>
                </div>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between items-center">
                    <span>Monday - Friday</span>
                    <span className="text-gray-400 font-medium">6:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Saturday</span>
                    <span className="text-gray-400 font-medium">6:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Sunday</span>
                    <span className="text-gray-400 font-medium">7:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
                <div className="bg-black rounded-xl p-6 border border-gray-700/30">
                <h3 className="font-semibold text-white mb-4">Find Us on Map</h3>
                <div className="bg-black rounded-lg h-48 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-gray-500 mx-auto mb-2" />
                    <p className="text-gray-300 mb-2">Interactive Map</p>
                    <p className="text-sm text-gray-400 mb-4">#18/70, Halls Road, Kilpauk, Chennai</p>
                    <button className="bg-gradient-to-r from-gray-500 to-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-gray-600 hover:to-gray-700 transition-all duration-300">
                      Open in Google Maps
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 reveal-text">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto reveal-text">
              Get answers to common questions about our services and membership
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "What are your membership options?",
                answer:
                  "We offer flexible membership plans including monthly, quarterly, and annual options. Each plan includes access to all group classes, gym equipment, and basic fitness assessments.",
              },
              {
                question: "Do you offer personal training?",
                answer:
                  "Yes, we have certified personal trainers available for one-on-one sessions. Personal training includes customized workout plans, nutrition guidance, and regular progress assessments.",
              },
              {
                question: "What should I bring for my first visit?",
                answer:
                  "For your first visit, bring comfortable workout clothes, athletic shoes, a water bottle, and a towel. We provide all necessary equipment.",
              },
              {
                question: "Can I try a class before joining?",
                answer:
                  "We offer free trial sessions for new members. This allows you to experience our facilities, meet our trainers, and see if our programs align with your fitness goals.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-gray-900/30 rounded-xl p-6 border border-gray-700/30 hover:bg-gray-800/30 transition-all duration-300 service-card"
              >
                <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-300 mb-4">Still have questions?</p>
            <button className="bg-gradient-to-r from-gray-500 to-gray-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-gray-600 hover:to-gray-700 transition-all duration-300">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 cta-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="cta-content">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Fitness Journey?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't wait any longer. Take the first step towards a healthier, stronger you. Contact us today and let's
              make your fitness goals a reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-gray-500 to-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-gray-600 hover:to-gray-700 transition-all duration-300 animated-button flex items-center justify-center">
                <Calendar className="mr-2 w-5 h-5" />
                Book Free Consultation
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 animated-button flex items-center justify-center">
                <Phone className="mr-2 w-5 h-5" />
                Call: +91 98414 63406
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
