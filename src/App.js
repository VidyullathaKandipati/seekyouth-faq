import './App.css';
import SeekYouthInformation from './components/SeekYouthInformation';
import Disclaimer from './components/Disclaimer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Seek Youth Employment Guideline
      </header>
      <div className='seek-youth__wrapper'>
        <div className='seek-youth__content-wrapper'>
          <SeekYouthInformation />
        </div>
        <Disclaimer />
      </div>
    </div>
  );
}

export default App;
