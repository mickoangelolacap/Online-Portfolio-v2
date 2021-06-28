import {Image, Tab} from 'react-bootstrap'

const WorkSample = ({work, index}) => {
    return (
        <Tab.Pane eventKey={index}>
            <Image className="sampleImage" src={work.sample} fluid/>
        </Tab.Pane>
    )
}

export default WorkSample
