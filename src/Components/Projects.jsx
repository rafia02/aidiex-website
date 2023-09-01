import React, { useState } from 'react'


const datas = [
    {
        img: "https://tidytheme.com/blackgallery/elizah/html/images/work_3.jpg",
        title: "Accessories Items",
        catagory: "Graphics"
    },
    {
        img: "https://tidytheme.com/blackgallery/elizah/html/images/work_5.jpg",
        title: "Accessories Items",
        catagory: "Graphics"
    },
    {
        img: "https://tidytheme.com/blackgallery/elizah/html/images/work_1.jpg",
        title: "Accessories Items",
        catagory: "Graphics"
    },
    {
        img: "https://tidytheme.com/blackgallery/elizah/html/images/work_6.jpg",
        title: "Accessories Items",
        catagory: "Graphics"
    },
    {
        img: "https://tidytheme.com/tidytheme/aidiex/html/images/work_6.jpg",
        title: "Accessories Items",
        catagory: "Design"
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
        img: "https://tidytheme.com/blackgallery/elizah/html/images/work_4.jpg",
        title: "Accessories Items",
        catagory: "Graphics"
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


const searchData = [
    "All",
    "Graphics",
    "Design",
    "Apps",
    "Content",
    "Others",
]



export const Projects = () => {
    const [filterData, setFilterData] = useState([])
    const [show, setShow] = useState(true)

    const handleSearch = (id = "All") => {
        if (id === "All") {
            setShow(false)
            const newfilterData = datas.filter(f => f.catagory == "Design" || "Apps" || "Graphics" ||  "Content" || "Others")

            setFilterData(newfilterData)
            
        }
        else {
            console.log(id)
            setShow(false)
            const newfilterData = datas.filter(f => f.catagory === id)

            setFilterData(newfilterData)
            
        }
    }

    return (
        <div className='project-main-container'>

            <div>
                <h1 className='title'>Ltest Project</h1>
                <hr />
            </div>

            <ul className='search'>
                {
                    searchData.map(s => <li onClick={() => handleSearch(s)}>{s}</li>)
                }

            </ul>

            <div className='img-main-container'>
                {

                    show? 
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
                    :
                    filterData.map(d => <div

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
