import React from 'react'
import './Skill.css'
const Skill = () => {

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
        },
        {
            title:"React",
            image:"https://thumbnail.imgbin.com/11/21/14/imgbin-react-javascript-library-github-backbone-qQ1Kftyd2FDCwKGQfN0e48FyC_t.jpg"
        },
        {
            title:"Redux",
            image:"https://img1.pnghut.com/25/10/21/H4N8PREpzt/nodejs-symbol-web-application-redux-state-management.jpg"
        },
        {
            title:"Git",
            image:"https://banner2.cleanpng.com/20180418/siw/kisspng-github-pages-random-icons-5ad6e9863397c7.5716118315240339262113.jpg"
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
  )
}

export default Skill