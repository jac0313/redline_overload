
import Hero from './Hero';
import Ratio from 'react-bootstrap/Ratio';
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import red from '/Users/amelia/Desktop/redline_overload/band-app/src/images/red.jpg'
import line from '/Users/amelia/Desktop/redline_overload/band-app/src/images/line.jpg'
import over from '/Users/amelia/Desktop/redline_overload/band-app/src/images/over.jpg'
import load from '/Users/amelia/Desktop/redline_overload/band-app/src/images/load.jpg'



function Home(){
    
    return(
        <>
        <Hero text= "Ride into the danger zone!"/> 
        
        <h4 className='text-white text-center'>We are Redline Overload, a local Littleton CO band playing covers of your favorite songs from the 80's and 90's!<br></br> We play at local venues and are available for private events.</h4>
            
    <Container >
        
    <Carousel fade>
      <Carousel.Item>
        <Image src= {red} fluid/>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={line} fluid />   
      </Carousel.Item>
      <Carousel.Item>
        <Image src={over} fluid/>
      </Carousel.Item>
      <Carousel.Item>
        <Image src={load} fluid />
      </Carousel.Item>
    </Carousel>
  
        <Row className='videos'>
            <Col>
                <Ratio aspectRatio="6x9" className='text-center'>
                <iframe className= 'ml-auto' type="video" title='redline video'  src="https://www.youtube.com/embed/QNLGve4R2KE?si=VQjzVAR5fxo2nvn6" />
                </Ratio>
            </Col>
            <Col>
                <Ratio aspectRatio="6x9" className='text-center'>
                <iframe className= 'ml-auto' type="video" title='redline video'  src="https://www.youtube.com/embed/0bMwmg-gcSc?si=8L8u8uq1o-I2rv3t" />
                </Ratio>
            </Col>
            <Col>
             <Ratio aspectRatio="6x9" className='text-center'>
                <iframe className= 'ml-auto' type="video" title='redline video'  src="https://www.youtube.com/embed/YrypQzE0Kuw?si=Ogif52EtOlJGbnd0" />
             </Ratio>
            </Col>
        </Row>
    </Container>                  
              
        </>
    )
}

export default Home