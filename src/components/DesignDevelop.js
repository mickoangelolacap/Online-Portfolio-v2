import { useState } from 'react'
import {Container, Button, Image} from 'react-bootstrap'
import Typewriter from 'typewriter-effect'
import DarkBG from '../assets/images/DesignDevelopBGDark.png'
import LightBG from '../assets/images/DesignDevelopBGLight.png'
import ScrollAnimation from 'react-animate-on-scroll'
import ContactModal from './ContactModal'

const DesignDevelop = ({theme}) => {

    const [showModal, setShowModal] = useState(false)

    return (
        <ScrollAnimation animateIn="fadeIn">
            <Container id="designDevelop" fluid>
                    <div className="typeContainer">
                        <h1 className="designTitle">Design &</h1>
                        <h1 className="developTitle">
                            <Typewriter
                                options={{
                                    loop: true,
                                }}
                                onInit={(typewriter) => {
                                    typewriter.typeString('D<span style="color: #6995B8;">e</span><span style="color: #A56E4E;">v</span><span style="color: #588644;">e</span><span style="color: #A56E4E;">l</span><span style="color: #588644;">o</span><span style="color: #6995B8;">p</span>')
                                    .deleteAll()
                                    .start();
                                    typewriter.typeString('Develop')
                                    .deleteAll()
                                    .start();
                                }}
                            />
                        </h1>
                    </div>
                    <h2 className={`secondaryTitle ${theme === 'dark' ? 'opacityDark' : 'opacityLight'}`}>Contact me and we'll see.</h2>
                    <Button variant="outline-primary ringBell" onClick={() => setShowModal(true)}>Ring a Bell</Button>
                    <Image src={theme === 'dark' ? DarkBG : LightBG} className="designDevelopBG"/>
            </Container>
            <ContactModal show={showModal} onHide={() => setShowModal(false)}/>
        </ScrollAnimation>
    )
}

export default DesignDevelop
