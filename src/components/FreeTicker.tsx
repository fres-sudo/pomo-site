"use client"

import React from 'react'
import { motion } from 'framer-motion'


function FreeTicker() {

  const tickerItems = Array.from({ length: 10 }, (_, index) => index);

  return (

    <div className='border border-t border-b border-white/20 border-r-black border-l-black py-10'>
      <motion.div
        className='flex whitespace-nowrap'
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity
        }}
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
      >
        {/* Map over the array to create multiple instances */}
        {tickerItems.map((_, index) => (
          <div key={index} className='text-white/60 mx-4'>
            💸 FREE FOREVER 💸
          </div>
        ))}

        {/* Duplicate the content for seamless scrolling */}
        {tickerItems.map((_, index) => (
          <div key={`duplicate-${index}`} className='text-white/60 mx-4'>
            💸 FREE FOREVER 💸
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default FreeTicker
