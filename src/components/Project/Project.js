import React from 'react';
import ProjectData from './ProjectData';
import './Project.css'

const Project = () => {
  const data=[
    {
        title:'HTML',
        image:"https://icon2.cleanpng.com/20180426/zue/kisspng-web-development-html-responsive-web-design-cascadi-5ae19e6b1412f6.0023511515247355950822.jpg"
    },
    {
        title:"CSS",
        image:"https://p7.hiclipart.com/preview/509/571/818/cascading-style-sheets-logo-css3-html-web-development-world-wide-web.jpg"
    },
    {
        title:"JavaScript",
        image:"https://p1.hiclipart.com/preview/951/574/485/react-logo-javascript-redux-vuejs-angular-angularjs-expressjs-front-and-back-ends-png-clipart.jpg"
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
                            <div key={index} className={`project-card ${item.title}`}>
                                <figure>
                                    <img src={item.image} style={{width:"100px"}}/>
                                </figure>
                                <p>{item.title}</p>
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