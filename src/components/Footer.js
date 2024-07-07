import React from 'react'

export default function Footer(props) {
  return (
    <section className={props.bg ? 'footerSecW secFooter' : 'footerSecB secFooter'} id='Footer'>
      <footer className='footer'>
        <div className='footerContainer'>
          <h1 className='footerTitle'>Tejas Patange</h1>

          <ul className='footerList'>
            <li>
              <a href="#About" className='footerLinks'>About</a>
            </li>

            <li>
              <a href="#Qualifications" className='footerLinks'>Qualifications</a>
            </li>

            <li>
              <a href="#Projects" className='footerLinks'>Projects</a>
            </li>
          </ul>

          <div className='footerSocial'>
            <a href='inkedin.com/in/tejas-patange-bb700b229/' className='footerIcon' target='_blank'>
              <i class="uil uil-linkedin-alt"></i>
            </a>

            <a href='https://github.com/Tejas9aug' className='footerIcon' target='_blank'>
              <i class="uil uil-github"></i>
            </a>

           
          </div>

          <span className='footerCopyright'>
           &#169; 2024 - Tejas Patange. All rights reserved.
          </span>
        </div>
      </footer>
    </section>
  )
}
