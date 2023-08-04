import React from 'react'
import me from '../../assets/founder.jpeg'
import { motion } from 'framer-motion'

const Founder = () => {
    const options = {
        initial: {
            x: '-100%',
            opacity: 0,
        },
        whileInView: {
            x: 0,
            opacity: 1
        }
    }
  return (
      <section className='founder'>
        <motion.div {...options}>
              <img src={me} alt="Founder" height={200} width={200} />
              <h3>Sarfraz Shah</h3>

              <p>
                  Hey, Everyone I am Sarfraz Shah, the founder of MBA Burger Wala.
                  <br />
                  Crafting Irresistible Burger Delights for Culinary Adventures. Taste the Joy! Indulge in Burger Heaven today.
              </p>
        </motion.div>
          
    </section>
  )
}

export default Founder