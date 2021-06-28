import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Toggle from './components/layouts/Toggle';
import Landing from './components/Landing';
import About from './components/About/About';
import Works from './components/Works/Works';
import DesignDevelop from './components/DesignDevelop';
import Footer from './components/layouts/Footer';
import DarkLightMode from './styles/DarkLightMode';
import {GlobalStyles, LightTheme, DarkTheme} from './styles/GlobalStyles';
import {ThemeProvider} from 'styled-components';
import AnimatedCursor from 'react-animated-cursor'

function App() {

  const [ theme, toggleTheme ] = DarkLightMode();

  return (
    <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
        <AnimatedCursor 
          innerSize={8}
          outerSize={50}
          color='250, 163, 7'
          outerAlpha={0.1}
          innerScale={0.7}
          outerScale={2}
          trailingSpeed={15}
        />
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme}/>
        <Landing theme={theme} toggleTheme={toggleTheme} />
        <About theme={theme} />
        <Works theme={theme} />
        <DesignDevelop theme={theme} />
        <Footer theme={theme} />
    </ThemeProvider>
  );
}

export default App;
