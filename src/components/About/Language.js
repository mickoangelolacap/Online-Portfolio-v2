import {Image} from 'react-bootstrap'

const Language = ({language, theme}) => {
    return (
        <div className="langContainer">
            <Image src={language.image}/>
            <p className={`langText ${theme === 'dark' ? 'opacityDark' : 'opacityLight'}`}>{language.text}</p>
        </div>
    )
}

export default Language
