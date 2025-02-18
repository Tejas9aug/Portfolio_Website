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
        <section className={props.bg?'homeSecW homeRes':'homeSecB homeRes'} id='Home'>
            <div className='homePic'>
                <img src="assets/Tejasphoto.jpg" alt='Tejas Patange' className='pic'></img>
            </div>
            <div className='homeData'>
                <div className={props.bg?'homeContentW':'homeContentB'}>
                    <h1>Hey there,</h1>
                    <h2>I'm Tejas Patange</h2>
                    <h3>And I'm a <span ref={textRef}></span></h3>
                    <p>I love exploring various tech fields and I am currently focused on Web Development & Data Strcutures & Algorithms.</p>
                    <div className='homeHandles'>
                       <a href='https://www.linkedin.com/in/tejas-patange-bb700b229/' target="__blank"><img src='assets/linkedin.png' alt=''></img></a>    
                       <a href='https://github.com/Tejas9aug' target="__blank"><img src={props.bg?'assets/github.png':'assets/githubW.png'} alt=''></img></a>    
                      
                    </div>
                </div>
            </div>
        </section>
    )
}