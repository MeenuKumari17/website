import './App.css';
import Body from './components/body/Body';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';

function App() {
  return (
    <div className="App">
      <Header/>
      <Menu/>
      <Body/>
    </div>
  );
}

export default App;
