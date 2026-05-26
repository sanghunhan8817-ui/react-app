import './App.scss';
// import MyCompenent from './MyCompenent';
import {useState} from 'react' 
import Modal from './components/Modal'

function App() {
  let post="가산디지털 맛집"
  const [blog, setBlog] = useState(['가디맛집', '강남맛집', '신림', '피자'])
  const [cnt, setCnt] = useState(0)
  const [modal, setModal] = useState(false)

  // const [isToggleOn, setIsToggleOn] = useState(true)
  // const [username, setUsername] = useState("")
  // const [message, setMessage] = useState("")
  // const [value, setValue]=useState('grape')
  // console.log(username)
  // function handleClick() {
  //   setisToggleOn((isToggleOn) => isToggleOn );
  // }
  // const handleClick = () => {
  //   setIsToggleOn((isToggleOn) => isToggleOn );
  // }
  // const onChangeUsername = (e) =>(setUsername(e.target.value))
  // const onChangeMessage = (e) =>(setMessage(e.target.value))
  // const onClickbtn = () => {
  //   console.log('$(username) + : + $(message)')
  // }
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert('선택한 과일' + value )
  // }
  return (
    <div className='App'>
      <div className="black-nav">
        <h4>블로그</h4>
      </div>
      <button onClick={() => {
        let copy=[...blog];
        copy[0] = '구로맛집';
        setBlog(copy)
      }}>
       수정
      </button>
      <div className="blogBody">
          {/* // <h4>{post}</h4>
          // <h4>제목</h4>
          // <p>5월 26일</p>
          // <button onClick={handleClick}>
          //   {isToggleOn ? "켜짐" : "꺼짐" }
          // </button> <br />
          // <input type="text" placeholder='사용자명' value={username} onChange={onChangeUsername} />
          // <input type="text" placeholder='아무거나 입력하세요' value={message} onChange={onChangeMessage} />
          // <button onClick={onClickbtn}>확인</button>
          // <hr />
          // <form onSubmit={handleSubmit} > */}
            {/* <label>
              과일 선택 :
              <select value={value} onChange={(e) => {setValue(e.target.value)}} >
                <option value="apple">사과</option>
                <option value="banana">바나나</option>
                <option value="grape">포도</option>
              </select>
            </label>
            <button type='submit'>제출</button>
          </form> */}
          <div className="list">
            <h4>{blog[0]} <span onClick={()=>{setCnt(cnt+1)}}>👍</span>{cnt}</h4>
            <h4>글제목</h4>
            <p>5월 26일</p>
          </div>

          <div className="list">
            <h4>{blog[1]}</h4>
            <h4>글제목</h4>
            <p>5월 26일</p>
          </div>

          <div className="list">
            <h4>{blog[2]}</h4>
            <h4 onClick={() => {setModal(!modal)}}>글제목</h4>
            <p>5월 26일</p>
          </div>

      </div>
      {
        modal==true ? <Modal/> : null
      }
      {
        blog.map(function(a){
          return (
            <div className="list">
              <h4>{a}</h4>
              <h4 onClick={() => {setModal(!modal)}}>글제목</h4>
              <p>5월 26일</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;