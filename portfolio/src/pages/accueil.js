import { createContext, useState, useEffect } from 'react';
import ReactSwitch from 'react-switch';
import { Button } from '../Components/Button';
import Projets from './projets';

export const ThemeContext = createContext(null);

export default function Accueil() {
    const [theme, setTheme] = useState("jour");

    const changementTheme = () => {
      setTheme((curr) => (curr === "jour" ? "nuit" : "jour"));
    }

    const etoile = () => {
      const container = document.querySelector('.etoiles-container');
      const e = document.createElement('div');
      e.setAttribute('class', 'etoile');
      container.appendChild(e);
      e.style.left = Math.random() * window.innerWidth + 'px';
      setTimeout(() => {
        container.removeChild(e);
      }, 5000);
    };

    useEffect(() => {
      const interval = setInterval(etoile, 1000);
      return () => clearInterval(interval);
    }, []);

    return (
      <ThemeContext.Provider value={{theme,changementTheme}}>
        <div className="App" id={theme}>
          <div className="etoiles-container"></div>
          <div className="main-layout">
            {/* Colonne gauche */}
            <div className="side-bar">
              <a href="https://github.com/candic0504" target="_blank" rel="noreferrer"> 
                <img src={`${process.env.PUBLIC_URL}/github.png`} alt="GitHub" style={{ width: '180px', height: 'auto', margin: '0', position: 'absolute', top: '0', left: '0' }} />
              </a>
              <div className="switch">
                <ReactSwitch onChange={changementTheme} checked={theme === "nuit"} 
                  onColor="#FFFFFF" 
                  offColor="#C4FDFB"    
                  onHandleColor="#F1895C" 
                  offHandleColor="#66B7AD"   
                  handleDiameter={30} 
                  checkedIcon={<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', fontSize: 25, color: 'white' }}>🌞</div>}
                  uncheckedIcon={<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', fontSize: 25, color: 'white'}}>🌚</div>} 
                  boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)" 
                  activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)" 
                  height={40} 
                  width={80}
                />
              </div>
            </div>
            {/* Colonne droite avec présentation et projets */}
            <div className="content">
                <div className='accueil'>
                    <div className="presentation">
                        <h1>Candice Legay</h1>
                        <p>Let's create a world where IT development merges with design and creativity</p>
                    </div>
                    <div className='bouton-container'>
                        <Button titre="Download my CV" url="https://acrobat.adobe.com/id/urn:aaid:sc:EU:88f71428-3676-4184-990d-c062a8b22bec" className="CV"></Button>
                        <Button titre="Contact Me" url="mailto:legay.candice@yahoo.fr" className="Contact"></Button>
                    </div>
                </div>
              <div className='projet'>
                <h2>My Projects</h2>
                <h2>______________________</h2>
                <Projets></Projets>
              </div>
            </div>
          </div>
        </div>
      </ThemeContext.Provider>
    );
}
