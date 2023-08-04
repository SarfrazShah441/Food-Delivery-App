import React from 'react'
import {AiFillYoutube, AiFillInstagram, AiFillGithub} from "react-icons/ai"

const Footer = () => {
  return (
      <footer>
          <div>
              <h2>MBA Burger Wala</h2>

              <p>We are trying give you the best taste possible.</p>

              <em>We give attention to genuine feedback.</em>
              <br />
              <br />
              <br />
              <br />
              <strong>Copyright&copy;2023 MBABurgerWala. All rights reserved</strong>
          </div>

          <aside>
              <h4>Follow Us</h4>
              <a href="https://www.youtube.com">
                  <AiFillYoutube />
              </a>
              <a href="https://www.instagram.com">
                  <AiFillInstagram />
              </a>
              <a href="https://www.github.com">
                  <AiFillGithub />
              </a>
          </aside>
      </footer>
  )
}

export default Footer