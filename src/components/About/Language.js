import {Image} from 'react-bootstrap'

const Language = ({language}) => {
    return (
        <div className="langContainer">
            <Image src={language.image}/>
            <p className="langText">{language.text}</p>
        </div>
    )
}

export default Language
