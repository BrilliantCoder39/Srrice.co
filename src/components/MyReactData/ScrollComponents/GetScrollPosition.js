
import { useEffect, useState } from 'react'
import Headerindex from '../../welcome/header/headerindex'

const useWindowScrollPositions = () => {

   const [scrollPosition, setPosition] = useState({ scrollX: 0, scrollY: 0 })

   useEffect(() => {
    function updatePosition() {
        setPosition({ scrollX: window.scrollX, scrollY: window.scrollY })
    }

    window.addEventListener('scroll', updatePosition)
    

    
   }, [])

   return scrollPosition
}

export default function GetScrollPosition () {
  const {scrollY } = useWindowScrollPositions()
  
  return(
    <div>
      <Headerindex/>
      <div>{scrollY}</div>
    </div>
  );
} 