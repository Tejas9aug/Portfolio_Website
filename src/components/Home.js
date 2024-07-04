import React, { useEffect, useRef } from 'react'
import { init } from 'ityped'



export default function Home(props) {
  const textRef = useRef()

  useEffect(()=>{
      init(textRef.current, { 
          showCursor: true,
          typeSpeed:100,
          backDelay: 1500,
          backSpeed: 60,
          strings: ["Student!", "Developer!", "Self Learner!"],
       });
  }, []);
  return (
    <section>
      <div>
        <img src="assets/Tejasphoto.jpg" alt="Tejaskaphoto" />
      </div>
      <div>
        <div>
          <h1>Hey there,</h1>
          <h2>I'm Tejas Patange</h2>
          <h3>And I'm a <span ref={textRef}></span></h3>
          <p>I love exploring various tech fields and I am currently focused on Web Development & Data Strcutures & Algorithms.</p>
        </div>
      </div>
    </section>
  )
}
