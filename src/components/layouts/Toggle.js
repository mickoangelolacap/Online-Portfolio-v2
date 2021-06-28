import {useState} from 'react'
import {Container ,Image} from 'react-bootstrap'
import Dark from '../../assets/images/Dark.png'
import Light from '../../assets/images/Light.png'

const Toggle = ({theme, toggleTheme}) => {

    const [scroll ,setScroll] = useState(false)

    window.addEventListener('scroll', () => {
        window.scrollY >= 500 ? setScroll(true) : setScroll(false)
    })

    return (
        <Container id="toggle" className={scroll ? 'd-flex' : 'd-none'} fluid>
            <button className="iconToggleContainer">
                <Image src={theme === 'dark' ? Light : Dark} onClick={toggleTheme}/>
            </button>
        </Container>
    )
}

export default Toggle
