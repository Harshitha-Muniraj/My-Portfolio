import React from 'react';
import ProjectData from './ProjectData';
import './Project.css'

const Project = () => {
  const data=[{
    id:1,
    class:"e-commerce",
    name:"E-Commerce",
    description:"vffffdvsfvvvvvvvvvvvvbileuibv sakn     drubbvfnfknwenwenv mn kenvvnohvewn",
    image:"./assets/e-commerce.png",
    link:""
},
{
    id:2,
    name:"FbGram",
    class:"facebook",
    description:"vffffdvsfvvvvvvvvvvvvbileuibv sakn     drubbvfnfknwenwenv mn kenvvnohvewn",
    image:"./assets/fbgram.png",
    link:""
},
{
    id:3,
    class:"quiz",
    name:"Quiz App",
    description:"vffffdvsfvvvvvvvvvvvvbileuibv sakn     drubbvfnfknwenwenv mn kenvvnohvewn",
    image:"./assets/quizpic.png",
    link:""
},]
  return (
    <>
    <section className='project' id='#project'>
     <div className='project-flex'>
      <div>
        <h2>Projects</h2>
      </div>
      <div className='project-cards'>
        
      {
                    data.map((item,index)=>{
                        return (
                            <div key={index} className="project-card">
                                <figure>
                                    <img src={item.image} className='project-img'/>
                                </figure>
                                <div className={`project-details ${item.class}`}>
                                <p>{item.name}</p>
                                <button className='project-link'>Link</button>
                                </div>
                            </div>
                        )
                    })
                }
        
       
      </div>
     </div>
    </section>
    </>
  )
}

export default Project