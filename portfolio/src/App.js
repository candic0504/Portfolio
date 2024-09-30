
import './App.css';
import { Button } from './Components/Button';
import image from './github.png';
import { createContext, useState } from 'react';
import ReactSwitch from 'react-switch';

export const ThemeContext = createContext(null);

function App() {

  const[theme, setTheme] = useState("jour");

  //SI le thème est jour alors le changer en thème nuit
  //SI le thème est nuit alors le changer en thème nuit
  const changementTheme = () =>{
    setTheme((curr)=> (curr === "jour" ? "nuit" : "jour"));
  }

  return (
    <ThemeContext.Provider value={{theme,changementTheme}}>
      <div className="App" id={theme}>
        <a href="https://github.com/candic0504" target="_blank" rel="noreferrer"> 
          <img src={image} style={{ width: '180px', height: 'auto', margin: '0', position: 'absolute', top: '0', left: '0' }}></img>
        </a>
        <div className='presentation'>
            <h1>Candice Legay</h1>
            <p>Let's create a world where IT development merges with design and creativity</p>
        </div>
        <div className='bouton-container'>
            <Button titre="Download my CV" url="https://acrobat.adobe.com/id/urn:aaid:sc:EU:88f71428-3676-4184-990d-c062a8b22bec" className="CV"></Button>
            <Button titre="Contact Me" url="mailto:legay.candice@yahoo.fr" className="Contact"></Button>
        </div>
        <div className='switch'>
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
              width={80}/>
        </div>
      </div>
    </ThemeContext.Provider>
    
  );
}

export default App;
