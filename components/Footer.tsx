import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="inline-block mb-4 group">
              <Image
                src="/images/slam-logo.png"
                alt="SLAM Fitness Studio"
                width={120}
                height={40}
                className="h-10 w-auto bg-white rounded-lg px-2 py-1 group-hover:scale-110 transition-transform duration-300"
              />
            </Link>
            <p className="text-gray-400">Transform your body and mind with the best fitness experience in Chennai.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/services/functional-training" className="hover:text-white transition-colors">
                  Functional Training
                </Link>
              </li>
              <li>
                <Link href="/services/fitness-bootcamp" className="hover:text-white transition-colors">
                  Fitness Bootcamp
                </Link>
              </li>
              <li>
                <Link href="/services/body-transformation" className="hover:text-white transition-colors">
                  Body Transformation
                </Link>
              </li>
              <li>
                <Link href="/services/weight-management" className="hover:text-white transition-colors">
                  Weight Management
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-400">
              <p>#18/70, Halls Road, Kilpauk,</p>
              <p>Chennai – 600 010.</p>
              <p>+91 98414 63406</p>
              <p>info@slamfitnessstudio.in</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 SLAM Fitness Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 