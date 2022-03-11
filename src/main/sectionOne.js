import { Button } from 'antd'
import React from 'react'

const arre =  [
    {
        id:1,
        title:'IPHONE 13 PRO MAX 256 GB WHITE',
        class:"one card"

     },
    {
        id:2,
        title:'IPHONE 13 PRO MAX 256 GB BLACK',
        class:"two card"

     },
    {
        id:3,
        title:'IPHONE 12 64GB ...',
        class:"three card"

     },
]
export default function SectionOne() {
    return (
        <div className='sectionOne'>
            <div className='container'>
               {arre.map((item, index) => {return(
                   <div className={item.class} key={index}> 
                       <div className='desc'>
                       <h3>{item.title}</h3>
                        <p>$1199</p>
                       </div>
                       <p><span>$799</span><span>24% Off</span></p>
                   </div>
               )})}
            </div>
        </div>
    )
}
