import React from 'react'
import UpperFooter from './UpperFooter/UpperFooter'
import LowerFooter from './LowerFooter/LowerFooter'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer-main'>
        <UpperFooter />
        <LowerFooter />
    </div>
  )
}

export default Footer