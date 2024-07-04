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

    </nav>
  )
}
