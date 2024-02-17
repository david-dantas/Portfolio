// App.js
import { useState } from 'react';
import './App.css';

function App() {
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [showAbility, setShowAbility] = useState(false);

  function showContact() {
    if (showContactInfo) {
      return (
        <div>
          <p> E-mail: daviddantas21@gmail.com</p>
          <p>Phone: +55 (83) 9 8102-0108</p>
        </div>
      );
    }
    return null;
  }

  function abilities() {
    if (showAbility) {
      return (
        <div>
          <ul>
            <li>Git</li>
            <li>Linux</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>ReactJS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Python</li>
            <li>C#</li>
            <li>SQL</li>
            <li>NodeJS</li>
          </ul>
        </div>
      );
    }
    return null;
  }

  return (
    <>
      <div id='main-div'>
        <div>
          <h1 id='title'>David Dantas</h1>
        </div>
        <div id='info-container'>
          <div id='about-me'>
            <h2>About me</h2>
            <p id='text-about-me'>
              My name is David, I'm from Patos-PB, Brazil.
              I'm 26 years old. <br /> I'm graduated in Civil Engineering.
              I started learning programming <br /> during my graduation, where I learned basic Python.
              After my <br />graduation, I decided to start learning programming by studying <br /> at Trybe School, which is an online programming school. <br />
              I'm learning to be a full-stack developer. At the moment,  <br /> I already learned Linux, Git, HTML, CSS, JavaScript, br TypeScript, and React. <br />
              You can check all the abilities I will have at the end by clicking the abilities button.
            </p>
          </div>
          <div>
            <img id="minha-foto" src="https://i.imgur.com/IEsG7tS.jpeg" alt="" />
          </div>
        </div>
        <div id='social-media'>
          <a href="https://www.instagram.com/davidpk21/" target='_blank'>
            <img id='img-instagram' src="https://static.vecteezy.com/system/resources/previews/023/986/555/original/instagram-logo-instagram-logo-transparent-instagram-icon-transparent-free-free-png.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/davidbdb/" target='_blank'>
            <img id='img-linkedin' src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png" alt="" />
          </a>
          <a href="https://github.com/david-dantas" target='_blank'>
            <img id='img-github' src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
          </a>
        </div>
        <div id='div-botoes'>
          <button className='botoes' onClick={() => setShowContactInfo(!showContactInfo)}>Contact</button>
          {showContact()}
          <button className='botoes' onClick={() => setShowAbility(!showAbility)}>Abilities</button>
          {abilities()}
        </div>
      </div>
    </>
  );
}

export default App;
