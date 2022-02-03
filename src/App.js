import './App.css';
import Explanation from './Component/Explanation';
import HeadNav from './Component/Navbar';
import TopPic from './Component/TopPic';
import {Container} from 'react-bootstrap';
import Submission from './Component/Submission';
import Footer from './Component/Footer';


function App() {
  return (
    <div className="App bg-light">
      <HeadNav/>
      <TopPic/>
      <Container id='start' className='justify-content-center'>
        <h1 className='text-center'>How much time have you spent on Youtube? The answer might be more than you expected.</h1>
      </Container>
      <br></br>
      <div id='explain'>
        <Explanation/>
      </div>
      <div id='upload'>
        <Submission/>
      </div>
      <div id='ending'>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
