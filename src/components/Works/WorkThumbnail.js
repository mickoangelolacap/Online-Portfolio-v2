import {Image, Nav} from 'react-bootstrap'

const WorkThumbnail = ({work, index}) => {
    return (
        <Nav.Item className="workThumbnail">
            <Nav.Link eventKey={index}>
                <Image className="thumbnail" src={work.thumbnail} fluid/>
            </Nav.Link>
        </Nav.Item>
    )
}

export default WorkThumbnail
