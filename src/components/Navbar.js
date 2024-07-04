import React,{useState,useEffect} from 'react'

export default function Navbar() {
    const [open, setOpen] = useState(false)

  function hamburger() {
    setOpen(!open)
  }

  const handleResize = () => {
    if (window.innerWidth > 810) {
      setOpen(false)
    }
  }

  
  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })
    return (
    <nav>
        <div className='name'>
            <a href="#">Tejas Patange</a>
        </div>
        <div onClick = {hamburger}>
          <div>

          </div>
          <div>
            <ul>
              <li><a href="#Home">Home</a></li>
              <li><a href="#About">About</a></li>
              <li><a href="#Qualifications">Qualifications</a></li>
              <li><a href="#Project">Projects</a></li>
              <li><a href="#Contact Me">Contact Me</a></li>
                
              
            </ul>
          </div>
        </div>

    </nav>
  )
}
