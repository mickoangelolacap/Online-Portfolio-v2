import {Container, Row, Col, Image, } from 'react-bootstrap'
import Selfie from '../../assets/images/selfie.png'
import WebDevDark from '../../assets/images/webDevDark.png'
import WebDevLight from '../../assets/images/webDevLight.png'
import WebDesDark from '../../assets/images/webDesDark.png'
import WebDesLight from '../../assets/images/webDesLight.png'
import AboutDark from '../../assets/images/aboutDark.png'
import AboutLight from '../../assets/images/aboutLight.png'
import Images from '../../assets/images/Hobbies'
import ImagesLang from '../../assets/images/Languages'
import Hobby from './Hobby'
import Language from './Language'
import ScrollAnimation from 'react-animate-on-scroll'

const About = ({theme}) => {

    const hobbies = [
        {
            image: Images.PhotographyDark,
            text: `Photography\n 60%`
        },
        {
            image: Images.BasketballDark,
            text: `Basketball\n 70%`
        },
        {
            image: Images.PaintingDark,
            text: `Painting\n 60%`
        },
        {
            image: Images.BadmintonDark,
            text: `Badminton\n 80%`
        },
        {
            image: Images.GuitarDark,
            text: `Guitar\n 40%`
        },
        {
            image: Images.PianoDark,
            text: `Piano\n 30%`
        },
        {
            image: Images.DrumsDark,
            text: `Drums\n 50%`
        },
        {
            image: Images.CyclingDark,
            text: `Cycling\n 70%`
        },
        {
            image: Images.CrossDark,
            text: `Worship God\n  100%`
        },
    ]

    const HobbyLists = hobbies.map((hobby, index) => <Hobby key={index} hobby={hobby} />)

    const Languages = [
        {
        FrontLanguages : [
            {
                image : ImagesLang.Html,
                text : 'HTML 5'
            },
            {
                image : ImagesLang.Css,
                text : 'CSS 3'
            },
            {
                image : ImagesLang.Js,
                text : 'Javascript'
            },
            {
                image : ImagesLang.Bootstrap,
                text : 'Bootstrap'
            },
            {
                image : ImagesLang.Sass,
                text : 'Sass'
            },
            {
                image : ImagesLang.React,
                text : 'React'
            },
        ], 
        
        FullLanguages : [
            {
                image : ImagesLang.Mongodb,
                text : 'MongoDB'
            },
            {
                image : ImagesLang.Express,
                text : 'Express'
            },
            {
                image : ImagesLang.Node,
                text : 'NodeJS'
            },
            {
                image : ImagesLang.Graphql,
                text : 'GraphQL'
            },
            {
                image : ImagesLang.Laravel,
                text : 'Laravel'
            },
            {
                image : ImagesLang.Mysql,
                text : 'MySQL'
            },
            {
                image : ImagesLang.Php,
                text : 'PHP'
            },
        ], 
        
        OtherLanguages : [
            {
                image : ImagesLang.Github,
                text : 'Github'
            },
            {
                image : ImagesLang.Figma,
                text : 'Figma'
            },
            {
                image : ImagesLang.Heroku,
                text : 'Heroku'
            },
            {
                image : ImagesLang.Filmora,
                text : 'Filmora'
            },
            {
                image : ImagesLang.Autocad,
                text : 'AutoCAD'
            },
            {
                image : ImagesLang.Sketchup,
                text : 'SketchUp'
            },
            {
                image : ImagesLang.Photoshop,
                text : 'Photoshop'
            },
        ]}
        
    ]

    const FrontendLang = Languages[0].FrontLanguages.map((language, index) => <Language key={index} language={language} theme={theme}/>)
    const FullStackLang = Languages[0].FullLanguages.map((language, index) => <Language key={index} language={language} theme={theme}/>)
    const OtherLang = Languages[0].OtherLanguages.map((language, index) => <Language key={index} language={language} theme={theme}/>)

    return (
        <div id="about">
            <Container>
                <ScrollAnimation animateIn="fadeInUp">
                    <Row>
                        <Col sm={5} className="aboutImage">
                            <h1 className="primaryTitle">About.</h1>
                            <h1 className={`primaryTitleBG ${theme === 'dark' ? 'opacityDarkBG' : 'opacityLightBG'}`}>About.</h1>
                            <Image id="selfie" src={Selfie} />
                        </Col>
                        <Col sm={7} className="aboutContent">
                            <h2 className="aboutSub">Hi, I'm a Web Designer and a {"\n"}
                            Full-Stack Web Developer.</h2>
                            <Row>
                                <Col sm={6}>
                                    <Image src={theme === 'dark' ? WebDevDark : WebDevLight}/>
                                    <h3 className="subtitle">Web Development</h3>
                                    <p className={`generalPara ${theme === 'dark' ? 'opacityDark' : 'opacityLight'}`}> <span>Responsiveness</span> is a must. It should work across all devices. Also, It needs to be fast.</p>
                                </Col>
                                <Col sm={6}>
                                    <Image src={theme === 'dark' ? WebDesDark : WebDesLight}/>
                                    <h3 className="subtitle">Web Design</h3>
                                    <p className={`generalPara ${theme === 'dark' ? 'opacityDark' : 'opacityLight'}`}>I always make sure that the design is for the people who will use it. <span>Figma</span> is my main man.</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </ScrollAnimation>
            </Container>
            <Container>
                <Row>
                    <Col className="aboutBGContainer">
                        <Image id="aboutBG" src={theme === 'dark' ? AboutDark : AboutLight} fluid/>
                    </Col>
                </Row>
                <ScrollAnimation animateIn="fadeInUp">
                    <Row className="hobbies">
                        {HobbyLists}
                    </Row>
                </ScrollAnimation>
            </Container>
            <Container>
                <ScrollAnimation animateIn="fadeInUp">
                    <Row>
                        <Col sm={12}>
                            <h1 className="secondaryTitle">Languages <span className="text-primary">i</span> speak.</h1>
                        </Col>
                        <Col md={4} xs={12}>
                            <div>
                                <h2 className="langSub">Front-End</h2>
                                {FrontendLang}
                            </div>
                        </Col>
                        <Col md={4} xs={12} className="fullStackContainer">
                            <div>
                                <h2 className="langSub">Full-Stack</h2>
                                {FullStackLang}
                            </div>
                        </Col>
                        <Col md={4} xs={12} className="otherContainer">
                            <div>
                                <h2 className="langSub">Others</h2>
                                {OtherLang}
                            </div>
                        </Col>
                    </Row>
                </ScrollAnimation>
            </Container>
        </div>
    )
}

export default About
