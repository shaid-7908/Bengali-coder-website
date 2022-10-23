import React, { useState } from 'react'
import DataObjectIcon from '@mui/icons-material/DataObject';
import CodeIcon from '@mui/icons-material/Code';
import MemoryIcon from '@mui/icons-material/Memory';
import StorageIcon from '@mui/icons-material/Storage';
import './Aboutpage.css'
export default function Aboutpage() {
  const [contactState,setContactState]=useState(false)
  console.log(contactState)
  return (
    <div className="mainContainer">
      <div className="heroSection">
        <div className="heroLeft">
          <span style={{color:'#717171',fontSize:'1.2rem',letterSpacing:'3px'}}>Hello!</span>
          <p style={{fontWeight:'bolder',fontSize:'1.8rem'}}>I'am <span style={{color:'#d91b7d'}}>Shahid</span></p>
          <p style={{color:'#717171',fontSize:'1.2rem',letterSpacing:'3px'}}>a web Developer and creator of this site</p>
          <div className="heroLbutton"onClick={()=>setContactState(!contactState)}>Get In Touch
          <div className={contactState?"heroConatctActive":"heroConatct"} >
          <a href = "mailto: shahid451998@gmail.com">Gmail To</a>
          <span>+91-7908-16-9084</span>
          </div>
          </div>
        </div>
        <div className="heroRight">R</div>
      </div>
      <div className="aboutSkill">
        <p>My<span style={{color:'black',paddingLeft:'6px',letterSpacing:'3px'}}>Skills</span></p>
        <div className="aboutSkill-wrapper">
          <div className="frontendSkill">
          <div className="f-skill-header"><span style={{paddingRight:'5px'}}><DataObjectIcon/></span><span style={{fontWeight:'bold'}}>Front End Skill</span></div>
          <div className="f-skill1"><span style={{paddingRight:'5px'}}><CodeIcon/></span>HTML
        </div>
          <div className="f-skill2"><span style={{paddingRight:'5px'}}><CodeIcon/></span>CSS</div>
          <div className="f-skill3"><span style={{paddingRight:'5px'}}><CodeIcon/></span>Java Script</div>
          <div className="f-skill4"><span style={{paddingRight:'5px'}}><CodeIcon/></span>React Js</div>
          </div>
          <div className="backendSkill">
          <div className="B-skill-header"><span style={{paddingRight:'5px'}}><MemoryIcon/></span><span style={{fontWeight:'bold'}}>BackEnd Skill</span></div>
          <div className="B-skill1"><span style={{paddingRight:'5px'}}><CodeIcon/></span>Node Js
        </div>
          <div className="B-skill2"><span style={{paddingRight:'5px'}}><CodeIcon/></span>Express Js</div>
          <div className="B-skill3"><span style={{paddingRight:'5px'}}><StorageIcon/></span>MongoDb</div>
          <div className="B-skill4"><span style={{paddingRight:'5px'}}><StorageIcon/></span>MySql</div>
          </div>
        </div>
      </div>
    </div>
  )
}
