import { useState } from 'react';
import {Button, Tab, Modal, Image} from 'react-bootstrap'
import LanguageUsed from './LanguageUsed'

const WorkContent = ({work, index, workLists, theme}) => {

    const [show, setShow] = useState(false);

    const Lang = workLists[index].language.map((language, index) => <LanguageUsed key={index} language={language} />)

    const projects = ["Adopt-a-Fur", "Mimesis", "Covid-Watch"]

    return (
        <Tab.Pane eventKey={index}>
            <h2 className="subtitle">{work.title}</h2>
            <span className="workYear">{work.year}</span>
            <p className={`generalPara ${theme === 'dark' ? 'opacityDark' : 'opacityLight'}`}>{work.text}</p>
            <div>
                {Lang}
            </div>
            <a href={work.webURL} target="_blank" rel="noreferrer">
                <Button variant="primary" id="viewWeb" disabled={!work.website}>Visit Website</Button>
            </a>
            {projects.includes(work.title) ? '' : <Button variant="outline-primary" id="visitMock" disabled={!work.mockup} onClick={() => setShow(true)}>View Mockup</Button>}

            <Modal
                size="lg"
                show={show}
                onHide={() => setShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
                dialogClassName="work-modal"
                animation={false}
            >
                <Modal.Header className="workModalHeader" closeButton>
                </Modal.Header>
                <Modal.Body className="workModalBody">
                    <Image src={work.mockupImage} fluid/>
                </Modal.Body>
            </Modal>
        </Tab.Pane>
    )
}

export default WorkContent
