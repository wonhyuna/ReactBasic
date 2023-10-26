import './App.css';
import {useRef, useState} from "react";
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import Lifecycle from './Lifecycle';


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

  const onRemove = (targetId) =>{
    console.log(`${targetId}가 삭제되었습니다.`);
    const newDiaryList = data.filter((it)=>it.id !== targetId); //삭제한 값은 안 보이게 filter 사용 
    setData(newDiaryList);
  };

  const onEdit = (targetId, newContent) => {  //수정대상, 수정내용
    setData(  
      data.map((it) =>  //모든 요소들이 id끼리 일치하는지 확인 
      it.id === targetId ? {...it, content: newContent} : it) //일치하면 원본대상 + 내용수정함 / 아니면 원본대상
    )
  }


  return ( 
    // onCreate 만들기
    // 현재 가지고 있는 data 넘기기
    <div className="App">
      <Lifecycle />
      <DiaryEditor onCreate = {onCreate}/>
      <DiaryList onEdit = {onEdit} onRemove = {onRemove} diaryList = {data}/> 
    </div>
  );
}

export default App;
