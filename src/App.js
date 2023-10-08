import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

const dummyList = [ //DiaryEditor.js랑 변수 똑같이
  {
    id: 1,
    author: "원현아", 
    content: "하이1",
    emotion: 5,
    created_date: new Date().getTime()
  }, 

  {
    id: 2,
    author: "홍길동", 
    content: "하이2",
    emotion: 2,
    created_date: new Date().getTime()
  }, 

  {
    id: 3,
    author: "아무개", 
    content: "하이3",
    emotion: 3,
    created_date: new Date().getTime()
  }
]

const App = () => {
  return (
    <div className="App">
      <DiaryEditor/>
      <DiaryList diaryList = {dummyList}/>
    </div>
  );
}

export default App;
