import { Divider } from 'antd'
import React from 'react'
import brand from  './Brands.png'

export default function TheEnd() {
    return (
        <div className='theEnd'>
            <div className='container'>
               <Divider className='divider'/>
               <div className='flex'>
                    <div className='date'>
                        <p>
                        © 2018 Ecommerce theme by www.bisenbaev.com
                        </p>
                    </div>
                    <div className='Brands'>
                        <div className='img'>
                            <img src={brand} alt='#'></img>
                        </div>
                    </div>
               </div>

            </div>
            
        </div>
    )
}
