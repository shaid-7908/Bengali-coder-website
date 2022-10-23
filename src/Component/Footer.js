import React from 'react'
import './Footer.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function Footer() {
  return (
    <>
    <div className="footerMainContainer">
        <div className="footerLogo">Bengali Coder</div>
        <div className="footerCopyright">Copyright 	&#169; Bengali Coder</div>
        <div className="footerSocial">
           <span style={{color:'#0a66c2'}}><LinkedInIcon/></span> 
          <a href='https://www.youtube.com/channel/UCYXXHjB0_MkwUC836eF9LWw'> <span style={{color:'#c00'}}><YouTubeIcon/></span></a>
           <span style={{color:'#00acee'}}><TwitterIcon/></span> 
           <span style={{color:'black'}}><GitHubIcon/></span></div>
    </div>
    </>
  )
}
