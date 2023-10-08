const DiaryList = ({diaryList}) => {
  console.log(diaryList);
  return (
    <div className = "DiaryList">
    <h2>일기 리스트</h2>
    <h4>{diaryList.length}개의 일기가 있습니다.</h4>

    <div>
      {diaryList.map((it)=>(  //각각의 요소
        <div key = {it.id}>
          <div>작성자: {it.author} </div>
          <div>일기: {it.content} </div>
          <div>감정: {it.emotion} </div>
          <div>작성 시간(ms): {it.created_date} </div>
        </div>
      ))}
    </div>
  </div>
  );
};

DiaryList.defaultProps = {  //undefined로 전달받을 수 있는 것의 기본값 설정
  diaryList: []
};

export default DiaryList;