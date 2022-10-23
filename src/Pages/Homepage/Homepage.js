import React from 'react'
import { Link } from 'react-router-dom'
import './Homepage.css'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import img1 from '../../Images/LearnHTMLinOneShot.png'
import Button from 'react-bootstrap/Button';
import img2 from '../../Images/LearnCSSin.png'
import img3 from '../../Images/LearnJavaScript.png'
import Card from 'react-bootstrap/Card';
// import img7 from '../Image/Homepagebackground.jpg'
export default function HomePage() {
  const handleClick=()=>{
    window.scrollTo({top:0,left:0,behavior:'smooth'})
  }
  return (
    <>
    {/*Main conatiner */}
 <div className="m2-conatiner">
  {/*Hero section */}
  <div className="m2-c-hero">
          <h1 className="m2-c-hero-header">Get <span style={{color:'#fb385c'}}>MsXiMuM</span> result with <span style={{color:'#fb385c'}}>MiNiMuM</span> learning</h1>
          <p className='m2-c-hero-para'>TO BECOME A WEB DEVELOPER YOU DON’T NEED T0  KNOW EVERYTHING ,BUT YOU SHOULD KNOW SOMETHING ABOUT EVERYTHING</p>
          <Link to='/courses' style={{textDecoration:'none'}}><div className="m2-c-hero-button">BECOME A DEVELOPER <ArrowRightAltIcon/></div></Link>
  </div>
  {/*Front end div*/}
  <div className="m2-c-course1">
    <div className="m2-c-c1-header">
      <h3>FRONT END</h3>
    </div>
    <div className="m2-c-c1-cardsection">

      <Card style={{ width: '18rem' ,margin:'10px auto',boxShadow:'0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f'}}>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title style={{fontWeight:'bold'}}>HTML in Hindi/Bengali</Card.Title>
        <Card.Text style={{fontFamily:'Marcellus SC'}}>
          HTML course by Bengali Coder from scratch for free!! 
        </Card.Text>
        <Link to='/courses/html'><Button variant="primary" onClick={handleClick}>Start Learning</Button></Link>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' ,margin:'10px auto',boxShadow:'0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f'}}>
      <Card.Img variant="top" src={img2} />
      <Card.Body>
        <Card.Title style={{fontWeight:'bold'}}>CSS in Hindi/Bengali</Card.Title>
        <Card.Text style={{fontFamily:'Marcellus SC'}}>
        CSS course by Bengali Coder from scratch for free!!
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' ,margin:'10px auto',boxShadow:'0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f'}}>
      <Card.Img variant="top" src={img3} />
      <Card.Body>
        <Card.Title style={{fontWeight:'bold'}}>JS in Hindi/Bengali</Card.Title>
        <Card.Text style={{fontFamily:'Marcellus SC'}}>
        Js course by Bengali Coder from scratch for free!!
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      
    </div>
</div>
{/*Course 2 =======================================================================================Backend */}
  <div className="m2-c-course2">
  <div className="m2-c-c1-header">
      <h3>BACK END</h3>
    </div>
    <div className="m2-c-c1-cardsection">
    
    <Card style={{ width: '18rem' ,margin:'10px auto',boxShadow:'0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f'}}>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text style={{fontFamily:'Marcellus SC'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' ,margin:'10px auto',boxShadow:'0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f'}}>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text style={{fontFamily:'Marcellus SC'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' ,margin:'10px auto',boxShadow:'0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f'}}>
      <Card.Img variant="top" src={img1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text style={{fontFamily:'Marcellus SC'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  </div>
  
  
 </div>
    </>
  )
}

