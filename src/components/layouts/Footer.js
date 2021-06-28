import {Container, Image, Row, Col} from 'react-bootstrap'
import DarkBG from '../../assets/images/FooterBGDark.png'
import LightBG from '../../assets/images/FooterBGLight.png'
import SocmedImages from '../../assets/images/Socmed'
import arrowDark from '../../assets/images/arrowDark.png'
import arrowLight from '../../assets/images/arrowLight.png'
import ScrollAnimation from 'react-animate-on-scroll'

const Footer = ({theme}) => {
    return (
        <Container id="footer" fluid>
            <Row className={theme === 'dark' ? 'footerContentDark' : 'footerContentLight'}>
                <Col className="footerWrapper">
                    <Row>
                        <Col xl={2} md={4}>
                            <Row>
                                <Col sm={12}>
                                    <h1 className="footerHead">Phone</h1>
                                    <p className="footerPara">0956-872-0280</p>
                                </Col>
                                <Col sm={12} className="mt-5">
                                    <h1 className="footerHead">Address</h1>
                                    <p className="footerPara">Rizal, Philippines</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col xl={4} lg={5} md={6} className="socMedContainer">
                            <h1 className="footerHead">Follow Me!</h1>
                            <Row>
                                <Col xs={6}>
                                    <a href="https://www.facebook.com/mickoangelolacap/" target="_blank" rel="noreferrer" className={theme === 'dark' ? 'socmedDark' : 'socmedLight'}>
                                        <Image src={theme === 'dark' ? SocmedImages.FacebookDark : SocmedImages.FacebookLight} className="socmedImg" fluid/>
                                        <p className="footerPara">Facebook</p>
                                    </a>
                                </Col>
                                <Col xs={6}>
                                    <a href="https://www.instagram.com/mickoangelolacap/" target="_blank" rel="noreferrer" className={theme === 'dark' ? 'socmedDark' : 'socmedLight'}>
                                        <Image src={theme === 'dark' ? SocmedImages.InstagramDark : SocmedImages.InstagramLight} className="socmedImg" fluid/>
                                        <p className="footerPara">Instagram</p>
                                    </a>
                                </Col>
                                <Col xs={6}>
                                    <a href="https://t.me/mickoangelolacap" target="_blank" rel="noreferrer" className={theme === 'dark' ? 'socmedDark' : 'socmedLight'}>
                                        <Image src={theme === 'dark' ? SocmedImages.TelegramDark : SocmedImages.TelegramLight} className="socmedImg" fluid/>
                                        <p className="footerPara">Telegram</p>
                                    </a>
                                </Col>
                                <Col xs={6}>
                                    <a href="https://github.com/mickoangelolacap" target="_blank" rel="noreferrer" className={theme === 'dark' ? 'socmedDark' : 'socmedLight'}>
                                        <Image src={theme === 'dark' ? SocmedImages.GithubDark : SocmedImages.GithubLight} className="socmedImg" fluid/>
                                        <p className="footerPara">Github</p>
                                    </a>
                                </Col>
                                <Col xs={6}>
                                    <a href="https://www.linkedin.com/in/mickoangelolacap/" target="_blank" rel="noreferrer" className={theme === 'dark' ? 'socmedDark' : 'socmedLight'}>
                                        <Image src={theme === 'dark' ? SocmedImages.LinkedinDark : SocmedImages.LinkedinLight} className="socmedImg" fluid/>
                                        <p className="footerPara">LinkedIn</p>
                                    </a>
                                </Col>
                                <Col xs={6}>
                                    <a href="https://www.behance.net/mickoalacap" target="_blank" rel="noreferrer" className={theme === 'dark' ? 'socmedDark' : 'socmedLight'}>
                                        <Image src={theme === 'dark' ? SocmedImages.BehanceDark : SocmedImages.BehanceLight} className="socmedImg" fluid/>
                                        <p className="footerPara">Behance</p>
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                        <Col xl={6} xs={12} className="logoContainer">
                            <h1 className="logo">MA<span className="text-primary">C</span>L<span className="text-primary">.</span></h1>
                            <p className="generalPara">&#169; 2020 | Micko Angelo Cequeña Lacap</p>
                            <ScrollAnimation animateIn="fadeIn">
                                <h1 className="sayHi">Say Hi.</h1>
                            </ScrollAnimation>
                            <a href="#header">
                                <Image src={theme === 'dark' ? arrowDark : arrowLight} className="arrowUp" fluid/>
                            </a>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Image src={theme === 'dark' ? DarkBG : LightBG} className="footerBG" fluid/>
        </Container>
    )
}

export default Footer
