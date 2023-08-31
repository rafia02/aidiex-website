import React from 'react'
import CountUp from 'react-countup'


export const Count = () => {
  return (
    <div className='count-rapper'>
      <div className='count-title'>
        <h1 className='title'>Estimate Total Costs Of Investment Market</h1>
        <p>Join Creative Solutions for weekly inspiration and education from creative professionals around the world. Learn More. Creative Solutions.</p>
      </div>

      <div className='count-main-container'>
        <div className="count-up-section">
          <CountUp className='number' start={0} end={275} duration={5} separator="," />
          <h5> Project </h5>
        </div>

        <div className="count-up-section">
          <CountUp className='number' start={150} end={482} duration={5} separator="," />
          <h5>Client Review</h5>
        </div>

        <div className="count-up-section">
          <CountUp className='number' start={400} end={865} duration={6} separator="," />
          <h5>Working Hour</h5>
        </div>
      </div>
    </div>
  )
}
