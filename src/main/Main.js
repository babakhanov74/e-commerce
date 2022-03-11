import React from 'react'
import HeaderMain from './headerMain'
import SectionFour from './sectionFour'
import SectionOne from './sectionOne'
import SectionThree from './sectionThree'
import SectionTwo from './sectionTwo'

export default function Main() {
    return (
        <>
         <div>
            <HeaderMain/>
          </div>
           <div>
            <SectionOne/>
          </div>
          <div>
            <SectionTwo/>
          </div>
          <div>
            <SectionThree/>
          </div>
          <div>
            <SectionFour/>
          </div>
         
      </>
    )
}
