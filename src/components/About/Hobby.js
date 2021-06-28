import {Col, Figure} from 'react-bootstrap'

const Hobby = ({hobby}) => {
    return (
        <Col>
            <Figure className="hobbyContainer">
                <Figure.Image className="hobbyImages" src={hobby.image} />
                <Figure.Caption className="hobbyCaption"> 
                        {hobby.text}
                </Figure.Caption>
            </Figure>
        </Col>
    )
}

export default Hobby
