import React from 'react'
import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Feature() {
  const [isFlickering, setIsFlickering] = useState(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFlickering(true);
      setTimeout(() => {
        setIsFlickering(false);
      }, 50);
    }, Math.floor(Math.random() * 5000) + 1000);

    return () => clearInterval(intervalId);
  }, []);
  const { ref: ref1, inView: inView1 } = useInView();
  const { ref: ref2, inView: inView2 } = useInView();  const variantimage1 = {
    hidden: {
      x: "-100vw",
      y: "-50vh",
    },
    visible: {
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        duration: 3,
      },
    },
  };
  const variantimage2 = {
    hidden: {
      rotate:-45,
      scale: 1.5,
      x: "5vw",
      y: "80vh",
    },
    visible: {
      rotate:0,
      scale: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        duration: 3,
      },
    },
  };
  const variantimage3 = {
    hidden: {
      
      x: "50vw",
      y: "-100vh",
    },
    visible: {
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        duration: 3,
      },
    },
  };
  const variantimage4 = {
    
    hidden: {
      rotate:-45,
      scale: 1.5,
      x: "-60vw",
      y: "80vh",
    },
    visible: {
      rotate:0,
      scale: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        duration: 3,
      },
    },
  };
  const varianttext1 = {
    hidden: {
      rotate: 0,
      x: 0,
      y: 0,
      opacity: 0,
    },
    visible: {
      rotate: 0,
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        duration: 3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    flicker: {
      opacity: [1, 0.5, 1, 0, 1, 0.5, 1],
      transition: { duration: 0.3, ease: "linear", repeat: Infinity },
    },
  };
  const varianttext2 = {
    
    hidden: {
      rotate:-45,
      scale: 1.5,
      x: "-60vw",
      y: "80vh",
    },
    visible: {
      rotate:0,
      scale: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        duration: 3,
      },
    },
  };
   return (
    <section className="bg-black shadow-xl shadow-black  -ml-4  px-4 mx-auto pb-20 "               
    >
        <div className="flex flex-row -mx-64 mt-10  justify-end">
          <div className="basis-2/3  ml-56  px-4 w-2/3 px-32  mt-48 z-50">
              <h1 className="text-5xl font-bold px-24  mb-4"         
              style={{ fontFamily: 'Nosifer' }} 
     
              ref={ref1} // attach the ref to the motion.div element
                >WE'VE NEVER BEEN SO CLOSE TO THE END</h1>
              <p className="mb-6  px-32 text-lg text-gray-400 " 
>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                ut orci varius, euismod nunc vel, tincidunt eros. Proin at
                augue sagittis, iaculis eros vel, commodo magna. Aliquam
                faucibus euismod turpis, non egestas nisi auctor eu. Aliquam
                tristique, enim </p>
              <button className="ml-32 bg-white text-black font-bold py-3 px-10 rounded-xl hover:bg-indigo-700 transition-all duration-300">
                Read More
              </button>
            </div>

            <div className=" px-4 z-1 lg:mt-0">
            <div className="flex flex-wrap ml-64">
            <motion.div
              className="w-full md:w-1/2 px-4 mb-36"
              initial="hidden" // use variants to define initial and animate properties
              animate={inView1 ? "visible" : "hidden"}
              variants={variantimage1}
    >
      <div className="relative bg-black shadow-lg w-80 h-80 rounded-md transform origin-center rotate-45">
        <img
          src="https://i.etsystatic.com/9090766/r/il/38c7a7/2059569318/il_fullxfull.2059569318_r3bl.jpg"
          alt="Nature"
          className="rounded-t-md  w-80 h-80"
        />
      </div>
    </motion.div>
            <motion.div
                className="w-full md:w-1/2 px-4 -ml-60 -mt-56"
                initial="hidden" // use variants to define initial and animate properties
                animate={inView1 ? "visible" : "hidden"}
                variants={variantimage2}              
                >
              <div className="relative bg-black shadow-lg w-80 h-80 rounded-md transform origin-center rotate-45">
                <img
                    src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/angel-and-cherub-zentralfriedhof-vienna-black-and-white-square-carol-japp.jpg"
                    alt="Nature"
                  className="rounded-t-md  w-80 h-80 "
                />
              </div>
            </motion.div>    
            <motion.div
                className="w-full md:w-1/2 px-4 ml-60 -mt-80"
                initial="hidden" // use variants to define initial and animate properties
                animate={inView1 ? "visible" : "hidden"}
                variants={variantimage4}        
                >
              <div className="relative bg-black shadow-lg w-80 h-80 rounded-md transform origin-center rotate-45">
                <img
                    src="https://render.fineartamerica.com/images/rendered/default/flat/puzzle/images/artworkimages/medium/3/gothic-angel-cemetery-gravestone-surreal-spooky-scarycemetery-grave-art-kathy-fornal.jpg?&targetx=-62&targety=0&imagewidth=1125&imageheight=750&modelwidth=1000&modelheight=750&backgroundcolor=6E6E6E&orientation=0&producttype=puzzle-18-24&brightness=330&v=6"
                    alt="Nature"
                  className="rounded-t-md w-80 h-80 "
                />
              </div>
            </motion.div>
            <motion.div
                className="w-full md:w-1/2 px-4 -mt-20 mb-28"
                initial="hidden" // use variants to define initial and animate properties
                animate={inView1 ? "visible" : "hidden"}
                variants={variantimage3}
                >
              <div className="relative bg-black shadow-lg w-80 h-80 rounded-md transform origin-center rotate-45">
                <img
                    src="https://i.pinimg.com/736x/5b/e7/ea/5be7ea8a39f70b82b4cce6dbc70ae27c--grave--years.jpg"
                    alt="Nature"
                  className="rounded-t-md w-80 h-80 "
                />
              </div>
            </motion.div>  
                </div>
                <div>
                <motion.div
              className=" blur-xs2 -mt-40"
              variants={varianttext1}
              initial="hidden"
              animate={inView2 ? "flicker" : "hidden"}
              exit="exit"
              style={{
                opacity: isFlickering ? Math.sin(Date.now() / 200) + 1 : 1,}}
              >
                  <h1 className='font-bold ' style={{ fontSize: '7rem', fontFamily: 'creepster' }}       
 >Scared</h1>
                  </motion.div>
                  <h1 ref={ref2} className='font-bold blur-xs2 mt-80 -ml-96 pr-20 ' style={{ fontSize: '7rem' }} ></h1>
                </div>
                
                </div>
            </div>
    </section>
  )
}

export default Feature