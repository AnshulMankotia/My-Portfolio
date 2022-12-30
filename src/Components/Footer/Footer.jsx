import React from 'react'
import './Footer.css'
import Wave from '../../images/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'

const Footer = () => {
  return (
<div className="footer">
    <img src={Wave} alt="" style={{width:'100%'}}/>
    <div className="f-content">
        <span>anshulmankotia1997@gmail.com</span>
        <div className="f-icons">
          <Insta color='white' size='5rem' />  
          <Facebook color='white' size='5rem'/>  
          <Github color='white' size='5rem'/>  
        </div>
    </div>
</div>
  )
}

export default Footer