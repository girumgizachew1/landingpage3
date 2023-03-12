import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Navbar from '@/component/Navbar'
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Feature from '@/component/feature';
import Late from '@/component/late'
export default function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const controls = useAnimation();
  
  useEffect(() => {
    controls.start({
      y: -150,
      transition: { duration: 1.2, ease: 'easeOut' }
    });
  }, [controls]);

  return (
    <div className='bg-black'>
    <div className="bg-hero bg-cover bg-center bg-no-repeat h-screen w-full" >
      <Navbar />
     <div className='absolute'>
      <div>
      <motion.div
        className="text-center font-bold  xl2:text-5xl xl3:text-5xl flex flex-row px-40 space-x-96 pt-48 z-1"
        style={{ fontFamily: 'Nosifer' }} 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 50, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <motion.h1
          initial={{ x: 100 }}
          animate={{ x: -50 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          THE FALL OF
        </motion.h1>
        
        <motion.h1
          className="text-black"
          initial={{ x: -100 }}
          animate={{ x: 50 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          HUMANITY
        </motion.h1>
      </motion.div>
    </div>

    <div className="px-80 absolute z-10">
        {/* Placeholder image */}
        <motion.div className='z-10'                 
          animate={controls}>
          <Image className='mx-auto lg:-mt:20 z-10 xl2:mx-48 xl3:mx-80'  src="/angel.png" width={500} height={1000}  style={{ zIndex: 20 }}
 alt="as"/>
          </motion.div>
      </div>
         <div className='center align-center text-center -ml-10 mt-80'>
      <motion.button
        className='text-white bg-gray-800  py-3 px-6 absolute rounded-xl blur-xs1 z-50'
        variants={{
          hidden: { scale: 1, opacity: 0 },
          visible: { scale: 1, opacity: 1, transition: { duration: 1 } }
        }}
        initial='hidden'
        animate='visible'
      >
        READ MORE
      </motion.button>
    </div>
     
  </div>          
    </div>
    <div className='h-24 opacity-75  shadow-2xl shadow-black blur bg-black w-full' ></div>

  
        <div className='h-24 opacity-90 shadow-2xl shadow-black blur bg-black w-full' ></div>
        <Feature/>
      
        
  </div>
  )
}