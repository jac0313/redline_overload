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
                    <Card.Img variant="top" src="band-app/src/images/catherine.jpeg" />
                    <Card.Body>
                        <Card.Title>Kathryn</Card.Title>
                        <Card.Text>
                         Kathryn is the dynamic vocalist and front woman for Redline Overload. She brings the crowds to their feet with energetic delivery, beautiful vocals and her blonde bombshell aesthetic. This she-wolf fuels her performances with the rage and fury that can only be harnessed by a mother of three boys.
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
                        Trent is Redline Overload's lead guitarist. He drops panties and breaks hearts with his soloing skills. Trent deploys the famous Joe Satriani technique of shaving his head for maximum aerodynamic playing along the fretboard. Although you wouldn't guess from from his glamorous presentation, Trent likes to wind down humbly with a sixer of his favorite beer and Totino's pizza rolls.
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
                        <Card.Title>Sara</Card.Title>
                        <Card.Text>
                        Sara is Redline's drummer and beating heart. This horse riding, hockey playing, renaissance girl started playing drums just a couple years ago, probably on a dare, and is quickly rising the ranks of the worlds most influential drummers, earning follows and recognition from national and international acts. The defacto band manager is also venturing into the sound engineering and production space because her curiosity can't be satiated. Better come catch her as Redline's drummer before she get's bored and starts training to become an astronaut or something.  
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
                        Fernando is Redline's newest addition and is featured on bass guitar. In their search for a new bass player, the band discovered Fernando at an insane asylum for deluded musicians and were charmed with his infectious playing style, winning personality, and devilish good looks. He's always ready to bring the funk and the pain so long as he's not dying from the flu and coughing his motherfucking spleen out.
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