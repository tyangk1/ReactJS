import logo from './logo.svg';
import './App.css';
import Car from './Car';
import Xe from './Xe';
function App() {
  const html = (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
            <Car />
          <a
              className='App-link'
              href='https://reactjs.org'
              target='_blank'
              rel='noopener noreferrer'
          >
            Learn React
          </a>
            <Car />
            <Xe/>

        </header>
      </div>
  );
  return html;
}

export default App;