'use client'

import Image, { StaticImageData } from 'next/image'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

// Import images
import Zomato from '../../assets/mobileimage/Zomato.jpeg'
import Onemg from '../../assets/mobileimage/Onemg.png'
import Bigbusket from '../../assets/mobileimage/Bigbusket.png'
import Facebook from '../../assets/mobileimage/Facebook.png'
import Instagram from '../../assets/mobileimage/Instagram.png'
import Snapchat from '../../assets/mobileimage/Snapchat.png'
import Swiggy from '../../assets/mobileimage/Swiggy.png'
import Twitter from '../../assets/mobileimage/Twitter.png'
import Whatsapp from '../../assets/mobileimage/Whatsapp.jpg'

interface Product {
  id: number
  image: StaticImageData
  title: string
  description: string
}

export default function EnhancedProductCards() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data: Product[] = [
          { id: 1, image: Swiggy, title: 'Food Delivery', description: 'Create an app like Swiggy' },
          { id: 2, image: Facebook, title: 'Social Media', description: 'Create an app like Facebook' },
          { id: 3, image: Whatsapp, title: 'Social Media', description: 'Create an app like Whatsapp' },
          { id: 4, image: Swiggy, title: 'Food Delivery', description: 'Create an app like Uber Eats' },
          { id: 5, image: Instagram, title: 'Social Media', description: 'Create an app like Instagram' },
          { id: 6, image: Twitter, title: 'Social Media', description: 'Create an app like Twitter' },
          { id: 7, image: Snapchat, title: 'Social Media', description: 'Create an app like Snapchat' },
          { id: 8, image: Onemg, title: 'Ecommerce', description: 'Create an app like 1mg' },
          { id: 9, image: Zomato, title: 'Food Delivery', description: 'Create an app like Zomato' },
          { id: 10, image: Bigbusket, title: 'Ecommerce', description: 'Create an app like BigBusket' },
        ]
        setProducts(data)
        setLoading(false)
      } catch (err) {
        setError('Failed to fetch products')
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const handleViewPrice = () => {
    router.push('/maprice')
  }

  if (loading) return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
    </div>
  )
  
  if (error) return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="text-center text-red-500 text-2xl font-bold">{error}</div>
    </div>
  )

  return (
    <div className="min-h-screen bg-black text-purple-300 overflow-hidden relative">
      {/* Star Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(500)].map((_, index) => (
          <div
            key={index}
            className="star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-700">
            Our Mobile App Solutions
          </h1>
          <p className="text-xl text-purple-300 max-w-2xl mx-auto">
            Discover the perfect mobile app solution for your business. From food delivery to social media, we&apos;ve got you covered.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <div className="relative h-48">
                <Image 
                  src={product.image} 
                  alt={product.title} 
                  layout="fill"
                  objectFit="contain"
                  className="transition-transform duration-300 transform hover:scale-110"
                />
                <div className="absolute inset-0 bg-purple-700 bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <h2 className="text-2xl font-bold text-white text-center px-4">{product.title}</h2>
                </div>
              </div>
              <div className="p-6">
                <p className="text-purple-300 mb-4">{product.description}</p>
                <button 
                  className="w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white font-bold py-2 px-4 rounded-full hover:from-purple-600 hover:to-purple-800 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50"
                  onClick={handleViewPrice}
                >
                  View Our Price
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <button
            className="bg-purple-700 text-white font-bold text-xl py-3 px-8 rounded-full hover:bg-purple-900 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
            onClick={handleViewPrice}
          >
            Get Started Today
          </button>
        </motion.div>
      </div>

      <style jsx>{`
        .star {
          position: absolute;
          width: 3px;
          height: 3px;
          background-color: white;
          border-radius: 50%;
          opacity: 0;
          animation: blink 2s infinite ease-in-out;
        }

        @keyframes blink {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  )
}







