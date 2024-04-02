import './App.css';
import AboutPage from './components/AboutPage';
import Lists from './components/Lists';
import MyButton from './components/MyButton';
import Board from './components/Board';
import Form from './components/Form';
import MovingDot from './components/MovingDot';
import FeedbackForm from './components/FeedbackForm';
import Form2 from './components/Form2';
import Accordion from './components/Accordion';
import Page from './components/Page';


const user = {
  name: 'Cindy Bosibori',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};


function App() {

  return (
    <div className="App">
      <h1>This is the start of the app</h1>
      <AboutPage />
      <Lists />
      <MyButton />
      
    

    <h1>{user.name}</h1>
    <img
      className='avatar'
      src={user.imageUrl}
      alt={'photo of' + user.name}
      style = {{
        width: user.imageSize,
        height: user.imageSize,
        borderRadius: user.imageSize / 2,
      }}
    />

    {/*<MyButton />
    <h1>Rendering the same component multiple times means that each will have its own state</h1>
    <h2>Counters update separately</h2>
    <MyButton />
    <MyButton />
      */}

    <br />
    <br />
    <br />
    <Board />
    
    <br />
    <br />
    <br />
    <Form />

    <br />
    <br />
    <br />
    <MovingDot />

    <br />
    <br />
    <br />
    <FeedbackForm />

    <br />
    <br />
    <br />
    <Form2 />

    <br />
    <br />
    <br />
    <Accordion />

    <br />
    <br />
    <br />
    <Page />

    </div>
  );
}

export default App;
