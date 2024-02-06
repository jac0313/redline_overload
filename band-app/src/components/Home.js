
import Hero from './Hero';
import Ratio from 'react-bootstrap/Ratio';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'




function Home(){
    
    return(
        <>
        <Hero text= "Ride into the danger zone!"/> 
        <h3 className='text-white text-center'>"You'll never say hello to you<br></br>
            Until you get it on the red line overload<br></br>
            You'll never know what you can do<br></br>
            Until you get it up as high as you can go" </h3>
            <br></br>
        <h4 className='text-white text-center'>We are Redline Overload, a local Littleton CO band playing covers of your favorite songs from the 80's and 90's!</h4>
            
    <Container>
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