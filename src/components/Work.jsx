import React from 'react'
import { Timeline } from './ui/Timeline'
import { data } from "../constants";

const Work = () => {
  return (
    <section
  id="work"
  className="relative flex items-center justify-center min-h-screen px-4 sm:px-6 md:px-11 
             bg-gradient-to-b from-[#d56ad6] via-[#9c32a3] to-[#a33ab3]"
>
  <Timeline data={data} />
</section>
  )
}

export default Work
