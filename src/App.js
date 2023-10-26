import './App.css';
import {useEffect, useRef, useState} from "react";
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import Lifecycle from './Lifecycle';

//https://jsonplaceholder.typicode.com/comments 

function App(){
  const [data, setData] = useState([]); //일기 데이터 빈 배열로 시작

  const dataId = useRef(0)

  const getData = async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/comments'
    ).then((res)=>res.json());
    
    const initData = res.slice(0, 20).map((it)=>{
      return{
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime(),
        id: dataId.current++
      }
    })

    setData(initData);
    
  };

  useEffect(()=>{
    getData();
  }, []);

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
