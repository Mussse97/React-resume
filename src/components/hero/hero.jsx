import "./hero.css"
import {animate, motion} from "framer-motion"
import { Link } from 'react-router-dom'; // Importera Link från react-router-dom
const textVariants ={
    initial:{
        x: -500,
        opacity:0,
    },
    animate:{
        x: 0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    },
};

const sliderVariants ={
    initial:{
        x: 0,
    },
    animate:{
        x: "-550%",
        transition:{
            repeat: Infinity,
            repeatType: "mirror",
            duration:15,
        },
    },
};


const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">
        <motion.div className="textContainer2" variants={textVariants}
        initial="initial" animate="animate">
            <motion.h2 className="h2Orange" variants={textVariants}>Mostafa Hussein</motion.h2>
            <motion.h1 className="h1White" variants={textVariants}>Web developer and  UX designer</motion.h1>
            <motion.div className="buttons" variants={textVariants}>
            <Link to="/projects">
              <motion.button style={{ backgroundColor: 'transparent', border: '1px solid white' }} variants={textVariants}>
                See my latest work
              </motion.button>
            </Link>
            <Link to="/about">
              <motion.button style={{ backgroundColor: 'transparent', border: '1px solid white' }} variants={textVariants}>
                About me
              </motion.button>
            </Link>                 
            </motion.div>
            </motion.div>
        </div>
        <motion.div className="slideingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        Ux-designer/web developer  
        </motion.div>
      <div className="imageContainer">
        <img className="musse" src="/src/assets/Prof(1).png" alt="Bild På mig" />
      </div>
    </div>
  )
}

export default Hero
