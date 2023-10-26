import './App.css';
import {useRef, useState} from "react";
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';


function App(){
  const [data, setData] = useState([]); //일기 데이터 빈 배열로 시작

  const dataId = useRef(0)

  const onCreate = (author, content, emotion) =>{
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current
    }

    dataId.current += 1;
    setData([newItem, ...data]); //newItem 뒤에 data들 붙이기
  }

  return ( 
    // onCreate 만들기
    // 현재 가지고 있는 data 넘기기
    <div className="App">
      <DiaryEditor onCreate = {onCreate}/>
      <DiaryList diaryList = {data}/> 
    </div>
  );
}

export default App;
