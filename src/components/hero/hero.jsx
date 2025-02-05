import "./hero.css"
import {animate, motion} from "framer-motion"
import { Link } from 'react-router-dom'; // Importera Link från react-router-dom

// med framer motion kan vi skapa animationer på elementen.
// inital värdet är start positionen på elementet.
// animate värdet är vart elementet ska röra sig till.
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
    // För att komma åt elementen med framer motion måste vi ange motion innan elementet.
    <main className="hero">
        <article className="wrapper">
        <motion.section className="textContainer2" variants={textVariants}
        initial="initial" animate="animate">
            <motion.h2 className="h2Orange" variants={textVariants}>Mostafa Hussein</motion.h2>
            <motion.h1 className="h1White" variants={textVariants}>Web developer and  UX designer</motion.h1>
            <motion.section className="buttons" variants={textVariants}>
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
                {/* CV-knapp för att ladda ner */}
              <section className="cv-container">
                <a href="/MostafaHussein-CV-Eng.pdf" download className="cv-button">
                  Download my resume
                </a>
              </section>                 
            </motion.section>
          </motion.section>
        </article>
        <motion.footer className="slideingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        Ux-designer/web developer  
        </motion.footer>
      <div className="imageContainer">
        <img className="musse" src="/src/assets/Prof(1).png" alt="Bild På mig" />
      </div>
    </main>
  )
}

export default Hero
