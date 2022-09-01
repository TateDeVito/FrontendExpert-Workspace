import logo from './logo.svg';
import './App.css';
import PersistentDrawerLeft from './Components/PersistentDrawerLeft.tsx';
import AnswerDisplay from './Components/AnswerDisplay.tsx';

const answersCompleted = ["Sign-Up Form", "Item Cart", "Recipe", "Blog", "Rainbow Circle", "Navbar"]
const answerToDisplay = "SignUpForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PersistentDrawerLeft answers={answersCompleted} />
        <AnswerDisplay />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome! This React app is used to track progress in the AlgoExpert.io FrontEnd Expert course.
        </p>
      </header>
    </div>
  );
}

export default App;
