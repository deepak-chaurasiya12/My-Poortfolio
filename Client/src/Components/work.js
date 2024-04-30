import React from 'react'
import "./Asset/Workcard.css"
import WorkCard from './WorkCard'
import WokrCardData from './WorkCardData'


const Work = () => {
  return (
    <div className='work-container'>
      <h1 className='project-heading'>projects</h1>
      <div className='project-container'>
        {WokrCardData.map((val,ind)=>{
          return(
            <WorkCard
            key={ind}
            imgsrc={val.imgsrc}
            title={val.title}
            text={val.text}
            view={val.view}
            github={val.github}

            />
          )
        })}
        
      </div>
    </div>
  )
}

export default Work
