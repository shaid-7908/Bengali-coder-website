import React from 'react'
import './Course.css'
import { Link } from 'react-router-dom'
import img1 from '../../../Images/LearnHTMLinOneShot.png'
import Button from 'react-bootstrap/Button';
import img2 from '../../../Images/LearnCSSin.png'
import img4 from '../../../Images/LearnReactJs.png'
import img3 from '../../../Images/LearnJavaScript.png'
import img5 from '../../../Images/LearnNodeJs.png'
import Card from 'react-bootstrap/Card';
export default function Course() {
  const handleClick=()=>{
    window.scrollTo({top:0,left:0,behavior:'smooth'})
  }
  return (
    <>
    <div className="courseContainer">
   <div className="course-c-hero">
    <p>
    Ehach And Every Course here Is Designed to take less time and Produce maximum out put
    </p>
    
   </div>
  <div className="courseWrapper">

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
    <Card style={{ width: '18rem' ,margin:'10px auto',boxShadow:'0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f'}}>
      <Card.Img variant="top" src={img4} />
      <Card.Body>
        <Card.Title style={{fontWeight:'bold'}}>React Js in Hindi/Bengali</Card.Title>
        <Card.Text style={{fontFamily:'Marcellus SC'}}>
        Js course by Bengali Coder from scratch for free!!
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' ,margin:'10px auto',boxShadow:'0 3px 1px -2px #0003,0 2px 2px #00000024,0 1px 5px #0000001f'}}>
      <Card.Img variant="top" src={img5} />
      <Card.Body>
        <Card.Title style={{fontWeight:'bold'}}>JS in Hindi/Bengali</Card.Title>
        <Card.Text style={{fontFamily:'Marcellus SC'}}>
        Js course by Bengali Coder from scratch for free!!
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
    
    </>
  )
}
