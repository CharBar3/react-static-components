import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Info from './components/InfoBlock';
import Visitor from './components/Visitors';
import InfoBlock from './components/InfoBlock';
import "./styles.css"

function App() {
  return (
    <div>
    <div className="gradient-overlay">
    </div>
    <div className='grid-container'>
    <Nav/>
    <InfoBlock whichTitle="Reviews" whichData="1,281"/>
    <InfoBlock whichTitle="Average Rating" whichData="4.6"/>
    <InfoBlock whichTitle="Sentiment Analysis" whichData="960" whichData2="122" whichData3="321"/>
    <Visitor whichTitle="Websit Visitors" whichData="821"/>
    </div>
    </div>
  );
}

export default App;
