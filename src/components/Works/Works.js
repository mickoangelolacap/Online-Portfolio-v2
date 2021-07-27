import {Container, Tab, Row, Col, Nav} from 'react-bootstrap'
import GensanSample from '../../assets/images/GensanSample.png'
import UltraSample from '../../assets/images/UltraSample.png'
import RelrenSample from '../../assets/images/RelrenSample.png'
import UltramartSample from '../../assets/images/UltramartSample.png'
import GensanThumbnail from '../../assets/images/GensanThumbnail.png'
import UltraThumbnail from '../../assets/images/UltraThumbnail.png'
import RelrenThumbnail from '../../assets/images/RelrenThumbnail.png'
import UltramartThumbnail from '../../assets/images/UltramartThumbnail.png'
import AdoptSample from '../../assets/images/AdoptSample.png'
import MimesisSample from '../../assets/images/MimesisSample.png'
import CovidSample from '../../assets/images/CovidSample.png'
import AdoptThumbnail from '../../assets/images/AdoptThumbnail.png'
import MimesisThumbnail from '../../assets/images/MimesisThumbnail.png'
import CovidThumbnail from '../../assets/images/CovidThumbnail.png'
import GensanMockup from '../../assets/images/GensanMockup.png'
import UltraMockup from '../../assets/images/UltraMockup.png'
import ImagesLang from '../../assets/images/Languages'
import DepressionMockup from '../../assets/images/DepressionMockup.png'
import DepressionThumbnail from '../../assets/images/DepressionThumbnail.png'
import DepressionSample from '../../assets/images/DepressionSample.png'
import ClassifyThumbnail from '../../assets/images/ClassifyThumbnail.png'
import ClassifySample from '../../assets/images/ClassifySample.png'
import WorkSample from './WorkSample'
import WorkContent from './WorkContent'
import WorkThumbnail from './WorkThumbnail'
import ScrollAnimation from 'react-animate-on-scroll'

const Works = ({theme}) => {

    const workLists = [
        {
            title : "Gensan Feedmill",
            year : '2021',
            sample : GensanSample,
            thumbnail : GensanThumbnail,
            text : "Design & Develop",
            language : [ImagesLang.React, ImagesLang.Bootstrap, ImagesLang.Sass, ImagesLang.Github, ImagesLang.Figma],
            website : true,
            webURL : 'https://gensanfeedmill.com/',
            mockup : true,
            mockupImage : GensanMockup
        },
        {
            title : "Ultra Alliance",
            year : '2021',
            sample : UltraSample,
            thumbnail : UltraThumbnail,
            text : "Design Only",
            language : [ImagesLang.Figma, ImagesLang.Photoshop],
            website : false,
            mockup : true,
            mockupImage : UltraMockup
        },
        {
            title : "Help Depression",
            year : '2021',
            sample : DepressionSample,
            thumbnail : DepressionThumbnail,
            text : "Design & Develop",
            language : [ImagesLang.React, ImagesLang.Bootstrap, ImagesLang.Sass, ImagesLang.Github, ImagesLang.Figma],
            website : true,
            webURL : 'https://help.classify.com.ph/',
            mockup : true,
            mockupImage : DepressionMockup
        },
        {
            title : "Classify Website",
            year : '2021',
            sample : ClassifySample,
            thumbnail : ClassifyThumbnail,
            text : "Design & Develop",
            language : [ImagesLang.React, ImagesLang.Bootstrap, ImagesLang.Sass, ImagesLang.Github, ImagesLang.Figma],
            website : true,
            webURL : 'https://www.classify.com.ph/',
            mockup : false,
        },
        {
            title : "RRSSI",
            year : '2021',
            sample : RelrenSample,
            thumbnail : RelrenThumbnail,
            text : "Design & Develop On-going",
            language : [ImagesLang.React, ImagesLang.Mongodb, ImagesLang.Express ,ImagesLang.Node ,ImagesLang.Graphql, ImagesLang.Figma],
            website : false,
            mockup : false
        },
        {
            title : "Ultramart",
            year : '2020',
            sample : UltramartSample,
            thumbnail : UltramartThumbnail,
            text : "Develop Only",
            language : [ImagesLang.Bagisto, ImagesLang.Laravel],
            website : true,
            webURL : 'https://ultramart.com.ph/',
            mockup : false
        },
    ]

    // const switchWork = (workIndex) => {
    //     console.log(workIndex)
    // }
    
    const WorkSamples = workLists.map((work, index) => <WorkSample key={index} index={index} work={work} />)
    const WorkContents = workLists.map((work, index) => <WorkContent key={index} index={index} work={work} workLists={workLists} theme={theme}/>)
    const WorkThumbnails = workLists.map((work, index) => <WorkThumbnail key={index} index={index} work={work}/>)

    const projectLists = [
        {
            title : "Adopt-a-Fur",
            year : '2020',
            sample : AdoptSample,
            thumbnail : AdoptThumbnail,
            text : "Adop-a-Fur is a pet adoption web app that aims to create a community for animals.",
            language : [ImagesLang.Laravel, ImagesLang.Js, ImagesLang.Html, ImagesLang.Css, ImagesLang.Bootstrap],
            website : true,
            webURL : 'https://adopt-a-fur.herokuapp.com/',
            mockup : false
        },
        {
            title : "Mimesis",
            year : '2020',
            sample : MimesisSample,
            thumbnail : MimesisThumbnail,
            text : "Mimesis is an Online / Home-based tutorial web app for aspiring Artists.",
            language : [ImagesLang.React, ImagesLang.Mongodb, ImagesLang.Express ,ImagesLang.Node ,ImagesLang.Graphql],
            website : true,
            webURL : 'https://mimesis-macl.herokuapp.com/',
            mockup : false
        },
        {
            title : "Covid-Watch",
            year : '2020',
            sample : CovidSample,
            thumbnail : CovidThumbnail,
            text : "Covid-Watch is a an app used to test your status during Covid Season.",
            language : [ImagesLang.Html, ImagesLang.Css, ImagesLang.Js ,ImagesLang.Bootstrap, ImagesLang.Php],
            website : true,
            webURL : 'https://macl-covid-watch.herokuapp.com/views/landing.php',
            mockup : false
        }
    ]

    const ProjectSamples = projectLists.map((work, index) => <WorkSample key={index} index={index} work={work} />)
    const ProjectContents = projectLists.map((work, index) => <WorkContent key={index} index={index} work={work} workLists={projectLists} theme={theme}/>)
    const ProjectThumbnails = projectLists.map((work, index) => <WorkThumbnail key={index} index={index} work={work}/>)

    return (
        <Container id="works">
            <ScrollAnimation animateIn="fadeInUp">
                <Tab.Container defaultActiveKey="0" transition={false}>
                    <Row className="workContainer">
                        <Col md={7}>
                            <h1 className="primaryTitle">Works.</h1>
                            <h1 className={`primaryTitleBG ${theme === 'dark' ? 'opacityDarkBG' : 'opacityLightBG'}`}>Works.</h1>
                            <Tab.Content>
                                {WorkSamples}
                            </Tab.Content>
                        </Col>
                        <Col md={5} className="workContent">
                            <Tab.Content>
                                {WorkContents}
                            </Tab.Content>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Nav className="workLists">
                                {WorkThumbnails}
                            </Nav>
                        </Col>
                    </Row>
                </Tab.Container>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp">
                <Tab.Container defaultActiveKey="0" transition={false}>
                    <Row className="projectContainer">
                        <Col sm={12}>
                            <h1 className="secondaryTitle">Personal <span className="text-primary">p</span>rojects.</h1>
                        </Col>
                        <Col sm={12}>
                            <Row className="projectContentContainer">
                                <Col sm={7} className="d-flex align-items-end">
                                    <Tab.Content>
                                        {ProjectSamples}
                                    </Tab.Content>
                                </Col>
                                <Col sm={5} className="workContent">
                                    <Tab.Content>
                                        {ProjectContents}
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} className="">
                            <Nav className="workLists">
                                {ProjectThumbnails}
                            </Nav>
                        </Col>
                    </Row>
                </Tab.Container>
            </ScrollAnimation>
        </Container>
    )
}

export default Works
