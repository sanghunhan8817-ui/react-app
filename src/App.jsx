import './App.scss';
import MyCompenent from './MyCompenent';
import {useState} from 'react' 

function App() {
  let post="가산디지털 맛집"
  const [message, setMessage] = useState('s')
  return (
    <div className='App'>
      <div className="black-nav">
        <h4>블로그</h4>
      </div>
      <div className="blogBody">
        <h4 style={{fontSize:'18'}}>{post}</h4>
        <MyCompenent name="리액트" a="바보" />
      </div>
      <button onClick={()=>setMessage('hi')}>입장</button>
      <button onClick={()=>setMessage('bye')}>퇴장</button>
      <h2>{message}</h2>
      <p>dddddd</p>
    </div>
  );
}

export default App;