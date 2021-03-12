import logo from './img/source.gif';
import linkedinIcon from './img/linkedin-icon.png';
import githubIcon from './img/github-icon.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{color: 'black'}}>Still building, be patiently &lt;3</p>
        <div>
        <img src={linkedinIcon} alt="linkedin-icon"/>
          <a
            className="App-link"
            href="https://www.linkedin.com/in/gabrielpsz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @gabrielpsz
          </a>
        </div>
        <div>
        <img src={githubIcon} alt="github-icon"/>
          <a
            className="App-link"
            href="https://github.com/gabrielpsz"
            target="_blank"
            rel="noopener noreferrer"
          >
            @gabrielpsz
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
