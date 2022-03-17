import React from 'react'
import adidas from '../main/sectionImg/image13.png'

export default function SectionThree() {
    return (
        <div className='sectionThree'>
            <div className='container'>
                <div className='titleLeft'>
                    <h1>Apple 13 Pro Max 256 GB</h1>
                    <p>Performance and design. Taken right to the edge.</p>
                    <button>SHOP NOW</button>

                </div>
                <div className='imgRight'>
                    <img src={adidas} alt='adidas' />
                </div>
            </div>
        </div>
    )
}
