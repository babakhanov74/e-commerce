import React from 'react'
import logo from './../header/logoapple.png'
import facebook from './facebook.png'
import twitter from './twitter.png'

export default function FooterFirst() {
    return (
        <div className='footerFirst'>
        <div className='container'>
        <div className='withLogo'>
                <div className='img'>
                    <img src={logo} alt='#'></img>
                    <p>appleSHOP</p>
                </div>
                <div className='desc'>
                  <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.
                  </p>
                </div>
            </div>
            <div className='follow'>
               <div className='title'>
                 <h3>
                 Follow Us
                 </h3>
               </div>
               <div className='desc'>
                  <p>
                  Since the 1500s, when an unknown printer took a galley of type and scrambled.
                  </p>
               </div>
               <div className='logos'>
                  <div className='facebook'>
                    <img src={facebook} alt='#'></img>
                  </div>
                  <div className='twitter'>
                    <img src={twitter} alt='#'></img>
                  </div>
               </div>
            </div>
            <div className='contacts'>
               <div className='title'>
                  <h2>
                  Contact Us
                  </h2>
               </div>
               <div className='desc'>
                  <p>
                  E-Comm , 4578 Marmora Road, Glasgow D04 89GR
                  </p>
               </div>
            </div>
        </div>
            
        </div>
    )
}
