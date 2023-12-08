import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {

  const ref = useRef(null);

  const data = [
    { desc:"This is the background color of the card that will be displayed.",
    filesize:"9.7mb",
    close:false,
    tagDetails:{isOpen:true , tagTitle:"Download Now " , tagColor:"green"}
  },
    { desc:"This is the background color of the card that will be displayed.",
    filesize:"0.9mb",
    close:false,
    tagDetails:{isOpen:true , tagTitle:"Download Now " , tagColor:"blue"}
  },
    { desc:"This is the background color of the card that will be displayed.",
    filesize:"5.6mb",
    close:false,
    tagDetails:{isOpen:true , tagTitle:"Download Now " , tagColor:"green"}
  },
    { desc:"This is the background color of the card that will be displayed.",
    filesize:"0.9mb",
    close:false,
    tagDetails:{isOpen:true , tagTitle:"Download Now " , tagColor:"blue"}
  },
  ]
  
  return (
    <>
          <div ref={ref} className=' fixed top-0 left-0 w-full h-screen z-[3] flex gap-5 p-5 flex-wrap '>
      {
        data.map((item,index) =>(
          <Card data={item} reference={ref} />
        ))
      }
          </div>
    </>
  )
}

export default Foreground
