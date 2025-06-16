import { ProjectCards } from '@/components/ProjectCards'
import { LampContainer } from '@/components/ui/lamp'
import { projects } from '@/data/index'
import React from 'react'

const Page = () => {
  return (
    <div className="bg-slate-950">
      <div className="max-w-6xl mx-auto px-8">
        <LampContainer>
          <h1 className="animate-fade-up mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
            Explore wide <br />variety of
            <span className="text-[#CBACF9] opacity-50"> Projects</span>
          </h1>
        </LampContainer>

        <div className="-mt-[200px] pb-12">
          <ProjectCards projects={projects} />
        </div>
      </div>
    </div>
  )
}

export default Page
