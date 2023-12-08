import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";
import { motion } from "framer-motion"

const Card = ({ data, reference }) => {
    return (
        <motion.div drag dragConstraints={reference} dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}  whileDrag={{scale:1.2}} className='relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10  overflow-hidden'>
            <FaFileAlt />
            <p className='text-sm mt-5 font-normal leading-tight'>{data.desc} </p>
            <div className=' footer absolute bottom-0 w-full   left-0  '>
                <div className='flex justify-between items-center py-3 px-8 mb-1'>
                    <h5>{data.filesize}</h5>
                    <span className='w-6 h-6 hover:bg-sky-600 bg-sky-400 rounded-full flex items-center justify-center'>

                        {data.close ? <IoMdCloseCircle size=".8em" color="#000" /> : <MdOutlineFileDownload size=".8em" color="#000" />}

                    </span>
                </div>
                {data.tagDetails.isOpen ? <div className={`tag w-full py-3  ${data.tagDetails.tagColor === "blue" ? "bg-sky-600" : "bg-green-600"} flex item-center justify-center`}>
                    <h3 className='text-sm '>{data.tagDetails.tagTitle}</h3>
                </div> : null}

            </div>
        </motion.div>
    )
}

export default Card
