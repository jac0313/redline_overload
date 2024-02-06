import Hero from './Hero'
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap'

function Bios(){
    return(
        <>
       <Hero text = "A little about us..."/>
    <Container> 
        <Row>
            <Col>
                <Card className='mb-5' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/Users/amelia/Desktop/redline_overload/band-app/src/images/catherine.jpeg" />
                    <Card.Body>
                        <Card.Title>Catherine</Card.Title>
                        <Card.Text>
                         Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col> 
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/Users/amelia/Desktop/redline_overload/band-app/src/images/trent.jpeg" />
                    <Card.Body>
                        <Card.Title>Trent</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/Users/amelia/Desktop/redline_overload/band-app/src/images/sarah.jpeg" />
                    <Card.Body>
                        <Card.Title>Sarah</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/Users/amelia/Desktop/redline_overload/band-app/src/images/fernando.jpeg/100px180" />
                    <Card.Body>
                        <Card.Title>Fernando</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container> 
        </>
    )
}
export default Bios