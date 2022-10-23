import React from 'react'
import { Container } from 'react-bootstrap'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useEffect, useState } from "react"
import ReactMarkdown from 'react-markdown'
import './Htmlpage.css'
export default function Htmlpage() {
  const [pstate,setPstate]=useState(1)
  const [postContent, setPostContent] = useState("");

    useEffect(() => {
      import(`../../../Markdown/HTMLmd/html${pstate}.md`)
        .then(res => {
          fetch(res.default)
            .then(response => response.text())
            .then(response => setPostContent(response))
            .catch(err => console.log(err))
        })
    }, [pstate]);
    const handleClick1=()=>{
         if(pstate ===7){
          setPstate(1)
         }
         else {
          setPstate(pstate+1)
         }
         window.scrollTo({top:0,left:0,behavior:'smooth'})
    }
    const handleClick2=()=>{
      if(pstate ===1){
        setPstate(1)
       }
       else {
        setPstate(pstate-1)
       }
       window.scrollTo({top:0,left:0,behavior:'smooth'})
    }
    console.log(pstate)
  return (
  
    <>
    <Container className='htmlPagestyle'>
    <div className="buttonDiv">
   <div className='buttonPrev' onClick={handleClick2}>Previous</div>
    <div className='buttonNext' onClick={handleClick1}>Next</div>
   
  </div> 
    <ReactMarkdown
    children={postContent}
    components={{
      code({node, inline, className, children, ...props}) {
        const match = /language-(\w+)/.exec(className || '')
        return !inline && match ? (
          <SyntaxHighlighter
            children={String(children).replace(/\n$/, '')}
            style={dark}
            language={match[1]}
            PreTag="div"
            {...props}
          />
        ) : (
          <code className={className} {...props}>
            {children}
          </code>
          
        )
      }
    }}
  />
   
   <div className="buttonDiv">
   <div className='buttonPrev' onClick={handleClick2}>Previous</div>
    <div className='buttonNext' onClick={handleClick1}>Next</div>
   
  </div> 
      
      </Container>
      </>
  )
}
