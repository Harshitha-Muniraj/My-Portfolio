import React from 'react'
import './Skill.css'
const Skill = () => {

    const data=[
        {
            title:'HTML',
            icon:<ion-icon name="logo-html5" id="skills-icon"></ion-icon>
        },
        {
            title:"CSS",
            icon:<ion-icon name="logo-css3" id="skills-icon"></ion-icon>
        },
        {
            title:"JavaScript",
            icon:<ion-icon name="logo-javascript" id="skills-icon"></ion-icon>
        },
        {
            title:"React",
            icon:<ion-icon name="logo-react" id="skills-icon"></ion-icon>
        },
        {
            title:"Redux",
            image:"./assets/redux-icon.png"
        },
        {
            title:"Git",
            icon:<ion-icon name="logo-github"id="skills-icon"></ion-icon>
        },
    ]
  return (
    <section className='skills' id='#skill'>
        <div className='skill-container'>
            <h2>My Skills</h2>
            <div className='skill-content'>
                {
                    data.map((item,index)=>{
                        return (
                            <div key={index} className={`skill-card ${item.title}`}>
                                <div>
                                    {item.icon?
                                    <div style={{width:"100px"}}>{item.icon}</div>:
                                    <img src={item.image} style={{width:"100px"}}/>
                                }
                                </div>
                                <p>{item.title}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Skill