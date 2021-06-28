import {Container} from 'react-bootstrap'

const Test = () => {
    return (
        <Container>
            {/* <meta property="og:url"           content="https://abeona.com.ph/" />
            <meta property="og:type"          content="website" />
            <meta property="og:title"         content="The Greatest Showman" />
            <meta property="og:description"   content="Wala pa kong sahod" />
            <meta property="og:image"         content={Image} /> */}

            <div className="fb-like" 
                data-href="https://gensanfeedmill.com/contact#header" 
                data-width=""
                data-layout="button_count" 
                data-action="like" 
                data-size="large"  
                data-share="false">
            </div>

            <div className="fb-share-button" 
            data-href="https://gensanfeedmill.com/contact#header" 
            data-layout="button_count"
            data-size="large">
            </div>

        </Container>
    )
}

export default Test
