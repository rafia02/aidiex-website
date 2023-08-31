import React from 'react'


const datas = [
    {
        img: "https://tidytheme.com/blackgallery/elizah/html/images/work_1.jpg",
        title: "Accessories Items",
        catagory: "Graphic"
    },
    {
        img: "https://tidytheme.com/blackgallery/elizah/html/images/work_3.jpg",
        title: "Accessories Items",
        catagory: "Graphic"
    },
    {
        img: "https://tidytheme.com/blackgallery/elizah/html/images/work_4.jpg",
        title: "Accessories Items",
        catagory: "Graphic"
    },
    {
        img: "https://tidytheme.com/blackgallery/elizah/html/images/work_5.jpg",
        title: "Accessories Items",
        catagory: "Graphic"
    },
    {
        img: "https://tidytheme.com/blackgallery/elizah/html/images/work_6.jpg",
        title: "Accessories Items",
        catagory: "Graphic"
    },
    {
        img: "https://tidytheme.com/tidytheme/aidiex/html/images/work_6.jpg",
        title: "Accessories Items",
        catagory: "Graphic"
    },
    {
        img: "https://tidytheme.com/tidytheme/aidiex/html/images/work_3.jpg",
        title: "Accessories Items",
        catagory: "Design"
    },
    {
        img: "https://tidytheme.com/tidytheme/aidiex/html/images/work_1.jpg",
        title: "Accessories Items",
        catagory: "Design"
    },
    {
        img: "https://tidytheme.com/tidytheme/aidiex/html/images/work_4.jpg",
        title: "Accessories Items",
        catagory: "Apps"
    },
    {
        img: "https://tidytheme.com/tidytheme/aidiex/html/images/work_5.jpg",
        title: "Accessories Items",
        catagory: "Apps"
    },
    {
        img: "https://tidytheme.com/blackgallery/elizah/html/images/work_7.jpg",
        title: "Accessories Items",
        catagory: "Apps"
    },
    {
        img: "https://tidytheme.com/tidytheme/aidiex/html/images/work_3.jpg",
        title: "Accessories Items",
        catagory: "Content"
    },
    {
        img: "https://tidytheme.com/tidytheme/aidiex/html/images/work_1.jpg",
        title: "Accessories Items",
        catagory: "Content"
    },
    {
        img: "https://tidytheme.com/tidytheme/aidiex/html/images/work_4.jpg",
        title: "Accessories Items",
        catagory: "Content"
    },
    {
        img: "https://tidytheme.com/blackgallery/elizah/html/images/work_2.jpg",
        title: "Accessories Items",
        catagory: "Others"
    },
    {
        img: "https://tidytheme.com/blackgallery/elizah/html/images/work_8.jpg",
        title: "Accessories Items",
        catagory: "Others"
    },
]



export const Projects = () => {

    return (
        <div className='project-main-container'>

            <div>
                <h1 className='title'>Ltest Project</h1>
                <hr />
            </div>

            <ul className='search'>
                <li>All Work</li>
                <li> Graphic </li>
                <li>Design </li>
                <li>Design </li>
                <li>Content</li>
                <li> Others</li>
            </ul>

            <div className='img-main-container'>
                {
                    datas.map(d => <div

                        className='img-container '
                        style={{ backgroundImage: `url(${d.img})` }}
                    >
                        <div className="shutter-overlay">
                            <div className='shutter-overlay-title'>
                                <h3>{d.title}</h3>
                                <h5>{d.catagory}</h5>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    )
}
