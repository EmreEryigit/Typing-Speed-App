
import './App.css';
import Input from './components/Input';
import Result from './components/Result';
import Words from './components/Words';
import {useSelector} from 'react-redux';
function App() {
    const timeLeft = useSelector(state => state.type.timeLeft);
  return (
    <div className="App">
      <Words />
      <Input />
      {timeLeft === 0 && <Result />}
    </div>
  );
}

export default App;
