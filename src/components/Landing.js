import {Button, Container, Row, Col, Image} from 'react-bootstrap'
import Typewriter from 'typewriter-effect'
import Header from './layouts/Header'
import Scroll from '../assets/images/scroll.png'

const Landing = ({ theme, toggleTheme }) => {

    return (
        <Container id="landing" className={theme === 'dark' ? 'landingDark' : 'landingLight'} fluid>
            <Row>
                <Col sm={12}>
                    <Header theme={theme} toggleTheme={toggleTheme}/>
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <h1 id="title1">Make your Idea</h1>
                    <h1 className="title2 pr-lg-5 mr-lg-4">THE</h1>
                    <h1 className="title2">
                        <Typewriter
                            options={{
                                strings: ['REAL THING', 'VIRAL', 'BUZZ', 'TREND', 'IDEA'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                    <h1 id="title3">Design and Develop</h1>
                </Col>
            </Row>
            <Row>
                <Col className="scroll" sm={12}>
                    <Button onClick={toggleTheme} variant="outline-primary" id="buttonToggle">
                        {theme === 'dark' ? 'Let there be Light!' : 'Turn to Darkness'}
                    </Button>
                    <Image src={Scroll}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Landing
