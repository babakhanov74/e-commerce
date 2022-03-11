import React from 'react'
import  shipping from './sectionImg/shipping.png'
import  refund from './sectionImg/reFundd.png'
import  support from './sectionImg/support.png'

const service = [
    {
        id:1,
        Image:shipping,
        title:'FREE SHIPPING',
        desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        id:2,
        Image:refund,
        title:'100% REFUND',
        desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        id:3,
        Image:support,
        title:'SUPPORT 24/7',
        desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }
]
export default function SectionFour() {
    return (
        <div className='sectionFour'>
            <div className='container'>
                {service.map((item,index) => {return(
                    <div key={index} className='serviceBlock'>
                        <div  className='imageService'>
                        <img src={item.Image}alt='service' />

                        </div>
                    <h1>{item.title}</h1>
                    <p>{item.desc}</p>
                 </div>

                )})}
            </div>
        </div>
    )
}
