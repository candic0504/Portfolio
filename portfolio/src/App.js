import logo from './logo.svg';
import './App.css';
import { Button } from './Components/Button';
import image from './github-logo.png';


function App() {
  return (
    <div className="App">
      <a href="https://github.com/candic0504" target="_blank"> 
        <img src={image} style={{ width: '90px', height: 'auto', margin: '0', position: 'absolute', top: '0', left: '0' }}></img>
      </a>
      <div className='presentation'>
          <h1>Candice Legay</h1>
          <p>Let's create a world where the development IT collide with the design and the creativity</p>
      </div>
      <div className='bouton-container'>
          <Button titre="Download my CV" url="https://acrobat.adobe.com/id/urn:aaid:sc:EU:88f71428-3676-4184-990d-c062a8b22bec"></Button>
          <Button titre="Contact Me" url="https://acrobat.adobe.com/id/urn:aaid:sc:EU:88f71428-3676-4184-990d-c062a8b22bec"></Button>
      </div>
    </div>
  );
}

export default App;
