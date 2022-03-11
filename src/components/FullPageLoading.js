import { Spin } from 'antd'
import React from 'react'

const FullPageLoading = () => {
  return(
    <div className='fullPageLoading'>
      <Spin size='large'/>
    </div>
  )
}

export default FullPageLoading