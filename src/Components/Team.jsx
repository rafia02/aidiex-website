import React from 'react'

const data = [
    {
        img: "https://tidytheme.com/blackgallery/elizah/html/images/team-4.jpg",
        title: "Founder",
        name: "Jon Gilcrist"
    },
    {
        img: "https://tidytheme.com/blackgallery/elizah/html/images/team-3.jpg",
        title: "Co Founder",
        name: "Robert Doe"
    },
    {
        img: "https://tidytheme.com/blackgallery/elizah/html/images/team-2.jpg",
        title: " Chairman",
        name: "Kristen Crew"
    },
    {
        img: "https://tidytheme.com/blackgallery/elizah/html/images/team-1.jpg",
        title: "Driver",
        name: "Adam Gilcrist"
    }
]

export const Team = () => {
    return (
        <div className='team-rapper'>
            <div>
                <h1 className='title'>Our Team Member</h1>
                <hr />
            </div>

            <div className='team-main-container'>
                {
                    data.map(d => <div>
                        <div
                            className='team-container '
                            style={{ backgroundImage: `url(${d.img})` }}></div>
                           
                        <div className='team-title'>
                            <h4>{d.title}</h4>
                            <h3>{d.name}</h3>
                        </div>
                        <hr />
                    </div>
                    )
                }
            </div>
        </div>
    )
}
