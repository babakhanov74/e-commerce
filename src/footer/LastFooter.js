import React from 'react'

const arr = [
    {
        title:"Infomation"
    },
    {
        title:"Service"
    },
    {
        title:"My Account"
    },
    {
        title:"Our Offers"
    }
]




export default function LastFooter() {
    return (
        <div className='lastFooter'>
            <div className='container'>
               {
                   arr.map((item, index)=>{
                       return(
                           <div className='card' key={index}>
                               <div className='title'>
                                    <h2>{item.title}</h2>
                               </div>
                               <div className='contacts'>
                                  <ul>
                                      <li>
                                          <a href='#'>
                                          About Us
                                          </a>
                                      </li>
                                      <li>
                                          <a href='#'>
                                          Infomation 
                                          </a>
                                      </li>
                                      <li>
                                          <a href='#'>
                                          Privacy Policy
                                          </a>
                                      </li>
                                      <li>
                                          <a href='#'>
                                          Terms & Conditions

                                          </a>
                                      </li>
                                  </ul>
                               </div>
                           </div>
                       )
                   })
               }
            </div>
        </div>
    )
}
